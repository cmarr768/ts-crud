import express from 'express';
import cors from "cors"
import * as userRouter from "./controllers/user"
import * as pingController from "./controllers/ping"
import IBaseController from './interfaces/base-controller';
import container from "./container"
import TYPES from './types';

const app = express();
app.use(cors())
app.get('/', (req, res) => {
    res.send('express setup');
});

const controllers: IBaseController[] = container.getAll<IBaseController>(TYPES.Controller);
controllers.forEach(controller => app.use(controller.getPath(), controller.getRouter()));
// app.use('/users', userRouter.router)
app.use('/ping', pingController.router)

export { app }