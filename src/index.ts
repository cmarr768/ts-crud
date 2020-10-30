import express from 'express';
import { Database } from "./database";
const User = require('./models/user');
const userRouter = require('./controllers/user')

const app = express();
const port = 3000;
const database = new Database();
database.connect()
    .then(() => {
        const user = new User({ email: 'test', firstName: 'tester' })
        return user.save()
    })

app.get('/', (req, res) => {
    res.send('express setup');
});
app.use('/users', userRouter)

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});

module.exports = app