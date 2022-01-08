import "./MovieCard.css"

import AssignModModal from "../AssignModModal/AssignModModal";
import {useEffect, useState} from "react";
import {IconContext} from "react-icons";
import {AiFillStar} from "react-icons/ai";
import movieApi from "../../api/movie_api";

const MovieCard = ({movieID}) => {
    const [movie, setMovie] = useState({})
    useEffect(() => {
            const fetch_movie = async () => {
                try {
                    const response = await movieApi.getInfo(movieID)
                    if (response.movie){
                        setMovie(response.movie)
                    }
                } catch (error){
                    console.log('Error', error)
                }}
            fetch_movie()
    }, [])

    return (
        <div className="search-card">
            <img src={movie.poster} alt="poster"/>
            <div className="search-card-info">
                <span className="search-card-name">{movie.title}</span>
                <span className="search-card-year">{movie.year}</span>
                <div className="search-card-rating">
                    <IconContext.Provider value={{ color: "#D89E2D" }}>
                        <AiFillStar/>
                    </IconContext.Provider>
                    <span className="search-card-aggregate-ratting">{movie.rating}</span>
                    <span> / 100</span>
                </div>
                <p className="search-card-genres">{movie.genres}</p>
                <p className="search-card-content line-clamp-1"><b>Nội dung: </b>{movie.content}</p>
                <p className="search-card-actor"><b>Diễn viên: </b>{movie.actors}</p>
            </div>
        </div>
    )
}

export default MovieCard
