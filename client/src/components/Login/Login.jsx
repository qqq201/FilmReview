import './Login.css'

const login = () => {
    return (
        <div className="image-background background">
            <div className="rectangle-box">
                <div className="rectangle">
                    <div className="relative-header">
                        <div className="relative-header-title">Film</div>
                        <div className="relative-header-title">Review</div>

                    </div>
                    <div className="rectangle-header">
                        <div className="form-group">
                            <div className="title-header">Đăng nhập</div>
                            <form className="form-input d-flex flex-column" >
                                <input type="text" className="email-input mb-4" placeholder="Email" autoComplete
                                       autoFocus name="username"/>
                                <input type="password" className="password-input" placeholder="Mật khẩu " name="password"/>
                            </form>
                            <div className="btn-group mt-5 d-flex">
                                <button className="login-btn-custom" type="button"><a class="button-link"
                                                                                      href="http://localhost:3000/">Đăng
                                    nhập</a></button>
                                <button className="cancel-btn-custom" type="button"><a class="button-link"
                                                                                       href="http://localhost:3000/">Huỷ</a>
                                </button>

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
export default login;