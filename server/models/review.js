import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
    id : String,
    moviedId : String,
    userId : String,
    commments : [{
        comment_id: String,
        content : String,
        date : Date
    }],
    numberOfComments : Number,
    numberOfLikes : Number,
    numberOfDislikes : Number,
    state : String,
    time : Date
}, {collection : 'review'});
const reviewModel = mongoose.model('Review', reviewSchema);

export default reviewModel;
