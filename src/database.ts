import mongoose from "mongoose";

export class Database {
    public connect = async () => {
        if (mongoose.connection && mongoose.connection.readyState !== 0) {
            return;
        }
        await mongoose.connect("mongodb://127.0.0.1:27017/ts-crud", {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("Connected to database");
    };
    public disconnect = () => {
        if (!mongoose.connection || mongoose.connection.readyState === 0) {
            return;
        }
        mongoose.disconnect();
    };
}