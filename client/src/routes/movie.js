import {Route, Routes} from 'react-router-dom'
import MoviePage from '../pages/MoviePage/MoviePage.js'
import StatisticPage from '../pages/StatisticPage/StatisticPage.js'

const MovieRoute = () => {
    return (
        <>
            <Routes>
                <Route path='' element={<MoviePage/>}/>
                <Route path='/statistic' element={<StatisticPage/>}/>
            </Routes>
        </>
    )
}

export default MovieRoute
