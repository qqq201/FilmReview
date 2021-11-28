import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: String,
    name: String,
    email: String,
    dob: Date,
    gender: String,
    city: String,
    favoriteList: [{
        moviedId: String
    }],

    level: {
        Number,
        default: 0
    },

    Point: Number,
    releasedDate: {
        type: Date,
    },
    notification: [{
        content: String,
        state: Number,
        image: String,
        earn: Number
    }],
    assignedMovie: [{
        moviedbId: String,
    }]

}, {collection: 'user'});
const userModel = mongoose.model('User', userSchema);

export default userModel;
