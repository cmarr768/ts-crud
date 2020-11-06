import express from 'express';
import cors from "cors"
import * as userRouter from "./controllers/user"
import * as pingController from "./controllers/ping"

const app = express();
app.use(cors())
app.get('/', (req, res) => {
    res.send('express setup');
});
app.use('/users', userRouter.router)
app.use('/ping', pingController.router)

export { app }