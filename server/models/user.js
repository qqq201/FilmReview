import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    age: Number,
    gender: String,
    email: String,
    city: String,
    role: String
});

export default mongoose.model('User', userSchema)
