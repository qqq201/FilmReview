import user_router from './user.js'
import movie_router from './movie.js'


export default function route(app) {
    app.use('/api/user', user_router)
    app.use('/api/movie', movie_router)
    app.get('/api', (req, res) => {
        res.send({'message': 'hello'})
    })
}
