import './Review.css'
import '../LoginForm/LoginForm.css'
import {useState} from "react";
import $ from 'jquery'


const Review = () => {


    const avatar = ('https://s3-alpha-sig.figma.com/img/5936/f2b1/5cab0a53665641bb781444e3834b068d?Expires=1639958400&Signature=TyN15pDQaGNISCGzAeQyiT5C4uC6qUqWDUt0hMBIWwTJegLqYTg1sA6i4uQKpBHOgnfv-yGunUJFkyJ6U0GPj4K7xbGyJ0fOl0LyNeG4hLz~Tl3Qma42PWfn1Xnq3377U0iX1K52GAv1Gn2RBc~Kr3eIGnOgsactu7Mt3H8MstxBurczLQ43uD4P5mqsmPND~gUCMY9sCIt1-EotqDVj1fjvDC-ideNcKW2GZez5sb-KRDK6QC1MpYY2VqSHTNrQFVeIdqQpoXWqJBo90AH3GVfu~PIss93ozhTschBnB0DjxxW4HqYUMmdIWR90GygWMJAKSa1dx4ICQNxYazGKrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
    const name = "Adam"
    const [visiblePopup, setVisiblePopup] = useState(false);

    async function submit() {
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
