import './MovieHeader.css'
import RatingScore from '../RatingScore/RatingScore.js'

const MovieHeader = () => {
    const movie = {
        id: 123,
        title: "DARK",
        year: "2019-2020",
        trailer: "https://www.youtube.com/embed/BZ5OCIJVErw?rel=0&autohide=1",
        poster: "https://tse2.mm.bing.net/th?id=OIP.RyEjgOqZqlIzdtyFsHcizwHaK-&pid=Api"
    }

    return (
        <div className="movie-header">
            <div className="movie-title">
                <span className="movie-name">{movie.title}</span>
                <span className="movie-year">{movie.year}</span>
            </div>
            <div className="movie-poster"><img src={movie.poster} alt='poster'/></div>
            <div className="trailer">
                <iframe
                    title={movie.title}
                    src={movie.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>

            <RatingScore movie_id={movie.id} display={true}/>
        </div>
    )
}

export default MovieHeader
