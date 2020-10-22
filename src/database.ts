import mongoose from "mongoose";

export class Database {
    public connect = () => {
        if (mongoose.connection && mongoose.connection.readyState !== 0) {
            return;
        }
        mongoose.connect("mongodb://127.0.0.1:27017/ts-crud", {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        mongoose.connection.once("open", async () => {
            console.log("Connected to database");
        });
        mongoose.connection.on("error", () => {
            console.log("Error connecting to database");
        });
    };
    public disconnect = () => {
        if (!mongoose.connection || mongoose.connection.readyState === 0) {
            return;
        }
        mongoose.disconnect();
    };
}