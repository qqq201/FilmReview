import mongoose from 'mongoose'
import ReviewModel from '../models/review.js'

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
}

export default new ReviewController()
