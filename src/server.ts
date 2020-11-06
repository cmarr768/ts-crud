import express from 'express';
import * as userRouter from "./controllers/user"
import * as pingController from "./controllers/ping"

const app = express();
app.get('/', (req, res) => {
    res.send('express setup');
});
app.use('/users', userRouter.router)
app.use('/ping', pingController.router)

export { app }