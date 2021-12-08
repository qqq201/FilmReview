import './RightMenu.css'
import Dropdown from 'react-bootstrap/Dropdown'
import { CgProfile } from 'react-icons/cg'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { IconContext } from "react-icons"

const RightMenu = (props) => {
    return (
        <Dropdown className='right-menu'>
            <Dropdown.Toggle>
            <div class='corner-avatar'>
            <img src={props.avatar} alt='avatar'/>
            </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/profile">
                    <IconContext.Provider value={{ className: "profile-icon" }}>
                    <CgProfile/>
                    </IconContext.Provider>
                    <div className='menu-item-profile'>Thông tin</div>
                </Dropdown.Item>

                <Dropdown.Item>
                    <IconContext.Provider value={{ className: "logout-icon" }}>
                    <RiLogoutBoxRLine/>
                    </IconContext.Provider>
                    <div className='menu-item-logout'>Đăng xuất</div>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default RightMenu
