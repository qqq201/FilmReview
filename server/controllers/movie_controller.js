import mongoose from 'mongoose'
import MovieModel from '../models/movie.js'
import UserModel from '../models/user.js'

class MovieController {
    // POST /api/movie
    async add_new_movie(req, res, next) {
        // implement here
        return res.status(200).json({ success: true, message: 'congrats' })
    }

    // POST /api/movie/:id/update
    async update(req, res, next){
        // implement here
        return res.status(200).json({ success: true, message: 'congrats' })
    }

    async rate(req, res, next){
        try {
            var movie = await MovieModel.find({_id: req.params.id});
            var movie = movie[0]
            movie.rating = 0
            movie.ratedScores.push({
                user_id: req.body.user_id,
                score: req.body.score
            })
            
            var rated_scores = movie.ratedScores

            var n = 0
            var user = {}

            for (let i = 0; i < rated_scores.length; i++) {
                user = await UserModel.find({_id: rated_scores[i].user_id})
                movie.rating += user[0].level * rated_scores[i].score
                n += Number(user[0].level)
            }

            movie.rating /= n

            try {
                const test = await MovieModel.findByIdAndUpdate(req.params.id, movie)
                return res.status(200).json({success: true, score: movie.rating})
            } catch (error) {
                console.log(error)
            }
            return res.status(500).json({success: false, message: 'Internal server error'})
        } catch (error) {
            console.log(error)
            return res.status(500).json({success: false, message: 'Internal server error'})
        }
    }

    //GET /api/movie/:id
    async getInfo(req, res, next){
        try {
            const movie = await MovieModel.find({_id: req.params.id});
            if (movie[0])
                return res.status(200).json({movie: movie[0]})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }

    //GET /api/movie/gallery
    async getGallery(req, res, next){
        try {
            const movies = await MovieModel.find({});
            let gallery = []

            movies.forEach((item, i) => {
                gallery.push(
                    {
                        'id': item._id,
                        'title': item.title,
                        'year': item.year,
                        'poster': item.poster,
                        'genres': item.genres,
                        'moderator': item.moderator
                    }
                )
            })

            return res.status(200).json({gallery: gallery})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }
}

export default new MovieController()
