import './RatingScore.css'
import RateModal from '../RateModal/RateModal.js'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { AiOutlineStar } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { useState, useEffect } from 'react'
import 'react-circular-progressbar/dist/styles.css';
import {useNavigate} from "react-router-dom";

const RatingScore = (props) => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        is_rating: false,
        public_rate: props.movie.rating,
        user_rate: null
    })

    let user = localStorage.getItem('User')

    if (user)
        user = JSON.parse(user)
    else
        user = {}

    useEffect(() => {
        var score = null
        props.movie.ratedScores.forEach((item, i) => {
            if (item.user_id === user._id){
                score = item.score
            }
        })

        setState({
            is_rating: false,
            public_rate: props.movie.rating,
            user_rate: score
        })

    }, [props.movie])
    
    return (
        <div className="rating-container">
			<RateModal isOpen={state.is_rating} movie_id={props.movie._id} user_id={user._id || ''} user_rated={state.user_rate} setState={setState}/>

            <div className="rating-title">Điểm đánh giá</div>
            <div className="public-score-section">
                <CircularProgressbarWithChildren value={state.public_rate}
                    strokeWidth={15}
                    styles={buildStyles({
                        pathTransitionDuration: 1,
                        trailColor: '#2D3E50',
                        pathColor: '#2DD872'})}
                >
                <button className='public-score' onClick={() => {
                    navigate('/movie/' + props.movie._id + '/statistic')
                }}>{state.public_rate}</button>
                </CircularProgressbarWithChildren>
            </div>
            { user && user.role === 'user' &&
                <>
                <div className="rating-title">Điểm của bạn</div>
                <button className="rate" onClick={() => setState({
                        is_rating: true,
                        public_rate: state.public_rate,
                        user_rate: state.user_rate
                    })}>

                    { state.user_rate === null ?
                        <div>
                            <IconContext.Provider value={{ className: "rate-star" }}>
                            <AiOutlineStar/>
                            </IconContext.Provider>
                            <div className='rate-title'>Đánh giá</div>
                        </div> :
                        <div className="user-score">
                            {state.user_rate}
                        </div>
                    }
                </button>
            </>}
        </div>
    )
}


export default RatingScore
