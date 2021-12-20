import './SearchPage.css'
import MovieCard from "../../components/MovieCard/MovieCard.js";
import { Link } from "react-router-dom"
import {useEffect, useState} from "react";

const movies = [
    {
        id: 1,
        title: "Dark",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_FMjpg_UX1000_.jpg",
        yearOfProduction: "2017-2020",
        genres: "Mystery",
        actors: "abcxyz",
        content: "xyzabc",
        score: 95
    },
    {
        id: 2,
        title: "Don’t f**k with cats: Hunting a internet killer",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BNjIwNzY1ZjQtMDAzNS00M2EyLWEyYTItZGFkY2M1MWRhNDc2XkEyXkFqcGdeQXVyMjYxMTUyOTY@._V1_.jpg",
        yearOfProduction: "2019",
        genres: "Crime, Documentary",
        actors: "abcxyz",
        content: "xyzabc",
        score: 85
    },    {
        id: 3,
        title: "Money heist",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
        yearOfProduction: "2017-2021",
        genres: "Action, Crime",
        actors: "abcxyz",
        content: "xyzabc",
        score: 95
    },    {
        id: 4,
        title: "AVENGERS: END GAME",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        yearOfProduction: "2017-2020",
        genres: "Action",
        actors: "abcxyz",
        content: "xyzabc",
        score: 100
    },    {
        id: 5,
        title: "Shang-Chi and the Legend of the Ten Rings",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        yearOfProduction: "2017-2020",
        genres: "Action",
        actors: "abcxyz",
        content: "xyzabc",
        score: 95
    }
]

const SearchPage = () => {
    var keyword = window.location.href.substr(window.location.href.indexOf("search/") + "search/".length)
    keyword = keyword.trim();
    keyword = keyword.replace(/\s+/g, ' ')
    keyword = keyword.toLowerCase();
    var listResults = movies.filter((movie) => movie.title.toLowerCase().indexOf(keyword) !== -1)

    return (
        <div className = "list-search-results">
            {listResults.map((movie, index) => <Link to={'../movie/' + movie.id} ><MovieCard key={index} movie={movie}/></Link>)}
        </div>
    )
}

export default SearchPage;
