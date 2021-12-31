import './PendingReviewPage.css'
import ReviewCard  from "../../components/ReviewCard/ReviewCard.js"
import {useEffect, useState} from "react";
import reviewApi from "../../api/review_api";
import movieApi from "../../api/movie_api";
import userApi from "../../api/user_api";

const PendingReviewPage = () => {
    let movie_id = window.location.href.substr(window.location.href.indexOf("movie/") + 6);
    movie_id = movie_id.substr(0, movie_id.length - 8);

    const [reviews, setReviews] = useState([]);
    const fetch_pReview = async () => {
        try {
            const response = await reviewApi.getListPendingReview(movie_id)
            if (response.listReview)
                setReviews(response.listReview)
        } catch (error){
            console.log('Error', error)
        }
    }

    useEffect(() => {
        fetch_pReview()
    }, [])

    return (
        <div className = "list-pending-review">
            <h1 className="pReview-page-header">Review chưa được phê duyệt</h1>
            <div className="pReview-wrapper">
                {reviews.map((review, index) => <ReviewCard key={index} index={index} review={review}/>)}
            </div>
        </div>
    )
}

export default PendingReviewPage;
