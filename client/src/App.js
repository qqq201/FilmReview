import Header from './components/header/header.js'
import Home from './components/home/home.js'
import Ranking from './components/ranking/ranking.js'
import News from './components/news/news.js'
import Login from './components/login/login.js'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

// test api component
//import Test from './components/layout/test.js'

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/ranking' element={<Ranking/>}/>
                <Route exact path='/news' element={<News/>}/>
                <Route exact path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
