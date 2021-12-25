import {Route, Routes} from 'react-router-dom'
import MoviePage from '../pages/MoviePage/MoviePage.js'
import StatisticPage from '../pages/StatisticPage/StatisticPage.js'
import PendingReviewPage from "../pages/PendingReviewspage/PendingReviewPage";

const MovieRoute = () => {
    return (
        <>
            <Routes>
                <Route path='' element={<MoviePage/>}/>
                <Route path='/statistic' element={<StatisticPage/>}/>
                <Route path='/pReview' element={<PendingReviewPage/>}/> {/*PendingReviewPage  BanUser display*/}
            </Routes>
        </>
    )
}

export default MovieRoute
