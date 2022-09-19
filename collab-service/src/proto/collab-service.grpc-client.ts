/* eslint-disable */
// @generated by protobuf-ts 2.8.0 with parameter server_grpc1,client_grpc1,eslint_disable,long_type_number
// @generated from protobuf file "collab-service.proto" (package "collaboration_service", syntax proto3)
// tslint:disable
import { CollabTunnelService } from "./collab-service";
import type { CollabTunnelResponse } from "./collab-service";
import type { CollabTunnelRequest } from "./collab-service";
import { CollabService } from "./collab-service";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { VerifyRoomResponse } from "./collab-service";
import type { VerifyRoomRequest } from "./collab-service";
import * as grpc from "@grpc/grpc-js";
/**
 * @generated from protobuf service collaboration_service.CollabService
 */
export interface ICollabServiceClient {
    /**
     * @generated from protobuf rpc: VerifyRoom(collaboration_service.VerifyRoomRequest) returns (collaboration_service.VerifyRoomResponse);
     */
    verifyRoom(input: VerifyRoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: VerifyRoomResponse) => void): grpc.ClientUnaryCall;
    verifyRoom(input: VerifyRoomRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: VerifyRoomResponse) => void): grpc.ClientUnaryCall;
    verifyRoom(input: VerifyRoomRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: VerifyRoomResponse) => void): grpc.ClientUnaryCall;
    verifyRoom(input: VerifyRoomRequest, callback: (err: grpc.ServiceError | null, value?: VerifyRoomResponse) => void): grpc.ClientUnaryCall;
}
/**
 * @generated from protobuf service collaboration_service.CollabService
 */
export class CollabServiceClient extends grpc.Client implements ICollabServiceClient {
    private readonly _binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions>;
    constructor(address: string, credentials: grpc.ChannelCredentials, options: grpc.ClientOptions = {}, binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions> = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * @generated from protobuf rpc: VerifyRoom(collaboration_service.VerifyRoomRequest) returns (collaboration_service.VerifyRoomResponse);
     */
    verifyRoom(input: VerifyRoomRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: VerifyRoomResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: VerifyRoomResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: VerifyRoomResponse) => void)): grpc.ClientUnaryCall {
        const method = CollabService.methods[0];
        return this.makeUnaryRequest<VerifyRoomRequest, VerifyRoomResponse>(`/${CollabService.typeName}/${method.name}`, (value: VerifyRoomRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): VerifyRoomResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
}
/**
 * @generated from protobuf service collaboration_service.CollabTunnelService
 */
export interface ICollabTunnelServiceClient {
    /**
     * @generated from protobuf rpc: OpenStream(stream collaboration_service.CollabTunnelRequest) returns (stream collaboration_service.CollabTunnelResponse);
     */
    openStream(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<CollabTunnelRequest, CollabTunnelResponse>;
    openStream(options?: grpc.CallOptions): grpc.ClientDuplexStream<CollabTunnelRequest, CollabTunnelResponse>;
}
/**
 * @generated from protobuf service collaboration_service.CollabTunnelService
 */
export class CollabTunnelServiceClient extends grpc.Client implements ICollabTunnelServiceClient {
    private readonly _binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions>;
    constructor(address: string, credentials: grpc.ChannelCredentials, options: grpc.ClientOptions = {}, binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions> = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * @generated from protobuf rpc: OpenStream(stream collaboration_service.CollabTunnelRequest) returns (stream collaboration_service.CollabTunnelResponse);
     */
    openStream(metadata?: grpc.Metadata | grpc.CallOptions, options?: grpc.CallOptions): grpc.ClientDuplexStream<CollabTunnelRequest, CollabTunnelResponse> {
        const method = CollabTunnelService.methods[0];
        return this.makeBidiStreamRequest<CollabTunnelRequest, CollabTunnelResponse>(`/${CollabTunnelService.typeName}/${method.name}`, (value: CollabTunnelRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): CollabTunnelResponse => method.O.fromBinary(value, this._binaryOptions), (metadata as any), options);
    }
}
