import './gallery.css'
import test from "../assets/Image/Galleries/MoneyHeist.jfif"
import {AiFillStar} from 'react-icons/ai'
import { IconContext } from "react-icons"

const Gallery = (props) => {
    const movies = [{
        name: 'money heist',
        year: '2017-2012',
        genres: 'action, crime',
        score: 80
    },{
        name: 'money heist',
        year: '2017-2012',
        genres: 'action, crime',
        score: 80
    }]

    return (
        <>
            <div className='container'>
                <div className="galleries-header">
                    {props.name}
                    <span className="galleries-header-line"></span>
                </div>
                <div className="galleries">
                    {movies.map(movie => (
                        <div className="gallerties-item">
                            <img src={test} alt="poster"/>
                            <div className="item-info">
                                <h2 className="item-name">{movie.name}</h2>
                                <p className="item-year">{movie.year}</p>
                                <p className="item-topic">{movie.genres}</p>
                                <div className="item-rating">
                                    <IconContext.Provider value={{ color: "#D89E2D" }}>
                                    <AiFillStar/>
                                    </IconContext.Provider>
                                    <span className="Aggregate-ratting">{movie.score}</span>
                                    <span> / 100</span>
                                </div>
                                <div className="more-info-btn btn btn--red btn--border-radius">Xem thêm</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Gallery
