import './header.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from "react-icons"

const Header = () => {
    return (
        <>
            <nav className="nav-bar">
                <div className="nav-search">
                    <input className="nav-search-bar" type="text" placeholder="Seach for movies"/>
                    <IconContext.Provider value={{ className: "nav-search-icon" }}>
                    <AiOutlineSearch/>
                    </IconContext.Provider>
                </div>
                <ul className="nav-main-header">
                    <li>Trang chủ</li>
                    <li>Bảng xếp hạng</li>
                    <li>Tin tức</li>
                </ul>
                <div className="nav-right">
                    <button className="login-btn btn btn--red">
                        Đăng nhập
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header
