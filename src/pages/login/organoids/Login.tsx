import { useState } from "react";
import "../styles/Login.css";
import { ILoginUser, loginUser } from "../logics/loginUser";
import JeneseiLogo from '../../../common/assets/logo/JeneseiLogo.svg'
import LoginLogo from '../../../common/assets/login/Login.svg'

import { NavLink, useNavigate } from "react-router-dom";
export const Login = () => {
    const navigate = useNavigate();
    const [loginValue, setLoginValue] = useState<ILoginUser>({ email: "", password: "" });
    const [checked, setChecked] = useState(false);
    const handleCheck = () => {
        setChecked(!checked);
    };

    const requestLogin = async () => {
        if (await loginUser(loginValue)) {
            navigate("/User")
        }
    }
    let handleClick = () => {
        if (loginValue.email && loginValue.password) {
            requestLogin()
        } else {
            alert("Данные говно")
        }
    };
    const handleKeyPress = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            console.log("АУЕ")
        }
    }

    return (
        <div className="Login">
            <div className="Login__Block">
                <div className="Login__Block__Content">
                    <div className="Login__Block__Content__Logo">
                        <img src={JeneseiLogo} alt="Jenesei Logo" />
                    </div>
                    <div className="Login__Block__Content__Title">
                        Войти с помощью Jenesei ID
                    </div>
                    <div className="Login__Block__Content__InputBar">
                        <input type={"email"} className="Login__Block__Content__InputBar__MailOrLogin" placeholder="Jenesei ID" value={loginValue.email} onChange={(event: any) => { setLoginValue({ ...loginValue, "email": event.target.value }) }} />
                        <input onKeyDown={handleKeyPress} type={"password"} className="Login__Block__Content__InputBar__Password" placeholder="Пароль" value={loginValue.password} onChange={(event: any) => { setLoginValue({ ...loginValue, "password": event.target.value }) }} />
                        <img onClick={handleClick} className="Login__Block__Content__InputBar__LoginLogo" src={LoginLogo} alt="" />
                    </div>
                    <div className="Login__Block__Content__Remember">
                        <input type="checkbox" checked={checked} onChange={handleCheck} />
                        Не выходить из системы?
                    </div>
                    <div className="Login__Block__Content__Footer">
                        <NavLink to={"/Forgot"} className="Login__Block__Content__Forgot">
                            Забыли Jenesei ID или пароль?
                        </NavLink>
                        <NavLink to={"/Registration"} className="Login__Block__Content__Registration">
                            Создать Jenesei ID
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
};

