import HomeRoutes from './home.js'
import Login from '../pages/login/login.js'

import {Route, Routes} from 'react-router-dom'

const Router = () => {

    return (
        <Routes>
            <Route path='/*' element={<HomeRoutes/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    )
}

export default Router
