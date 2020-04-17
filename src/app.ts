import 'dotenv/config';

import express, {
  Express,
  Response,
  Request,
  ErrorRequestHandler,
} from 'express';
import path from 'path';
import * as Sentry from '@sentry/node';
import 'express-async-error';
import cors from 'cors';

import routes from './routes';
import sentryConfig from './config/sentry';
import dotenvConfig from './config/dotenv';

import './database';

class App {
  server: Express;

  constructor() {
    dotenvConfig();
    this.server = express();

    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares(): void {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'temp', 'uploads')),
    );
  }

  routes(): void {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(
      async (
        error: ErrorRequestHandler,
        request: Request,
        response: Response,
      ) => {
        return response.status(500).json({ error: 'Internal server error' });
      },
    );
  }
}

export default new App().server;
