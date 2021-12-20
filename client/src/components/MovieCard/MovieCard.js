import "./MovieCard.css"

import AssignModModal from "../AssignModModal/AssignModModal";
import {useState} from "react";
import {IconContext} from "react-icons";
import {AiFillStar} from "react-icons/ai";

const MovieCard = ({movie}) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="search-card">
            <AssignModModal isOpen={modalOpen} setOpenModal={setModalOpen} movie_id={movie.id}/>
            <img src={movie.thumbnail} alt="poster"/>
            <div className="search-card-info">
                <span className="search-card-name">{movie.title}</span>
                <span className="search-card-year">{movie.yearOfProduction}</span>
                <div className="search-card-rating">
                    <IconContext.Provider value={{ color: "#D89E2D" }}>
                        <AiFillStar/>
                    </IconContext.Provider>
                    <span className="search-card-aggregate-ratting">{movie.score}</span>
                    <span> / 100</span>
                </div>
                <p className="search-card-genres">{movie.genres}</p>
                <p className="search-card-content"><b>Nội dung: </b>{movie.content}</p>
                <p className="search-card-actor"><b>Diễn viên: </b>{movie.actors}</p>
            </div>
        </div>
    )
}

export default MovieCard
