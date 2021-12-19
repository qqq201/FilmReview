import mongoose from 'mongoose'
import MovieModel from '../models/movie.js'

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

    //GET /api/movie/:id
    async getInfo(req, res, next){
        return res.status(200).json({ success: true, message: 'congrats' })
    }

    //GET /api/movie/gallery
    async getGallery(req, res, next){
            try {
            // Check for existing user
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
