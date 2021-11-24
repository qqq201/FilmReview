import Modal from "react-bootstrap/Modal";
import './AssignModModal.css'
import { useState } from 'react'
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
           name: "Adam",
           id: 2,
           avatar_url: "https://www.thefix.com/sites/default/files/styles/article/public/Lambert.jpg",
           email: "random@gmail.com",
           assigned: false
    }]})

    const assign = (index) => {
        state.moderators[index].assigned = !state.moderators[index].assigned
        setState({moderators: state.moderators});
    }

    const update_database = () => {

    }

    return (
        <Modal show={isOpen} onHide={() => setOpenModal(false)}>
            <Modal.Header>
                <div className="titleCloseBtn">
                    <button onClick={() => {
                        setOpenModal(false);
                        update_database()
                    }}>
                    X
                    </button>
                </div>
            </Modal.Header>
            <Modal.Body>
                {state.moderators.map((moderator, index) => (
                    <div className='mod-assignment'>
                        <img src={moderator.avatar_url} alt='mod avatar'/>

                        <div className='mod-name'>{moderator.name}</div>
                        <div class="add-mod">
                            <input class="check-input"
                                type="checkbox"
                                value=""
                                checked={moderator.assigned}
                                onChange={() => {
                                assign(index)
                            }}/>
                        </div>
                    </div>
                ))}
            </Modal.Body>
        </Modal>
    )
}

export default AssignModModal;
