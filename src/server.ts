import express from 'express';
import cors from "cors"
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

export { app }