import "../LoginForm/LoginForm.css"
import "./SignupForm.css"
import {useNavigate} from "react-router-dom";
import $ from "jquery";
import {useState} from "react";

const SignupForm = () => {
    const [visible, setVisible] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const backToHome = () => {
        navigate("/");
    }

    function handleSubmit(e) {
        e.preventDefault();
        const {email, city, date} = e.target.elements;
        const gender = $('#dropdown_values').find('option:selected').text();
        const first_data = {
            email: email.value,
            city: city.value,
            date: date.value,
            gender
        }
        setData(first_data);
        setVisible(false);
    }

    function handleSubmitLast(e) {
        e.preventDefault();
        const {password, password_again} = e.target.elements;
        if (password.value !== password_again.value) {
            setError(true);
            return;
        }

        const second_data = {
            password: password.value,
        }
        setData({...data, ...second_data});
    }

    function change() {
        $(".uniqueSubmit").click();

    }

    function changeNext() {
        $(".uniqueSubmit-Password").click();
        console.log(data);
    }

    return (
        <div className="rectangle-box">
            <div className="form-wrapper">
            <div className="rectangle">
                <div className="relative-header">
                    <div className="relative-header-title">Film</div>
                    <div className="relative-header-title">Review</div>
                </div>
                <div className="rectangle-header">
                    <div className="form-group">
                        {visible ? (
                            <>
                                <div className="title-header title-header-green">Đăng ký</div>
                                <form className="form-input d-flex flex-column target align-items-start"
                                      onSubmit={handleSubmit}>
                                    <div className="hidden-form">

                                    </div>
                                    <label htmlFor="email"><span id="label-email">Email</span></label>
                                    <input type="email" className="email password-input mb-4" id="email"
                                           placeholder="Email"
                                           name="username"/>

                                    <label htmlFor="city" id="label-city">Thành phố</label>
                                    <input type="city" className="email-input mb-4" id="city"
                                           placeholder="Thành phố"
                                           autoComplete="true"
                                           autoFocus name="username"/>

                                    <label htmlFor="date" id="label-date">Ngày sinh</label>
                                    <input type="date" className="password-input mb-4" id="date" placeholder=""
                                           name="password"/>
                                    <label htmlFor="email" className="label-gender" id="gender">Giới tính</label>

                                    <div className="dropdown-gender">
                                        <select className="Dropdown" id="dropdown_values">
                                            <option value="Nam" selected>Nam</option>
                                            <option value="Nữ" selected>Nữ</option>
                                            <option value="Giới tính khác" selected>Giới tính khác</option>
                                        </select>
                                    </div>

                                    <button className="uniqueSubmit" hidden/>
                                </form>
                                <div className="btn-group mt-5 d-flex">
                                    <button className="login-btn-custom" onClick={change}>  <span> Tiếp theo    <i
                                        className="fa fa-arrow-right" aria-hidden="true"/>
                                </span></button>
                                    <button className="cancel-btn-custom" type="button" onClick={backToHome}>Huỷ
                                    </button>
                                </div>

                            </>

                        ) : (
                            <>
                                {error ? (<>
                                    <div className="container form-group w-50 prompt error-message">
                                        <div className="head-prompt d-flex justify-content-between mt-5 mb-5">
                                            <span className="header-error">Lỗi đăng ký</span>
                                            <button className="bg-white border-0" id="off" onClick={() => {
                                                setVisible(true)
                                            }}><i type="button" className="fa fa-times fa-3x" aria-hidden="true"/>
                                            </button>
                                        </div>

                                        <div className="wrapper-content d-flex justify-content-between">
                                            <div className="content-prompt">
                                                Nhập có cái mật khẩu mà cũng sai
                                            </div>
                                        </div>
                                    </div>
                                </>) : (<></>)}

                                <div className="title-header title-header-green">Đăng ký</div>
                                <form className="form-input d-flex flex-column target align-items-start" onSubmit={handleSubmitLast}>
                                    <label htmlFor="password" id="password" className="label-password">Mật khẩu</label>
                                    <input type="password" className="password-input mb-4" id="password"
                                           placeholder="Mật khẩu"
                                           name="password"/>

                                    <label htmlFor="password-verify">
                                    <span id="password_verify" className="label-password">Nhập lại mật khẩu</span>
                                    </label>
                                    <input type="password" className="email password-input mb-4"
                                           id="password_again"
                                           placeholder="Mật khẩu"
                                           name="username"/>

                                    <button className="uniqueSubmit-Password" hidden/>
                                </form>
                                <button className="login-btn-custom" onClick={changeNext}>
                                    <span>Đăng ký<i className="fa fa-check" aria-hidden="true"/></span>
                                </button>
                                <button className="cancel-btn-custom" type="button" onClick={backToHome}>Huỷ
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SignupForm
