import Modal from "react-bootstrap/Modal";
import './AssignModModal.css'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from "react-icons"
//import "bootstrap/dist/css/bootstrap.min.css";

const AssignModModal = ({ isOpen, setOpenModal, movie_id }) => {
    const [state, setState] = useState({
        moderators: [{
           name: "Adam",
           id: 1,
           avatar_url: "https://www.thefix.com/sites/default/files/styles/article/public/Lambert.jpg",
           email: "random@gmail.com",
           assigned: true
        }, {
           name: "Bruce",
           id: 1,
           avatar_url: "https://www.thefix.com/sites/default/files/styles/article/public/Lambert.jpg",
           email: "random@gmail.com",
           assigned: true
        },{
           name: "Test",
           id: 1,
           avatar_url: "https://www.thefix.com/sites/default/files/styles/article/public/Lambert.jpg",
           email: "random@gmail.com",
           assigned: true
        },{
           name: "Adam",
           id: 1,
           avatar_url: "https://www.thefix.com/sites/default/files/styles/article/public/Lambert.jpg",
           email: "random@gmail.com",
           assigned: true
        },{
           name: "Austin",
           id: 2,
           avatar_url: "https://www.thefix.com/sites/default/files/styles/article/public/Lambert.jpg",
           email: "random@gmail.com",
           assigned: false
    }],
        searchMod: ""
    })

    const assign = (index) => {
        state.moderators[index].assigned = !state.moderators[index].assigned
        setState({...state});
    }

    const setSearchMod = (event) => {
        state.searchMod = event.target.value
        setState({...state})
    }

    const update_database = () => {

    }

    return (
        <Modal contentClassName="assign-mod-modal" scrollable={true} show={isOpen} onHide={() => setOpenModal(false)}>
            <Modal.Header>
                <div className="mod-search">
                    <input type="text"
                        placeholder="Tìm kiếm..."
                        onChange={(event) => {setSearchMod(event)}}/>
                    <IconContext.Provider value={{ className: "mod-search-icon" }}>
                    <AiOutlineSearch/>
                    </IconContext.Provider>
                </div>
                <div className="titleCloseBtn">
                    <button onClick={() => {
                        setOpenModal(false);
                        update_database()}}>
                    x
                    </button>
                </div>
            </Modal.Header>
            <Modal.Body>
                {state.moderators.filter((mod) => {
                    if (state.searchMod === "")
                        return true
                    else if (mod.name.toLowerCase().includes(state.searchMod.toLowerCase()))
                        return true
                    else if (mod.email.toLowerCase().includes(state.searchMod.toLowerCase()))
                        return true
                    return false
                }
                ).map((moderator, index) => (
                    <div className='mod'>
                        <img src={moderator.avatar_url} alt='mod avatar'/>

                        <div className='mod-name'>{moderator.name}</div>
                        <div className='mod-assign'>
                            {moderator.email}
                            <div class="add-mod">
                                <input class="check-input"
                                    type="checkbox"
                                    value=""
                                    checked={moderator.assigned}
                                    onChange={() => {assign(index)}}/>
                            </div>
                        </div>
                    </div>
                ))}
            </Modal.Body>
        </Modal>
    )
}

export default AssignModModal;
