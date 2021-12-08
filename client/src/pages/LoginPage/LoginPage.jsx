import './LoginPage.css'
import LoginForm from '../../components/LoginForm/LoginForm.js'
import LoginError from '../../components/LoginError/LoginError.js'
import {useNavigate} from "react-router-dom";
import {useState} from "react";


const LoginPage = () => {
    var [error, setError] = useState(false);

    return (
        <div className="login-background">
            {error ? <LoginError setError={setError}/> : <></>}
            <LoginForm setError={setError}/>
        </div>
    )
}

export default LoginPage;
