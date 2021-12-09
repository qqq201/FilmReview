import './RateModal.css'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import RangeSlider from 'react-bootstrap-range-slider'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

const RateModal = ({isOpen, user_rated, setState}) => {
    const [score, setScore] = useState(user_rated? user_rated : 0)

    return (
        <Modal show={isOpen} onHide={() =>
            setState({
                is_rating: false,
                user_rate: user_rated
            })}>

            <Modal.Header>
                <div className="titleCloseBtn">
                    <button onClick={() =>
                        setState({
                            is_rating: false,
                            user_rate: user_rated
                        })}>
                    x
                    </button>
                </div>
            </Modal.Header>

            <Modal.Body>
                <div className='rate-slider'>
                    <div className='rating-score'>{score}</div>
                    <div className='rating-min'>0</div>
                    <div className='rating-max'>100</div>
                    <RangeSlider
                        value={score}
                        onChange={changeEvent => setScore(changeEvent.target.value)}
                        variant='warning'
                        tooltip='off'
                    />
                    <Button variant='warning' onClick={() => {
                        setState({
                            is_rating: false,
                            user_rate: score
                        })
                    }}>
                        Rate
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default RateModal
