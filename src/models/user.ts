import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    address: String,
    dateOfBirth: Date
},
    {
        timestamps: true
    });

const User = mongoose.model('User', userSchema)

export { User };