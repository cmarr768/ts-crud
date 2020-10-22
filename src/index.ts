import express from 'express';
import { userInfo } from 'os';
import { Database } from "./database";
const User = require('./models/user');

const app = express();
const port = 3000;
const database = new Database();
database.connect()
    .then(() => {
        const user = new User({ email: 'test', firstName: 'tester' })
        console.log('user', user)
        return user.save()
    })

app.get('/', (req, res) => {
    res.send('express setup');
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});