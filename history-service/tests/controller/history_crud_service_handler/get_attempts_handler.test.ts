import { ChannelCredentials } from '@grpc/grpc-js';
import { ApiRequest } from '../../../src/api_server/api_server_types';
import { GetAttemptsRequest } from '../../../src/proto/history-crud-service';
import {
  makeMockAttemptStorage, testAttemptResponse, testHistoryAttemptEntity,
  testPasswordUser,
  testQuestion, testUser,
} from '../test_util';
import { AttemptStoreSearchResult, IStorage } from '../../../src/storage/storage';
import { UserCrudServiceClient } from '../../../src/proto/user-crud-service.grpc-client';
import { QuestionServiceClient } from '../../../src/proto/question-service.grpc-client';
import BaseHandler from '../../../src/controller/history_crud_service_handlers/base_handler';
import GetAttemptsHandler
  from '../../../src/controller/history_crud_service_handlers/get_attempts_handler';

describe('Get Attempts Handler', () => {
  const makeRequest = (
    limit: number,
    offset: number,
    questionId: number,
    username: string,
    userId: number,
    shouldOmitSubmission: boolean,
  ):
  ApiRequest<GetAttemptsRequest> => ({
    request: {
      limit,
      offset,
      questionId,
      username,
      userId,
      shouldOmitSubmission,
    },
    headers: {},
  });

  let mockAttemptsStorage = makeMockAttemptStorage();
  let mockStorage: IStorage = {
    getAttemptStore: jest.fn(() => mockAttemptsStorage),
  };
  const userClient = new UserCrudServiceClient(
    'userServiceUrl',
    ChannelCredentials.createInsecure(),
    {},
    {},
  );
  const questionClient = new QuestionServiceClient(
    'questionServiceUrl',
    ChannelCredentials.createInsecure(),
    {},
    {},
  );
  let handler = new GetAttemptsHandler(mockStorage, userClient, questionClient);

  beforeEach(() => {
    jest.clearAllMocks();
    mockAttemptsStorage = makeMockAttemptStorage();
    mockStorage = {
      getAttemptStore: jest.fn(() => mockAttemptsStorage),
    };
    handler = new GetAttemptsHandler(mockStorage, userClient, questionClient);

    jest.spyOn(BaseHandler.prototype, 'getQuestion')
      .mockImplementation(
        () => testQuestion,
      );
    jest.spyOn(BaseHandler.prototype, 'getUser')
      .mockImplementation(
        () => testPasswordUser,
      );
    mockAttemptsStorage.getAttemptsByUserIdAndQuestionId.mockImplementation(
      (): AttemptStoreSearchResult => ({
        attempts: [testHistoryAttemptEntity],
        totalCount: 1,
      }),
    );
    mockAttemptsStorage.getAttemptsByUserId.mockImplementation(
      (): AttemptStoreSearchResult => ({
        attempts: [testHistoryAttemptEntity, testHistoryAttemptEntity],
        totalCount: 2,
      }),
    );
  });

  test('Successful Get Attempts', async () => {
    const request = makeRequest(
      1,
      1,
      testQuestion.questionId,
      testUser.username,
      testUser.userId,
      false,
    );
    const response = await handler.handle(request);
    expect(response.response.errorMessage)
      .toBe('');
    expect(response.response.totalCount)
      .toBe(1);
    expect(response.response.attempts)
      .toStrictEqual([testAttemptResponse]);
  });

  test('Successful Get Attempts - No username', async () => {
    const request = makeRequest(
      1,
      0,
      testQuestion.questionId,
      '',
      testUser.userId,
      false,
    );
    const response = await handler.handle(request);
    expect(response.response.errorMessage)
      .toBe('');
    expect(response.response.totalCount)
      .toBe(1);
    expect(response.response.attempts)
      .toStrictEqual([testAttemptResponse]);
  });

  test('Successful Get Attempts - No question', async () => {
    const request = makeRequest(
      1,
      0,
      0,
      testUser.username,
      testUser.userId,
      false,
    );
    const response = await handler.handle(request);
    expect(response.response.errorMessage)
      .toBe('');
    expect(response.response.totalCount)
      .toBe(2);
    expect(response.response.attempts)
      .toStrictEqual([testAttemptResponse, testAttemptResponse]);
  });

  test('Bad Request Attempts - Invalid UserId & Name', async () => {
    const request = makeRequest(
      1,
      0,
      testQuestion.questionId,
      '',
      0,
      false,
    );
    const response = await handler.handle(request);
    expect(response.response.errorMessage)
      .not
      .toBe('');
    expect(response.response.totalCount)
      .toBe(0);
    expect(response.response.attempts)
      .toStrictEqual([]);
  });

  test('Bad Request Attempts - Invalid Username', async () => {
    const request = makeRequest(
      1,
      0,
      testQuestion.questionId,
      'FakeUsername',
      testUser.userId,
      false,
    );
    jest.spyOn(BaseHandler.prototype, 'getUser')
      .mockImplementation(
        () => undefined,
      );

    const response = await handler.handle(request);
    expect(response.response.errorMessage)
      .not
      .toBe('');
    expect(response.response.totalCount)
      .toBe(0);
    expect(response.response.attempts)
      .toStrictEqual([]);
  });
});
