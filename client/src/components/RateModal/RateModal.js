import './RateModal.css'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import RangeSlider from 'react-bootstrap-range-slider'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import movieApi from "../../api/movie_api.js"

const RateModal = ({isOpen, movie_id, user_id, user_rated, setState}) => {
    const [score, setScore] = useState(user_rated? user_rated : 0)

    const rate = async () => {
        try {
            const response = await movieApi.rate(movie_id, user_id, score)
            if (response.score){
                isOpen = false
                setState({
                    is_rating: false,
                    public_rate: response.score,
                    user_rate: score
                })
            }
        } catch (error){
            console.log('Error', error)
        }
    }

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
                    <Button variant='warning' onClick={rate}>
                        Rate
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default RateModal
