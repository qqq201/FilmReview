import './RatingScore.css'
import RateModal from '../RateModal/RateModal.js'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { AiOutlineStar } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { useState } from 'react'
import 'react-circular-progressbar/dist/styles.css';
import {useNavigate} from "react-router-dom";

const RatingScore = (props) => {
    const score = 85
    const navigate = useNavigate();

    const [state, setState] = useState({
        is_rating: false,
        user_rate: null
    })

    return (
        <div className="rating-container">
			<RateModal isOpen={state.is_rating} user_rated={state.user_rate} setState={setState}/>

            <div className="rating-title">Điểm đánh giá</div>
            <div className="public-score-section">
                <CircularProgressbarWithChildren value={score}
                    strokeWidth={15}
                    styles={buildStyles({
                        pathTransitionDuration: 1,
                        trailColor: '#2D3E50',
                        pathColor: '#2DD872'})}

                >
                <button className='public-score' onClick={() => {
                    navigate('/movie/' + props.movie_id + '/statistic')
                }}>{score}</button>
                </CircularProgressbarWithChildren>
            </div>
            { props.display &&
                <>
                <div className="rating-title">Điểm của bạn</div>
                <button className="rate" onClick={() => setState({
                    is_rating: true,
                    user_rate: state.user_rate})}>

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
