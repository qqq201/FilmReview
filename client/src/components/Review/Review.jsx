import './Review.css'
import '../LoginForm/LoginForm.css'
import {useState} from "react";
import $ from 'jquery'


const Review = () => {


    var user = localStorage.getItem('User')

    if (user)
        user = JSON.parse(user)

    const avatar = user.image;
    const name = user.name;

    const [visiblePopup, setVisiblePopup] = useState(false);

    function submit() {
        const though = $("#input-review").val();
        console.log(though);
        setVisiblePopup(false);
    }


    return (
        <>
            <div className="box">
                <p className="title-review">Reviews</p>
                <hr id="hr-custom-review"/>
                <div className=" wrapper-review-content">
                    <img className="avatar-review"
                         src={avatar}
                         alt=""/>
                    <span className="content-box">
                    <button type="button"
                            className="btn h-100 w-100 d-flex justify-content-start align-items-center text-black"
                            onClick={(e) => {
                                setVisiblePopup(true)
                            }}>Cảm nghĩ của bạn về bộ phim này</button>
                </span>
                </div>

                {visiblePopup ? (<>
                    <div className="relative-popup">
                        <div className="wrapper-popup-review">
                            <div className="wrapper-popup-title">

                                <div id="header-review">
                                    <div className="d-flex">
                                        <img src={avatar} className="avatar-review" alt=""/> <span
                                        id="name-review">{name} <i className="icon-review fa fa-times fa-2x"
                                                                   aria-hidden="true" onClick={(e) => {
                                        setVisiblePopup(false)
                                    }}/> </span>

                                    </div>
                                </div>

                                <textarea className="input-text-area" id="input-review" placeholder="Cảm nghĩ của bạn"
                                          autoFocus>

                            </textarea>

                            </div>
                            <div className="wrapper-button-review d-flex justify-content-end m-5">
                                <button className="btn btn-review btn-outline-success m-5 text-white"
                                        onClick={submit}>Gửi
                                </button>
                            </div>
                        </div>
                    </div>

                </>) : (
                    <>

                    </>)}
            </div>

        </>
    );
}


export default Review;
