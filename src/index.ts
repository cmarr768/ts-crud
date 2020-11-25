import "reflect-metadata"
import { App } from "./server"
import { Database } from "./database";

const database = new Database("mongodb://127.0.0.1:27017/ts-crud");
const port = 3001;
const app = new App(port, database);
app.start();