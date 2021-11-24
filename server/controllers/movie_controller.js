import mongoose from 'mongoose'
import MovieModel from '../models/movie.js'

class UserController {
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

    //GET /api/movie/:id/view
    async view(req, res, next){
        return res.status(200).json({ success: true, message: 'congrats' })
    }
}

export default new UserController()
