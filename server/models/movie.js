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
    rateScore : [
        {
            userId: String,
            score: Number
        },
    ],
    photos : [String],
    reviews : [String],
    favoriteCount : {
        type : Number,
        default : 0
    },
    moderator : [String], //kha, quy

}, {collection : 'movie'});


const movieModel = mongoose.model('Movie', movieSchema);


export default movieModel;
