import './MoviePage.css'
import MovieHeader from '../../components/MovieHeader/MovieHeader.js'
import MovieInfo from '../../components/MovieInfo/MovieInfo.js'

const MoviePage = () => {
    return (
        <div className="movie-page">
            <MovieHeader/>
            <MovieInfo/>
        </div>
    )
}


export default MoviePage
