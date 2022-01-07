import mongoose from 'mongoose'
import ReviewModel from '../models/review.js'
import UserModel from '../models/user.js'

class ReviewController {
    //GET /api/review/:movie_id
    async getListReview(req, res, next){
        try {
            const reviews = await ReviewModel.find({movieId: req.params.movie_id, state: true});
            let listReview = []
            reviews.forEach((review) => {
                listReview.push(
                    {
                        'id': review._id,
                        'movieId': review.movieId,
                        'userId': review.userId,
                        'content': review.content,
                        'commentId': [],
                        'numberOfComments': review.numberOfComments,
                        'numberOfLikes': review.numberOfLikes,
                        'numberOfDislikes': review.numberOfDislikes,
                        'state': review.state,
                        'time': review.time
                    }
                )
            })

            return res.status(200).json({listReview})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }

    //GET /api/review/:movie_id/pReview
    async getListPendingReview(req, res, next){
        try {
            const reviews = await ReviewModel.find({movieId: req.params.movie_id, state: false });
            let listReview = []
            reviews.forEach((review) => {
                listReview = [...listReview,
                    {
                        'id': review._id,
                        'movieId': review.movieId,
                        'userId': review.userId,
                        'content': review.content,
                        'commentId': [],
                        'numberOfComments': review.numberOfComments,
                        'numberOfLikes': review.numberOfLikes,
                        'numberOfDislikes': review.numberOfDislikes,
                        'state': review.state,
                        'time': review.time
                    }]
            })

            return res.status(200).json({listReview})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }

    //POST /api/review/:review_id/approve
    async approveReview (req, res, next){
        try {
            var review = await ReviewModel.find({_id: req.params.review_id})
            if (review[0]) {
                review[0].state = true
                // upgrade user
                var user = await UserModel.find({_id: review[0].userId})
                user = user[0]
                if (user){
                    user.Point += 5
                    if (user.Point > 1000){
                        user.level++
                        user.Point -= 1000
                    }

                    const check = await UserModel.findByIdAndUpdate(user._id, user)
                }

                const test = await ReviewModel.findByIdAndUpdate(review[0]._id, review[0])
                return res.status(200).json({success:true})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }

    //POST /api/review/:review_id/deny
    async denyReview (req, res, next){
        try {
            var review = await ReviewModel.find({_id: req.params.review_id})
            if (review[0]) {
                // downgrade user
                var user = await UserModel.find({_id: review[0].userId})
                user = user[0]
                if (user){
                    user.Point -= 5
                    if (user.Point < 0){
                        user.level--
                        user.Point += 1000
                    }

                    const check = await UserModel.findByIdAndUpdate(user._id, user)
                }

                const test = await ReviewModel.findByIdAndDelete(review[0]._id)
                return res.status(200).json({success:true})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }

    async addReview(req, res) {
        try {
            const review = await ReviewModel({
                userId: req.body.user_id,
                movieId: req.body.movie_id,
                content: req.body.thought
            });
            await review.save();
            return res.status(200).json({success:true})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }
}

export default new ReviewController()
