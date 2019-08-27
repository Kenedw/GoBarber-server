import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // authetication for below routes

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

export default routes;
