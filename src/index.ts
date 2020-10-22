import express from 'express';
import { Database } from "./database";

const app = express();
const port = 3000;
const database = new Database()
database.connect()

app.get('/', (req, res) => {
    res.send('express setup');
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});