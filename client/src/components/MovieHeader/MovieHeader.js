import './MovieHeader.css'
import RatingScore from '../RatingScore/RatingScore.js'
import { useState } from 'react'
import $ from 'jquery'

const MovieHeader = (props) => {
    const [isLove, setLove] = useState(false);

    function displayLove() {
        if (isLove === false) {
            $(".icon-color").removeClass("fa-heart-o").addClass("fa-heart");
            setLove(true);
        } else {
            $(".icon-color").removeClass("fa-heart").addClass("fa-heart-o");
            setLove(false);
        }
    }

    return (
        <div className="movie-header">
            <div className="movie-title">
                <span className="movie-name">{props.movie.title}</span>
                <span className="movie-year">{props.movie.year}</span>
            </div>
            <div className="movie-poster"><img src={props.movie.poster} alt='poster' />
                <div className="icon-love">
                    <div className="btn" onClick={displayLove}><i className="icon-color fa fa-heart-o fa-2x"></i></div>
                </div>
            </div>
            <div className="trailer">
                <iframe
                    title={props.movie.title}
                    src={props.movie.trailer}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>

            <RatingScore movie={props.movie} display={true} />
        </div>
    )
}

export default MovieHeader
