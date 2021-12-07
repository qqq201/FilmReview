import './MoviePage.css'
import MovieHeader from '../../components/MovieHeader/MovieHeader.js'
import MovieInfo from '../../components/MovieInfo/MovieInfo.js'
import Review from "../../components/Review/Review";


const MoviePage = () => {
    return (
        <div className="movie-page">
            <MovieHeader/>
            <MovieInfo/>
            <div>
            <Review/>
            </div>
        </div>
    )
}


export default MoviePage
