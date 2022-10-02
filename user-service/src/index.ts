import { Request, Response } from 'express';

import getApiServer from './api_server/api_server';
import createAuthenticationService from './auth/authentication_agent';
import { IAuthenticationAgent } from './auth/authentication_agent_types';
import UserBFFServiceApi from './controller/user_service_controller';
import UserServiceApi from './controller/user_crud_service_controller';
import AppStorage from './storage/app_storage';
import loadEnvironment from './utils/env_loader';
import Constants from './constants';
import Logger from './utils/logger';

const version = `${Constants.VERSION_MAJOR}.${Constants.VERSION_MINOR}.${Constants.VERSION_REVISION}`;
Logger.info(`Starting Collab Service [V${version}]`);
const envConfig = loadEnvironment();

const dataStore: AppStorage = new AppStorage();
const authService: IAuthenticationAgent = createAuthenticationService(
  envConfig.SESSION_SERVICE_URL,
);

const apiServer = getApiServer(envConfig.HTTP_PORT, envConfig.GRPC_PORT);
const expressApp = apiServer.getHttpServer();

expressApp.get('/', (_: Request, resp: Response) => {
  resp.status(200).send('Welcome to User Service');
});

apiServer.registerServiceRoutes(new UserServiceApi(dataStore));
apiServer.registerServiceRoutes(new UserBFFServiceApi(authService));
apiServer.bind();
