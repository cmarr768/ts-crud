import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    address: String,
    age: Number,
    dateJoined: Date
},
    {
        timestamps: true
    });

const User = mongoose.model('User', userSchema)

export { User };