import { app } from "./server"
import { Database } from "./database";
const database = new Database();

const port = 3001;

app.listen(port, async () => {
    await database.connect();
    console.log(`server is listening on ${port}`);
});