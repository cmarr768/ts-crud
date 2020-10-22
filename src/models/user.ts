import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String
},
    {
        timestamps: true
    })

module.exports = mongoose.model('User', userSchema);