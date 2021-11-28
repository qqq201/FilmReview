import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    userId: String,
    password: String,
    role: String,
    name: String,
    email: String,
    dob: Date,
    gender: String,
    city: String,
    favoriteList: [{
        String
    }],
    level: Number,
    Point: Number,
    releasedDate: Date,
    notification: [{
        content: String,
        state: Number,
        image: String,
        earn: Number
    }],
    assignedMovie: [{
        moviedbId: String,
    }] // movieId

}, {collection: 'user'});
const userModel = mongoose.model('User', userSchema);

export default userModel;
