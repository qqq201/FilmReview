import movie_router from './movie.js'

export default function route(app){
    app.use('/movie', movie_router)
}
