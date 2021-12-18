import './MovieHeader.css'
import RatingScore from '../RatingScore/RatingScore.js'
import { useState } from 'react'
import { set } from 'mongoose'
import $ from 'jquery'

const MovieHeader = () => {
    const movie = {
        id: 123,
        title: "DARK",
        year: "2019-2020",
        trailer: "https://www.youtube.com/embed/BZ5OCIJVErw?rel=0&autohide=1",
        poster: "https://tse2.mm.bing.net/th?id=OIP.RyEjgOqZqlIzdtyFsHcizwHaK-&pid=Api"
    }

    const [isLove, setLove] = useState(false);

    let firstTime = true;

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
                <span className="movie-name">{movie.title}</span>
                <span className="movie-year">{movie.year}</span>
            </div>
            <div className="movie-poster"><img src={movie.poster} alt='poster' />
                <div class="icon-love">
                    <div class="btn" onClick={displayLove}><i class="icon-color fa fa-heart-o fa-2x"></i></div>
                </div>
            </div>
            <div className="trailer">
                <iframe
                    title={movie.title}
                    src={movie.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>

            <RatingScore movie_id={movie.id} display={true} />
        </div>
    )
}

export default MovieHeader
