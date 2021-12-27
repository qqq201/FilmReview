import './MoviePage.css'
import MovieHeader from '../../components/MovieHeader/MovieHeader.js'
import MovieInfo from '../../components/MovieInfo/MovieInfo.js'
import Review from "../../components/Review/Review";
import PostReview from "../../components/PostReview/PostReview";
import MovieEditting from '../../components/MovieEditting/MovieEditting.js'
import React, { useEffect, useState } from 'react'
import movieApi from "../../api/movie_api.js"

const MoviePage = () => {
    const [movie, setMovie] = useState({
        _id: "" ,
        title: "",
        year: "",
        poster: "",
        trailer: "",
        content: "",
        genres: [],
        actors: [],
        director: [],
        ratedScores: [],
        rating: 0,
        photos: [],
        reviews: [],
        favoriteCount: 0,
        moderator: []
    })

    const movie_id = window.location.href.substr(window.location.href.indexOf("movie/") + 6)

    useEffect(() => {
        const fetch_movie = async () => {
            try {
                const response = await movieApi.getInfo(movie_id)
                if (response.movie)
                    setMovie(response.movie)

            } catch (error){
                console.log('Error', error)
            }
        }

        fetch_movie()
    }, [])

    var user = localStorage.getItem('User')

    if (user)
        user = JSON.parse(user)
    else
        user = {}

    return (
        <div className="movie-page">
            <MovieHeader movie={movie}/>
            {user &&( user.role === 'user' || user.role === 'moderator') &&
            <MovieInfo movie={movie}/>}

            {user && user.role === 'admin'  &&
            <MovieEditting movie={movie}/>}

            <div>
                <Review/>
            </div>
            <div>
                <PostReview/>
            </div>
        </div>
    )
}


export default MoviePage
