import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    email: String,
    city: String,
    role: String,

}, {collection : 'people'});


const userModel = mongoose.model('User', userSchema);


export {
    userModel
}
