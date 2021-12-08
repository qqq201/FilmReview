import HomeRoute from './home.js'
import LoginPage from '../pages/LoginPage/LoginPage.jsx'
import SignupPage from "../pages/SignupPage/SignupPage.jsx";


import {Route, Routes} from 'react-router-dom'

const Router = () => {

    return (
        <Routes>
            <Route path='/*' element={<HomeRoute/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
        </Routes>
    )
}

export default Router
