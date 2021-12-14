import {useState} from "react";
<<<<<<< Updated upstream


const Card = (props) => {

    const {name, image, date, message, like, dislike, comment, popupComment} = props;

    // when click to like or dislike the change the state of like or dislike
=======
import $ from "jquery";

const CardReview = (props) => {

    const {name, image, date, message, like, dislike, num, idUser} = props;

>>>>>>> Stashed changes
    const [likeState, setLikeState] = useState(like);
    const [dislikeState, setDislikeState] = useState(dislike);
    const [isLike, setIsLike] = useState(false);
    const [isDislike, setIsDislike] = useState(false);
<<<<<<< Updated upstream
=======
    let [isOpen, setIsOpen] = useState(false);
>>>>>>> Stashed changes

    const handleLike = () => {
        if (isLike) {
            setLikeState(likeState - 1);
            setIsLike(false);
        } else {
            setLikeState(likeState + 1);
            setIsLike(true);
        }
    };

    const handleDislike = () => {
        if (isDislike) {
            setDislikeState(dislikeState - 1);
            setIsDislike(false);
        } else {
            setDislikeState(dislikeState + 1);
            setIsDislike(true);
        }
    };

<<<<<<< Updated upstream
    // useEffect(() => {
    //     // async function uploadComment() {
    //     //     const response = await fetch('/', {
    //     //         method: 'POST',
    //     //         headers: {
    //     //             'Content-Type': 'application/json'
    //     //         },
    //     //         body: JSON.stringify({
    //     //             name: name,
    //     //             image: image,
    //     //             date: date,
    //     //             message: message,
    //     //             like: likeState,
    //     //             dislike: dislikeState,
    //     //             comment: comment
    //     //         })
    //     //     });
    //     //     const data = await response.json();
    //     //     console.log(data);
    //     // }
    //
    // }, [likeState, dislikeState]);
=======
    const popupComment = () => {
        if (isOpen) {
            $(`#${idUser}` + "chatbox").removeAttr("hidden");
            setIsOpen(false);
        } else {
            $(`#${idUser}` + "chatbox").attr("hidden", "hidden");
            setIsOpen(true);
        }

    }
>>>>>>> Stashed changes


    return (
        <>
<<<<<<< Updated upstream
            <div className="container card bg-white mr-5 mb-1">
=======
            <div className="container card bg-white mr-5 my-4">
>>>>>>> Stashed changes

                <div id="content-image" className="card-header bg-white">
                    <img className="image-border mt-5 text-float mr-3" src={image}
                         alt="avatar"/>
                    <div className="mt-5 mb-2 ml-5 text-black" id="">{name}</div>
                    <date className="text-black">{date}</date>

                </div>

                <div className="card-body text-black">{message}</div>

                <div className="card-footer emotion-bar d-flex justify-content-between bg-white">
                    <div className="position-relative">
                        <div className="left-side-button ">
                            <button
                                className="btn btn-outline-success d-inline-block mr-5 my-3" onClick={handleLike}><i
                                className="fa fa-thumbs-o-up" type="button"
                                aria-hidden="true"/> {likeState} </button>

                            <button className="btn btn-outline-danger d-inline-block my-3" onClick={handleDislike}><i
                                className="fa fa-thumbs-o-down" type="button"
                                aria-hidden="true"/> {dislikeState}</button>

                        </div>

                    </div>


                    <div className="right-side-button mt-3">

<<<<<<< Updated upstream
                        <span className="h2"> {comment.num}   </span> <i className="fa fa-comment fa-3x"
                                                                         aria-hidden="true" type="button"
                                                                         onClick={popupComment}> </i>
=======
                        <span className="h2"> {num} </span>
                        <button className="border-0 bg-white text-muted btn-outline-success"><i
                            className="fa fa-comment fa-3x"
                            aria-hidden="true" type="button"
                            onClick={popupComment}> </i></button>
>>>>>>> Stashed changes
                    </div>
                </div>

            </div>

        </>
    );


}

<<<<<<< Updated upstream
export default Card;
=======
export default CardReview;
>>>>>>> Stashed changes
