import Modal from "react-bootstrap/Modal";
import './AssignModModal.css'
import { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from "react-icons"
import movieApi from '../../api/movie_api.js'

const AssignModModal = ({ isOpen, setOpenModal, movie_id }) => {
    const [state, setState] = useState({
        moderators: [],
        searchMod: ""
    })

    useEffect(() => {
        const get_moderators = async () => {
            try {
                const response = await movieApi.getModerators(movie_id)
                if (response.moderators){
                    state.moderators = response.moderators
                    setState(state)
                }
            } catch (error){
                console.log('Error', error)
            }
        }

        get_moderators()
    }, [])

    const assign = (index) => {
        state.moderators[index].assigned = !state.moderators[index].assigned
        setState({...state});
    }

    const setSearchMod = (event) => {
        state.searchMod = event.target.value
        setState({...state})
    }

    const close_modal = async () => {
        var assigned_list = []
        state.moderators.forEach((item, i) => {
            if (item.assigned === true)
                assigned_list.push(item.id)
        })

        try {
            const response = await movieApi.assignModerators(movie_id, assigned_list)
            if (response.success)
                setOpenModal(false)
        } catch (error){
            console.log('Error', error)
        }
    }

    return (
        <Modal contentClassName="assign-mod-modal" scrollable={true} show={isOpen} onHide={close_modal}>
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
                    <button onClick={close_modal}>
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
                }).map((moderator, index) => (
                    <div className='mod' key={index}>
                        <img src={moderator.avatar} alt='mod avatar'/>

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
