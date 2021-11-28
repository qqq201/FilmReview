import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    id : String,
    title : String,
    year : Number,
    poster: String,
    trailer: String,
    content: String,
    genres: [String],
    actors: [String],
    director: [String],
    rateScore : {
        user_score : {
            type : Number,
            default : 0
        },
    },
    photos : [String],
    reviews : [{
        user_id : String,
        user_name : String,
        user_photo : String,
        user_score : {
            type : Number,
            default : 0
        },
        content : String,
        created_at : {
            Date,
            default : Date.now
        }
    }],
    favoriteCount : {
        type : Number,
        default : 0
    },
    moderator : [String],

}, {collection : 'movie'});


const movieModel = mongoose.model('Movie', movieSchema);


export default movieModel;
