import "./ReviewCard.css"
import userApi from "../../api/user_api";
import {useEffect, useState} from "react";

const ReviewCard = ({review}) => {
    let [info, setInfo] = useState({userName: "", userImage: "", userLevel: 1})
    const fetch_userInfo = async () => {
        try {
            const response = await userApi.get(review.userId)
            if (response.userInfo) {
                setInfo({userName: response.userInfo.name, userImage: response.userInfo.image, userLevel: response.userInfo.level})
            }
        } catch (error) {
            console.log('Error', error)
        }
    }

    useEffect(() => {
        fetch_userInfo()
    }, [info.userName])

    return (
        <div className="pReview-card">
            <div className="pReview-header">
                <div className="pReview-header-right">
                    <img className="pReview-avatar" src={info.userImage} alt="avatar"/>
                    <div className="pReview-info">
                        <h2 className="pReview-username">{info.userName}</h2>
                        <p className="pReview-date">{review.date}</p>
                    </div>
                    <img className="pReview-rank" src={`/Imgs/${info.userLevel}.png`} alt="rank"/>
                </div>
                <div className="pReview-header-left">
                    <div className="btn btn--green pReview-btn-accept" onClick={() => console.log(review.id)}>v</div>
                    <div className="btn btn--red pReview-btn-refuse" onClick={() => console.log(review.id)}>x</div>
                </div>
            </div>

            <div className="pReview-content">
                <div className="pReview-text">{review.content}</div>
            </div>
        </div>
    )
}

export default ReviewCard

