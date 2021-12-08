import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
    id: String,
    movieId: String,
    userId: String,
    commentId: [String],
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
    state: String,
    time: {Date, default: Date.now}
}, {collection: 'review'});
const reviewModel = mongoose.model('Review', reviewSchema);

export default reviewModel;
