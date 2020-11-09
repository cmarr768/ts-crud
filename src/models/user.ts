import mongoose, { Schema, Document } from "mongoose"

interface IUser extends Document {
    email: string,
    firstName: string,
    lastName: string
}

const userSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String
},
    {
        timestamps: true
    });

export const User = mongoose.model<IUser>('User', userSchema)