import user_router from './user.js'
import movie_router from './movie.js'
import news_router from './news.js'
import review_router from './review.js'


export default function route(app) {
    app.use('/api/user', user_router)
    app.use('/api/movie', movie_router)
    app.use('/api/news', news_router)
    app.use('/api/review', review_router)
    app.get('/api', (req, res) => {
        res.send({'message': 'hello'})
    })
}
