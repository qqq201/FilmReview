import mongoose from 'mongoose'

const articleSchema = new mongoose.Schema({
    id : String,
    title : String,
    content : String,
    thumbnail : String,
    articleLink: String,
    time : Date
}, {collection : 'article'});
const articleModel = mongoose.model('Article', articleSchema);

export default articleModel;
