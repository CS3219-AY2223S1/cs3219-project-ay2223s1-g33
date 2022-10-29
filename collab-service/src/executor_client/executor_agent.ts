import { IExecuteServiceClient } from './executor_client_types';
import ExecuteServiceClient from './executor_client';
import { ExecuteCode } from '../proto/types';
import Logger from '../utils/logger';

const timeout = 2 * 1000;

class ExecuteAgent implements IExecuteAgent {
  executeClient: IExecuteServiceClient;

  constructor(judge0URL: string) {
    this.executeClient = new ExecuteServiceClient(judge0URL);
  }

  uploadCode(executeCode: ExecuteCode): Promise<string> {
    return new Promise<string>((resolve) => {
      this.executeClient.createExecution(
        {
          executeCode,
        },
        {
          deadline: timeout,
        },
        (value) => {
          if (!value.errorMessage) {
            resolve(value.token);
          } else {
            Logger.error(value.errorMessage);
          }
        },
      );
    });
  }

  retrieveResult(token: string): Promise<string> {
    return new Promise<string>((resolve) => {
      this.executeClient.retrieveExecution(
        {
          token,
        },
        {
          deadline: timeout,
        },
        (value) => {
          if (value.errorMessage === 'Accepted') {
            resolve(value.output);
          } else if (value.errorMessage === 'Runtime Error') {
            resolve(value.errorMessage);
          } else {
            resolve('');
          }
        },
      );
    });
  }
}

function createExecuteAgent(
  judge0URL: string,
): IExecuteAgent {
  return new ExecuteAgent(judge0URL);
}

export default createExecuteAgent;