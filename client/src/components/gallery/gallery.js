import './gallery.css'
import movieApi from '../../api/movie_api.js'
import React, { useEffect, useState } from 'react'
import MovieCatalog from '../MovieCatalog/MovieCatalog.js'
import {useNavigate} from "react-router-dom";

const Gallery = () => {
    const [gallery, setGallery] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const fetch_gallery = async () => {
            try {
                const response = await movieApi.getGallery()
                if (response.gallery)
                    setGallery(response.gallery)
            } catch (error){
                console.log('Error', error)
            }
        }

        fetch_gallery()
    }, [])

    let user = localStorage.getItem('User')

    const redirect = () => {
        navigate("/movie/add-movie");
    }

    if (user)
        user = JSON.parse(user)
    else
        user = {}

    return (
        <div className='gallery'>

            <div className="gallery-header">
                Bộ sưu tập
                <span className="gallery-header-line"></span>
            </div>
            {user.role === 'admin' && <button className="add-news btn btn-lg bg-white" onClick={redirect}>Thêm mới</button>}
            <div className="catalogs">
                {gallery.map((movie, index) => (
                    <MovieCatalog movie={movie} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Gallery
