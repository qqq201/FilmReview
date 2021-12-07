import HomeRoute from './home.js'
import Login from '../pages/LoginPage/Login.jsx'
import SignUp from "../pages/SignupPage/SignUp.jsx";


import {Route, Routes} from 'react-router-dom'

const Router = () => {

    return (
        <Routes>
            <Route path='/*' element={<HomeRoute/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    )
}

export default Router
