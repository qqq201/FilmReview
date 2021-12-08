import './LoginForm.css'
import userApi from '../../api/user_api.js'
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const LoginForm = ({setError}) => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const backToHome = () => {
        navigate("/");
    }

    const setEmail = (event) => {
        state.email = event.target.value
        setState({...state})
    }

    const setPassword = (event) => {
        state.password = event.target.value
        setState({...state})
    }

    const validate = async () => {
        try {
            const response = await userApi.login(state.email, state.password)
            if (response !== undefined && response.success === true)
                console.log(response)
            else
                setError(true)
        } catch (error){
            setError(true)
        }
    }

    return (
        <div className="rectangle-box">
            <div className="form-wrapper">
                <div className = "rectangle">
                    <div className="relative-header">
                        <div className="relative-header-title">Film</div>
                        <div className="relative-header-title">Review</div>
                    </div>
                    <div className="rectangle-header">
                        <div className="form-group">
                            <div className="title-header">Đăng nhập</div>
                            <form className="form-input d-flex flex-column target">
                                <input type="text" className="email-input mb-4" placeholder="Email" autoComplete
                                       autoFocus name="email" onChange={(event) => {setEmail(event)}}/>
                                <input type="password" className="password-input" placeholder="Mật khẩu "
                                       name="password" onChange={(event) => {setPassword(event)}}/>
                                <button className="submit-button" hidden/>
                            </form>
                            <div className="btn-group mt-5 d-flex">
                                <button className="login-btn-custom " type="buton" id="submit" onClick={validate}>
                                    Đăng nhập
                                </button>
                                <button className="cancel-btn-custom" type="button" onClick={backToHome}>Huỷ</button>
                            </div>
                            <hr/>

                            <div className="signup-form">
                                <span className="signup-font">Chưa có tài khoản?</span>
                                <span><a className="signup-font" href="/signup">Đăng ký ngay</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
