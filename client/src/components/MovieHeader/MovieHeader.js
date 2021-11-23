import './MovieHeader.css'
import RatingScore from '../RatingScore/RatingScore.js'
import test from '../assets/Image/Movie/dark_poster.jpg'


const MovieHeader = () => {
    const movie = {
        title: "DARK",
        year: "2019-2020",
        trailer: "https://www.youtube.com/embed/BZ5OCIJVErw?rel=0&autohide=1"
    }
    return (
        <div className="movie-header">
            <div className="title">
                <span className="name">{movie.title}</span>
                <span className="year">{movie.year}</span>
            </div>
            <div className="movie-poster"><img src={test} alt='poster'/></div>
            <div className="trailer">
                <iframe
                    title={movie.title}
                    src={movie.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <RatingScore/>
        </div>
    )
}

export default MovieHeader
