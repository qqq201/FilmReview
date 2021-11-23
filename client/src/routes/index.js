import HomeRoute from './home.js'
import LoginPage from '../pages/LoginPage/LoginPage.js'

import {Route, Routes} from 'react-router-dom'

const Router = () => {

    return (
        <Routes>
            <Route path='/*' element={<HomeRoute/>}/>
            <Route path='/login' element={<LoginPage/>}/>
        </Routes>
    )
}

export default Router
