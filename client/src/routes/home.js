import Header from '../components/header/header.js'
import Home from '../pages/home/home.js'
import Ranking from '../pages/ranking/ranking.js'
import News from '../pages/news/news.js'
import {Route, Routes} from 'react-router-dom'

const HomeRoutes = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route exact path='/*' element={<Home/>}/>
                <Route exact path='/ranking' element={<Ranking/>}/>
                <Route exact path='/news' element={<News/>}/>
            </Routes>
        </>
    )
}

export default HomeRoutes
