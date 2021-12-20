import "./ReviewCard.css"

const ReviewCard = ({review, index}) => {
    return (
        <div className="pReview-card">
            <div className="pReview-header">
                <div className="pReview-header-right">
                    <img className="pReview-avatar" src={review.avatar} alt="avatar"/>
                    <div className="pReview-info">
                        <h2 className="pReview-username">{review.name}</h2>
                        <p className="pReview-date">{review.date}</p>
                    </div>
                    <img className="pReview-rank" src={review.rank} alt="rank"/>
                </div>
                <div className="pReview-header-left">
                    <div className="btn btn--green pReview-btn-accept" onClick={() => console.log(index)}>v</div>
                    <div className="btn btn--red pReview-btn-refuse" onClick={() => console.log(index)}>x</div>
                </div>
            </div>

            <div className="pReview-content">
                <div className="pReview-description">{review.description}</div>
                <div className="pReview-text">{review.text}</div>
            </div>
        </div>
    )
}

export default ReviewCard

