import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({

    userId: {
        type : String,
        required: true
    },

    movieId: {
        type : String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    commentId: {
        type: [String],
        default: []
    },
    numberOfComments: {
        type: Number,
        default: 0
    },
    numberOfLikes: {
        type: Number,
        default: 0
    },
    numberOfDislikes: {
        type: Number,
        default: 0
    },
    state: {
        type :Boolean,
        default: false
    },

}, { collection: 'review' });
const reviewModel = mongoose.model('Review', reviewSchema);

export default reviewModel;