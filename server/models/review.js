import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
    id: String,
    moviedId: String,
    userId: String,
    commments: [{
        comment_id: String,
        content: String,
        date: {
            type: Date,
            default: Date.now
        }
    }],
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
