import './header.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from "react-icons"
<<<<<<< HEAD
import {NavLink, Link, useNavigate} from 'react-router-dom'
import {useState } from 'react'

const Header = () => {
    const navigate = useNavigate()
    function handleNavigatePage(e) {
        if (e.keyCode === 13) {
/*            navigate("search/" + document.querySelector(".nav-search-bar").value)*/
            window.location.href =  "http://localhost:3000/" + "search/" + document.querySelector(".nav-search-bar").value
        }

    }
=======
import { NavLink, Link } from 'react-router-dom'
import RightMenu from '../RightMenu/RightMenu.js'

const Header = () => {
    let user = localStorage.getItem('User')

    if (user)
        user = JSON.parse(user)
    else 
        user = {}
>>>>>>> 18066d9e3d549a99010dbf43de42534301283e47
    return (
        <nav className="nav-bar">
            <div className="nav-search">
                <input className="nav-search-bar" type="text" placeholder="Tìm kiếm phim..." onKeyDown={handleNavigatePage}/>
                <IconContext.Provider value={{className: "nav-search-icon"}}>
                    <AiOutlineSearch/>
                </IconContext.Provider>

            </div>
            <ul className="nav-main-header">
                <li><NavLink to='/' style={{color: 'white', textDecoration: 'none'}}>Trang chủ</NavLink></li>
                {(user.role === undefined || user.role === 'user') &&
                <li><NavLink to='/ranking' style={{color: 'white', textDecoration: 'none'}}>Bảng xếp hạng</NavLink></li>}
                {user.role && user.role === "moderator"? <></> :
                <li><NavLink to='/news' style={{color: 'white', textDecoration: 'none'}}>Tin tức</NavLink></li>}
            </ul>

            {user.role === undefined ?
                <div className="nav-right">
                    <button className="login-btn btn btn--red">
                        <Link to='/login' style={{color: 'white', textDecoration: 'none'}}>Đăng nhập</Link>
                    </button>
                </div> :
                <RightMenu avatar={user.image}/>
            }
        </nav>
    )
}

export default Header
