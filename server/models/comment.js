import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    id : String,
    userId : String,
    reviewId : String,
    content : String,
    time : String
}, {collection : 'comment'});
const commentModel = mongoose.model('Comment', commentSchema);

export default commentModel;