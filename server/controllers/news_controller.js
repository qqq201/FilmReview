import NewsModel from '../models/news.js'
import FormData from 'form-data'
import cloudinary from '../utils/cloudinary.js'


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
            const uploadResponse = await cloudinary.uploader.upload(req.body.thumbnail, function(error, result) {console.log(result, error); });
            console.log(uploadResponse)
            
            req.body.thumbnail = uploadResponse.url
            
            const news = new NewsModel(req.body)
            await news.save()
            
            return res.status(200).json({message: 'Success'})
        } catch (error) {
            console.log(error)
            res.status(500).json({success: false, message: 'Internal server error'})
        }
    }
}

export default new NewsController()