import { ServerDuplexStream } from '@grpc/grpc-js';
import { createClient, RedisClientType } from 'redis';

import buildErrorResponse from '../adapter/room_handler';
import { createRedisPubSubAdapter } from '../redis_adapter/redis_pubsub_adapter';
import createRoomSessionService from '../room_auth/room_session_agent';
import getQuestionByDifficulty from '../adapter/question_handler';
import setQuestionRedis from '../redis_adapter/redis_question_adapter';
import { CollabTunnelRequest, CollabTunnelResponse, VerifyRoomErrorCode } from '../proto/collab-service';
import { CollabTunnelSerializer, TunnelMessage } from './collab_tunnel_serializer';
import { createDisconnectMessage } from '../room/disconnect_message_builder';
import { IRoomSessionAgent } from '../room_auth/room_session_agent_types';
import { createRedisTopicPool, RedisTopicPool } from '../redis_adapter/redis_topic_pool';

const PROXY_HEADER_USERNAME = 'X-Gateway-Proxy-Username';
const PROXY_HEADER_NICKNAME = 'X-Gateway-Proxy-Nickname';
const PROXY_HEADER_ROOM_TOKEN = 'X-Gateway-Proxy-Room-Token';

function createCallWriter(
  call: ServerDuplexStream<CollabTunnelRequest, CollabTunnelResponse>,
  username: string,
): (data: TunnelMessage) => void {
  return (message: TunnelMessage): void => {
    const res = CollabTunnelResponse.create(
      {
        data: Buffer.from(message.data),
        flags: VerifyRoomErrorCode.VERIFY_ROOM_ERROR_NONE,
      },
    );

    if (message.sender !== username) {
      call.write(res);
    }
  };
}

export default class CollabTunnelController {
  pub: RedisClientType;

  topicPool: RedisTopicPool;

  roomTokenAgent: IRoomSessionAgent;

  constructor(redisUrl: string, roomSecret: string) {
    this.roomTokenAgent = createRoomSessionService(roomSecret);
    this.pub = createClient({
      url: redisUrl,
    });

    const sub: RedisClientType = createClient({
      url: redisUrl,
    });

    this.pub.connect();
    sub.connect();

    this.topicPool = createRedisTopicPool(sub);
  }

  async handleOpenStream(
    call: ServerDuplexStream<CollabTunnelRequest, CollabTunnelResponse>,
  ) {
    // When stream opens
    const roomToken: string = call.metadata.get(PROXY_HEADER_ROOM_TOKEN)[0].toString();
    const username: string = call.metadata.get(PROXY_HEADER_USERNAME)[0].toString();
    const nickname: string = call.metadata.get(PROXY_HEADER_NICKNAME)[0].toString();

    const data = await this.roomTokenAgent.verifyToken(roomToken);
    if (!data) {
      // Kill stream when invalid
      const errMsg = buildErrorResponse();
      call.write(errMsg);
      call.end();
      return;
    }

    const { roomId, difficulty } = data;
    const question = await getQuestionByDifficulty(difficulty);
    await setQuestionRedis(roomId, question, this.pub);

    const redisPubSubAdapter = createRedisPubSubAdapter(
      this.pub,
      this.topicPool,
      username,
      roomId,
      new CollabTunnelSerializer(),
    );

    await redisPubSubAdapter.addOnMessageListener(createCallWriter(call, username));

    // When data is detected
    call.on('data', (request: CollabTunnelRequest) => {
      redisPubSubAdapter.pushMessage({
        data: request.data,
        sender: username,
      });
    });

    // When stream closes
    call.on('end', () => {
      redisPubSubAdapter.pushMessage({
        data: createDisconnectMessage(nickname),
        sender: username,
      });

      const endFunc = () => call.end();
      redisPubSubAdapter.clean(endFunc);
    });
  }
}