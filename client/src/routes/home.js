import Header from '../components/header/header.js'
import HomePage from '../pages/HomePage/HomePage.js'
import RankingPanel from '../pages/RankingPanel/RankingPanel.js'
import NewsPage from '../pages/NewsPage/NewsPage.js'
import MoviePage from '../pages/MoviePage/MoviePage.js'
import {Route, Routes} from 'react-router-dom'

const HomeRoute = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route exact path='/*' element={<HomePage/>}/>
                <Route exact path='/ranking' element={<RankingPanel/>}/>
                <Route exact path='/news' element={<NewsPage/>}/>
                <Route exact path='/movie/:id' element={<MoviePage/>}/>
            </Routes>
        </>
    )
}

export default HomeRoute
