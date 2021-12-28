import mongoose from 'mongoose'
import MovieModel from '../models/movie.js'
import UserModel from '../models/user.js'
import cloudinary from '../utils/cloudinary.js'

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
            var rated_scores = movie.ratedScores
            var check = true

            for (let i = 0; i < rated_scores.length; i++){
                if (rated_scores[i].user_id === req.body.user_id){
                    check = false
                    rated_scores[i].score = req.body.score
                }
            }

            if (check === true){
                rated_scores.push({
                    user_id: req.body.user_id,
                    score: req.body.score
                })
            }


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
                        'rating': item.rating
                    }
                )
            })

            return res.status(200).json({gallery: gallery})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }

    //GET /api/movie/gallery/:id
    async getModGallery(req, res, next){
        try {
            var mod = await UserModel.find({_id: req.params.id})
            mod = mod[0]

            let gallery = []

            for (let i = 0; i < mod.assignedMovie.length; i++){
                var movie = await MovieModel.find({_id: mod.assignedMovie[i]})
                gallery.push({
                    'id': movie[0]._id,
                    'title': movie[0].title,
                    'year': movie[0].year,
                    'poster': movie[0].poster,
                    'genres': movie[0].genres,
                    'rating': movie[0].rating
                })
            }

            return res.status(200).json({gallery: gallery})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }

    //POST /api/movie/:id/assignModerators
    async assignModerators(req, res, next) {
        try {
            var movie = await MovieModel.find({_id: req.params.id})
            movie = movie[0]
            const new_moderators = req.body.moderators

            for (let i = 0; i < new_moderators.length; i++){
                if (!movie.moderator.includes(new_moderators[i])){
                    var mod = await UserModel.find({_id: new_moderators[i]})
                    mod = mod[0]
                    mod.assignedMovie.push(movie._id)
                    const test = await UserModel.findByIdAndUpdate(new_moderators[i], mod)
                }
            }

            movie.moderator = req.body.moderators
            const test = await MovieModel.findByIdAndUpdate(movie._id, movie)
            return res.status(200).json({success: true})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }

    //GET /api/movie/:id/moderators
    async getModerators(req, res, next){
        try {
            var movie = await MovieModel.find({_id: req.params.id})
            movie = movie[0]

            var moderators = await UserModel.find({role: 'moderator'})
            var assign_list = []

            moderators.forEach((item, i) => {
                assign_list.push(
                    {
                        'id': item._id,
                        'name': item.name,
                        'avatar': item.image,
                        'email': item.email,
                        'assigned': movie.moderator.includes(item._id) ? true : false
                    }
                )
            })

            return res.status(200).json({moderators: assign_list})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }

    async editcontent (req, res, next){
        try {
            var movie = await MovieModel.find({_id: req.params.id})
            movie = movie[0]
            movie.content = req.body.content
            const test = await MovieModel.findByIdAndUpdate(movie._id, movie)
            return res.status(200).json({success:true})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }
    async editGenres (req, res, next){
        try {
            var movie = await MovieModel.find({_id: req.params.id})
            movie = movie[0]
            movie.genres = req.body.genres
            const test = await MovieModel.findByIdAndUpdate(movie._id, movie)
            return res.status(200).json({success:true})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }

    async editActors (req, res, next){
        try {
            var movie = await MovieModel.find({_id: req.params.id})
            movie = movie[0]
            movie.actors = req.body.actors
            const test = await MovieModel.findByIdAndUpdate(movie._id, movie)
            return res.status(200).json({success:true})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }

    async editDirector (req, res, next){
        try {
            var movie = await MovieModel.find({_id: req.params.id})
            movie = movie[0]
            movie.director = req.body.director
            const test = await MovieModel.findByIdAndUpdate(movie._id, movie)
            return res.status(200).json({success:true})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }

    async upload(req, res, next) {
        try {

            const uploadResponse = await cloudinary.uploader.upload(req.body.poster, function(error, result) {console.log(result, error); });
            req.body.poster = uploadResponse.url

             for( let i=0 ; i<req.body.photos.length ; i++){
                 const uploadResponse = await cloudinary.uploader.upload(req.body.photos[i] , function(error, result) {console.log(result, error); });
                 req.body.photos[i] = uploadResponse.url;
             }


             req.body.ratedScores =[]

             req.body.rating = 0

             req.body.reviews = []
             req.body.favoriteCount =0

             req.body.moderator = []
             const movienew = new MovieModel(req.body)
             await movienew.save()




            return res.status(200).json({message: 'Success'})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }



}

export default new MovieController()
