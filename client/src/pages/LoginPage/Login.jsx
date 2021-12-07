import './Login.css'
import {useNavigate} from "react-router-dom";
import {useState} from "react";


const Login = () => {

    const navigate = useNavigate();
    var [visible, setVisible] = useState(true);
    const backToHome = () => {
        navigate("/");
    }

    function validate() {

        // $(".submit-button").click();

        // const res = axios.get('http://localhost:3000/api/user/validate');
        // res.then(function (response) {
        //     if (response.data.valid) {
        //         navigate("/");
        //     } else {
        //         setVisible(false);
        //     }
        // })

        setVisible(false);

    }


    return (
        <div className="image-background background">

            {visible ? (<></>) : (
                <div className="container form-group w-50 prompt error-message">
                    <div className="head-prompt d-flex justify-content-between mt-5 mb-5">
                        <span className="header-error">Lỗi đăng nhập</span>
                        <button className="bg-white border-0" id="off" onClick={() => {
                            setVisible(true)
                        }}><i type="button" className="fa fa-times fa-3x" aria-hidden="true"/>
                        </button>
                    </div>

                    <div className="wrapper-content d-flex justify-content-between">
                        <div className="content-prompt">
                            Không tồn tại tài khoản này hoặc sai mật khẩu
                        </div>
                    </div>
                </div>
            )}


            <div className="rectangle-box">
                <div className="rectangle">
                    <div className="relative-header">
                        <div className="relative-header-title">Film</div>
                        <div className="relative-header-title">Review</div>
                    </div>
                    <div className="rectangle-header">
                        <div className="form-group">
                            <div className="title-header">Đăng nhập</div>
                            <form className="form-input d-flex flex-column target">
                                <input type="text" className="email-input mb-4" placeholder="Email" autoComplete
                                       autoFocus name="username"/>
                                <input type="password" className="password-input" placeholder="Mật khẩu "
                                       name="password"/>

                                <button className="submit-button" hidden/>

                            </form>
                            <div className="btn-group mt-5 d-flex">
                                <button className="login-btn-custom " type="buton" id="submit" onClick={validate}> Đăng
                                    nhập
                                </button>
                                <button className="cancel-btn-custom" type="button" onClick={backToHome}>Huỷ</button>
                            </div>
                            <hr/>

                            <div className="signup-form">
                                <span className="signup-font">Chưa có tài khoản?</span>
                                <span>  <a className="signup-font" href="/signup">Đăng ký ngay </a> </span>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};
export default Login;