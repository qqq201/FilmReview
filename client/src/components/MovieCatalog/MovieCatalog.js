import test from "../assets/Image/Galleries/MoneyHeist.jfif"
import AssignModModal from '../AssignModModal/AssignModModal.js'
import { AiFillStar } from 'react-icons/ai'
import { IconContext } from "react-icons"
import { Link } from "react-router-dom"
import { useState } from 'react'
import './MovieCatalog.css'

const MovieCatalog = (props) => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
        <div className="gallerties-item">
			<AssignModModal isOpen={modalOpen} setOpenModal={setModalOpen} movie_id={props.movie.id}/>

            <img src={test} alt="poster"/>
            <div className="item-info">
                <h2 className="item-name">{props.movie.title}</h2>
                <p className="item-year">{props.movie.year}</p>
                <p className="item-topic">{props.movie.genres}</p>
                <div className="item-rating">
                    <IconContext.Provider value={{ color: "#D89E2D" }}>
                    <AiFillStar/>
                    </IconContext.Provider>
                    <span className="Aggregate-ratting">{props.movie.score}</span>
                    <span> / 100</span>
                </div>
                <div className='test'>
	                <div className="more-info-btn">
	                    <Link to={'movie/' + props.movie.id} style={{color: 'white', textDecoration: 'none'}}>
	                    Xem thêm
	                    </Link>
	                </div>
		            {props.role === 'admin' && props.isAuthen &&
		            	<button className='btn-assign-mod' onClick={() => {setModalOpen(true)}}>+</button>}
	            </div>
	        </div>
        </div>
	)
}

export default MovieCatalog
