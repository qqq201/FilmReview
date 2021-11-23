import './header.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from "react-icons"
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className="nav-bar">
            <div className="nav-search">
                <input className="nav-search-bar" type="text" placeholder="Seach for movies"/>
                <IconContext.Provider value={{ className: "nav-search-icon" }}>
                <AiOutlineSearch/>
                </IconContext.Provider>
            </div>
            <ul className="nav-main-header">
                <li><Link to='/' style={{color:'white'}}>Trang chủ</Link></li>
                <li><Link to='/ranking' style={{color:'white'}}>Bảng xếp hạng</Link></li>
                <li><Link to='/news' style={{color:'white'}}>Tin tức</Link></li>
            </ul>
            <div className="nav-right">
                <button className="login-btn btn btn--red">
                    <Link to='/login' style={{color:'white'}}>Đăng nhập</Link>
                </button>
            </div>
        </nav>
    )
}

export default Header
