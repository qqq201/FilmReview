import './header.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from "react-icons"
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    const user = JSON.parse(localStorage.getItem('User') || "")

    return (
        <nav className="nav-bar">
            <div className="nav-search">
                <input className="nav-search-bar" type="text" placeholder="Tìm kiếm phim..."/>
                <IconContext.Provider value={{ className: "nav-search-icon" }}>
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

            {user.role === undefined &&
                <div className="nav-right">
                    <button className="login-btn btn btn--red">
                        <Link to='/login' style={{color: 'white', textDecoration: 'none'}}>Đăng nhập</Link>
                    </button>
                </div>
            }
        </nav>
    )
}

export default Header
