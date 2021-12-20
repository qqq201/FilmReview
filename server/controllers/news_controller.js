import NewsModel from '../models/news.js'

class NewsController {
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

    async upload(req, res, next) {
        try {
            //res.thumbnail -> up len cloudianry -> url-> gắn vô res.thumbnail -> mongo
            

            return res.status(200).json({message: 'Success'})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }
}

export default new NewsController()