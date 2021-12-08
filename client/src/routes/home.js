import Header from '../components/header/header.js'
import HomePage from '../pages/HomePage/HomePage.js'
import RankingPanel from '../pages/RankingPanel/RankingPanel.js'
import NewsPage from '../pages/NewsPage/NewsPage.js'
import ProfilePage from '../pages/ProfilePage/ProfilePage.js'
import MovieRoute from './movie.js'
import {Route, Routes} from 'react-router-dom'

const HomeRoute = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/*' element={<HomePage/>}/>
                <Route path='/ranking' element={<RankingPanel/>}/>
                <Route path='/news' element={<NewsPage/>}/>
                <Route path='/movie/:id/*' element={<MovieRoute/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>
            </Routes>
        </>
    )
}

export default HomeRoute
