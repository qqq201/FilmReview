import mongoose from 'mongoose'
import ReviewModel from '../models/review.js'
import reviewModel from "../models/review.js";

class ReviewController {
    //GET /api/review/:movie_id
    async getListReview(req, res, next){
        try {
            console.log(req.params.movie_id, "review")
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
            console.log(req.params.movie_id, "pending review")
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
            console.log(req.params.review_id)
            var review = await ReviewModel.find({_id: req.params.review_id})
            console.log(review)
            if (review[0]) {
                console.log(review[0])
                review[0].state = true
                const test = await ReviewModel.findByIdAndUpdate(review[0]._id, review[0])
                console.log(test)
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
                console.log(review[0])
                const test = await ReviewModel.findByIdAndDelete(review[0]._id)
                console.log(test)
                return res.status(200).json({success:true})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }

    async addReview(req, res) {
        try {
            const review = await reviewModel({
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
