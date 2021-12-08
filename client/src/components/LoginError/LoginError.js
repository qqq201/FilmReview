import './LoginError.css'

const LoginError = ({setError}) => {
    return (
        <div className="container form-group w-50 prompt error-message">
            <div className="head-prompt d-flex justify-content-between mt-5 mb-5">
                <span className="header-error">Lỗi đăng nhập</span>
                <button className="bg-white border-0" id="off" onClick={() => {
                    setError(false)
                }}>
                <i type="button" className="fa fa-times fa-3x" aria-hidden="true"/>
                </button>
            </div>

            <div className="wrapper-content d-flex justify-content-between">
                <div className="content-prompt">
                    Không tồn tại tài khoản này hoặc sai mật khẩu
                </div>
            </div>
        </div>
    )
}


export default LoginError
