import NewsModel from '../models/news.js'

class MovieController {
    // POST /api/movie
    async getNews(req, res, next) {
        try {
            // Check for existing user
            const data = await NewsModel.find({})

            return res.status(200).json({news: data})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }
}

export default new MovieController()