import './PostReview.css'
import CardReview from "./CardReview.jsx";
import {Col, Row} from "react-bootstrap";
import Reply from "./Reply.jsx";
import CardComment from "./CardComment";
import {Link} from "react-router-dom";
import review_api from "../../api/review_api";
import {useEffect, useState} from "react";
import user_api from "../../api/user_api";
import moment from "moment";


const PostReview = () => {

    let list = [];
    let temp = [];

    const addCard = () => {
        list.push(<CardReview/>);
    }


    const [reviews, setReviews] = useState([]);

    async function getData() {
        var r = [];
        const movie_id = window.location.href.substr(window.location.href.indexOf("movie/") + 6);
        const review_list = await review_api.getListReview(movie_id);
        const arr_review = review_list.listReview;

        for (let i = 0; i < arr_review.length; i++) {

            const user_id = arr_review[i].userId;
            const u = await user_api.get(user_id);

            r.push({
                content: arr_review[i].content,
                user: {
                    avatar: u.userInfo.image,
                    name: u.userInfo.name,
                    date: moment(arr_review[i].time).format('h:mm DD/MM/YYYY'),
                    id: "1"
                },
                dislike: arr_review[i].numberOfDislikes,
                like: arr_review[i].numberOfLikes,
                comment: [
                    {
                        id: 1,
                        num: 1,
                        content: "Best comment ever. period.",
                        user: "Andrew He",
                        avatar: "https://i.pinimg.com/originals/11/c5/0d/11c50d92e344bd6170a8c10057488877.jpg",
                    }
                ]
            });
        }
        setReviews(r);
    }

    useEffect(() => {
        getData();
    }, []);


    let count = 0;

    let displayComment = [];
    let commentList = [];


    let user = null;
    if (localStorage.getItem('User')) {
        user = JSON.parse(localStorage.getItem('User'));
    }

    return (
        <section className="post-review">
            <div className="num-reviews text-black m-5 "> {reviews.length} reviews</div>
            {user && user.role === 'moderator' && <Link to={"pReview"}>
                <div className="pReview-btn btn btn--green">Phê duyệt</div>
            </Link>}
            <div className="container brown-color mw-1155">

                {
                    reviews.map((e) => {
                        commentList = [...e.comment];
                        displayComment = [];
                        ++count;
                        commentList.map(p => {
                            displayComment.push(
                                <Row>
                                    <Col><CardComment user={p.user} avatar={p.avatar} comment={p.content}/></Col>
                                </Row>
                            )

                        });


                        list.push(
                            <>
                                <CardReview name={e.user.name} image={e.user.avatar} date={e.user.date}
                                            message={e.content}
                                            like={e.like} dislike={e.dislike} num={e.comment.length}
                                            idUser={e.user.id}/>
                                <div id={e.user.id + "chatbox"} hidden>
                                    {displayComment}
                                    <Row>
                                        <Col><Reply avatar={e.user.avatar} idUser={e.user.id}/></Col>
                                    </Row>
                                </div>


                            </>);


                        if (list.length === 2) {
                            temp = {...list};
                            list = [];
                            return (
                                <Row>
                                    <Col md={12} lg={6}>
                                        {temp[0]}
                                    </Col>
                                    <Col md={12} lg={6}>
                                        {temp[1]}
                                    </Col>
                                </Row>
                            )
                        }


                        if (reviews.length % 2 === 1 && count === reviews.length) {
                            return (
                                <Row>
                                    <Col md={12} lg={6}>
                                        {list[0]}
                                    </Col>
                                </Row>
                            )
                        }


                    })

                }


            </div>
        </section>
    );
}

export default PostReview;
