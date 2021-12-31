import './MovieEditting.css'

import React, {useState} from "react";
import $ from 'jquery'

import movieApi from '../../api/movie_api.js'

const MovieEditting = (props) => {
    const [visiblePopup1, setVisiblePopup1] = useState(false);

    function submit() {
        const though1 = $("#smallModal").val();
        console.log(though1);
        setVisiblePopup1(false);
        movieApi.editContent(though1, props.movie._id)

    }
    const [visiblePopup2, setVisiblePopup2] = useState(false);

    function submit2() {
        const though2 = $("#genres").val();
        console.log(though2);
        setVisiblePopup2(false);
        movieApi.editGenres(though2, props.movie._id)
    }
    const [visiblePopup3, setVisiblePopup3] = useState(false);

    function submit3() {
        const though3 = $("#actors").val();
        console.log(though3);
        setVisiblePopup3(false);
        movieApi. editActors(though3, props.movie._id)
    }

    const [visiblePopup4, setVisiblePopup4] = useState(false);

    function submit4() {
        const though4 = $("#directors").val();
        console.log(though4);
        setVisiblePopup4(false);
        movieApi.editDirector(though4, props.movie._id)
    }
    var user = localStorage.getItem('User')

    if (user)
        user = JSON.parse(user)
    else
        user = {}

    return (
        <>



            <section className="info_ediiting" >
                <form className="row">

                    <div className="mb-1">
                        <h4>Nội dung</h4>
                        <div className='line'/>
                        <p  className="mb-1"
                                onClick={(e) => {
                                    setVisiblePopup1(true)
                                }}>{props.movie.content}</p>

                    </div>
                    <div className="mb-1">
                        <h4>Thể loại</h4>
                        <div className='line'/>
                        <p  className="mb-1"
                            onClick={(e) => {
                                setVisiblePopup2(true)
                            }}>{props.movie.genres}</p>

                    </div>
                    <div className="mb-1">
                        <h4>Diễn viên</h4>
                        <div className='line'/>
                        <p  className="mb-1"
                            onClick={(e) => {
                                setVisiblePopup3(true)
                            }}>{props.movie.actors}</p>

                    </div>
                    <div className="mb-1">
                        <h4>Đạo diễn</h4>
                        <div className='line'/>
                        <p  className="mb-1"
                            onClick={(e) => {
                                setVisiblePopup4(true)
                            }}>{props.movie.director}</p>

                    </div>
                    <div className="mb-1">
                        <h4>Hình ảnh</h4>
                        <div className='line'/>
                        {props.movie.photos.map((photo, index) => (
                            <div className='photo' key = {index}>
                                <img src={photo} alt='movie capture'/>
                            </div>
                        ))}
                    </div>
                </form>

                {visiblePopup1 ? (<>
                    <div className="box-editting">
                        <div className="editting_text">
                            <div className="box_text_edit">
                                <div id="header-review">
                                    <div className="d-flex">
                                        <img src={user.image} className="avatar_admin_edit" alt=""/> <span
                                        id="name_admin">{user.name} <i className="icon-review fa fa-times fa-2x" aria-hidden="true" onClick={(e) => {
                                        setVisiblePopup1(false)
                                    }}/> </span>
                                    </div>
                                </div>
                                <textarea className="input_text_adim_edit" id="smallModal" autoFocus>{props.movie.content}</textarea>
                            </div>
                            <div className="wrapper-button-review d-flex justify-content-end m-5">
                                <button className="btn btn-review btn-outline-success m-5 text-white"
                                        onClick={submit}>Lưu
                                </button>
                            </div>
                        </div>
                    </div>

                </>) : ( <> </>)}

                {visiblePopup2 ? (<>
                    <div className="box-editting">
                        <div className="editting_text">
                            <div className="box_text_edit">
                                <div id="header-review">
                                    <div className="d-flex">
                                        <img src={user.image} className="avatar_admin_edit" alt=""/> <span
                                        id="name_admin">{user.name} <i className="icon-review fa fa-times fa-2x" aria-hidden="true" onClick={(e) => {
                                        setVisiblePopup2(false)
                                    }}/> </span>
                                    </div>
                                </div>
                                <textarea className="input_text_adim_edit" id="genres" autoFocus>{props.movie.genres}</textarea>
                            </div>
                            <div className="wrapper-button-review d-flex justify-content-end m-5">
                                <button className="btn btn-review btn-outline-success m-5 text-white"
                                        onClick={submit2}>Lưu
                                </button>
                            </div>
                        </div>
                    </div>

                </>) : ( <> </>)}

                {visiblePopup3 ? (<>
                    <div className="box-editting">
                        <div className="editting_text">
                            <div className="box_text_edit">
                                <div id="header-review">
                                    <div className="d-flex">
                                        <img src={user.image} className="avatar_admin_edit" alt=""/> <span
                                        id="name_admin">{user.name} <i className="icon-review fa fa-times fa-2x" aria-hidden="true" onClick={(e) => {
                                        setVisiblePopup3(false)
                                    }}/> </span>
                                    </div>
                                </div>
                                <textarea className="input_text_adim_edit" id="actors" autoFocus>{props.movie.actors}</textarea>
                            </div>
                            <div className="wrapper-button-review d-flex justify-content-end m-5">
                                <button className="btn btn-review btn-outline-success m-5 text-white"
                                        onClick={submit3}>Lưu
                                </button>
                            </div>
                        </div>
                    </div>

                </>) : ( <> </>)}

                {visiblePopup4 ? (<>
                    <div className="box-editting">
                        <div className="editting_text">
                            <div className="box_text_edit">
                                <div id="header-review">
                                    <div className="d-flex">
                                        <img src={user.image} className="avatar_admin_edit" alt=""/> <span
                                        id="name_admin">{user.name} <i className="icon-review fa fa-times fa-2x" aria-hidden="true" onClick={(e) => {
                                        setVisiblePopup4(false)
                                    }}/> </span>
                                    </div>
                                </div>
                                <textarea className="input_text_adim_edit" id="directors" autoFocus>{props.movie.director}</textarea>
                            </div>
                            <div className="wrapper-button-review d-flex justify-content-end m-5">
                                <button className="btn btn-review btn-outline-success m-5 text-white"
                                        onClick={submit4}>Lưu
                                </button>
                            </div>
                        </div>
                    </div>

                </>) : ( <> </>)}


            </section>

        </>
    )
}

export default MovieEditting
