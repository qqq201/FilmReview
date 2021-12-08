import './gallery.css'
import movieApi from '../../api/movie_api.js'
import React, { useEffect, useState } from 'react'
import MovieCatalog from '../MovieCatalog/MovieCatalog.js'

const Gallery = (props) => {
    const [gallery, setGallery] = useState([])

    useEffect(() => {
        const fetch_gallery = async () => {
            try {
                const response = await movieApi.getGallery()
                console.log(response)
                if (response.gallery)
                    setGallery(response.gallery)
            } catch (error){
                console.log('Error', error)
            }
        }

        fetch_gallery()
    }, [])

    return (
        <div className='gallery'>
            <div className="gallery-header">
                Bộ sưu tập
                <span className="gallery-header-line"></span>
            </div>
            <div className="catalogs">
                {gallery.map((movie, index) => (
                    <MovieCatalog movie={movie} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Gallery
