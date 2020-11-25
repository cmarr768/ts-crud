import mongoose from "mongoose";

export class Database {
    constructor(private readonly connectionString: string) {
    }

    public connect = async () => {
        if (mongoose.connection && mongoose.connection.readyState !== 0) {
            return;
        }
        await mongoose.connect(this.connectionString, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("Connected to database");
    };

    public disconnect = async () => {
        if (!mongoose.connection || mongoose.connection.readyState === 0) {
            return;
        }
        await mongoose.disconnect();
    };
}