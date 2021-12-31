import '../../components/gallery/gallery.css'
import movieApi from '../../api/movie_api.js'
import React, { useEffect, useState } from 'react'
import MovieCatalog from '../MovieCatalog/MovieCatalog.js'
import './FavoriteList.css';



const FavoriteList = (props) => {
    const [favorite, setFavorite] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const response = await movieApi.getGallery()
                if (response.gallery)
                    setFavorite(response.gallery)
            } catch (error) {
                console.log('Error', error)
            }
        })();
    }, [])

    return (
        <div className='gallery'>
            <div className="gallery-header">
                <i className="icon-favorite fa fa-heart-o" aria-hidden="true"></i>
                <span className="text"> Phim yêu thích </span>
            </div>
            <div className="container-fluid catalogs">
                {favorite.map((movie, index) => (
                    <MovieCatalog movie={movie} key={index} />
                ))}
            </div>
        </div>
    )
}

export default FavoriteList;
