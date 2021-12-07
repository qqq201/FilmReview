import HomeRoute from './home.js'
import Login from '../components/Login/Login.jsx'
import SignUp from "../components/SignUp/SignUp.jsx";


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
