import Header from '../components/header/header.js'
import HomePage from '../pages/HomePage/HomePage.js'
import RankingPanel from '../pages/RankingPanel/RankingPanel.js'
import NewsPage from '../pages/NewsPage/NewsPage.js'
import AddNewsPage from '../pages/AddNewsPage/AddNewsPage.jsx'
import ProfilePage from '../pages/ProfilePage/ProfilePage.js'
import MovieRoute from './movie.js'
import Addmovie from '../components/Addmovie/addmovie.js'
import {Route, Routes} from 'react-router-dom'
import SearchPage from "../pages/SearchPage/SearchPage";
import PendingReviewPage from "../pages/PendingReviewspage/PendingReviewPage";
import BanUser from "../components/BanUser/BanUser";

const HomeRoute = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/*' element={<HomePage/>}/>
                <Route path='/ranking' element={<RankingPanel/>}/>
                <Route path='/news' element={<NewsPage/>}/>
                <Route path='/news/add-news' element={<AddNewsPage/>}/>
                <Route path='/movie/:id/*' element={<MovieRoute/>}/>
                <Route path='/search/:q/*' element={<SearchPage/>}/>
                <Route path='/pReview' element={<BanUser display/>}/> {/*PendingReviewPage*/}
                <Route path='/profile' element={<ProfilePage/>}/>
                <Route path='/addmovie' element={<Addmovie/>}/>
            </Routes>
        </>
    )
}

export default HomeRoute
