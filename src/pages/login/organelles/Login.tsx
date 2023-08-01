import "../styles/Login.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SpinningCircles } from "react-loading-icons";

import { ILoginUser, loginUser } from "../logics/loginUser";
import { setCustomValidityShow } from "../../../ui/customValidity/organelles/CustomValidity";
import { requestUser } from "../../../ui/functions/requestUser";
import  Checker from "../../../ui/checker/organelles/Checker";

import JeneseiLogo from '../../../assets/logo/JeneseiLogo.svg'
import { changeAccessTokenToLocalStorage, changeCheckRefreshToLocalStorage } from "../../../ui/functions/localStorage";

export const Login = () => {
    const [loginValue, setLoginValue] = useState<ILoginUser>({ login: "", password: "", checked: true });
    const [check, setCheck] = useState<boolean>(false)
    const handleCheck = () => {
        setLoginValue({ ...loginValue, "checked": !(loginValue.checked) })
    };
    const handleClick = async () => {
        try {
            setCheck(true)
            const result = await loginUser(loginValue);
            if (result) {
                changeAccessTokenToLocalStorage(result)
                requestUser()
            } else {
                setCheck(false)
                setCustomValidityShow("Не удалось выполнить вход. Пожалуйста, проверьте логин и пароль.")
            }
        } catch (error: any) {
            setCheck(false)
            setCustomValidityShow(error.message || "Произошла ошибка во время входа.");
        }
    }
    const handleKeyPress = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            handleClick()
        }
    }
    useEffect(() => {
        if (loginValue.checked) {
            changeCheckRefreshToLocalStorage("true")
        } else {
            changeCheckRefreshToLocalStorage("false")
        }
    }, [loginValue.checked])
    return (
        <div className="Login White__Block">
            <div className="Login__Block White__Block__General">
                <div className="Login__Block__Content">
                    <div className="Login__Block__Content__Logo">
                        <img src={JeneseiLogo} alt="Jenesei Logo" />
                    </div>
                    <div className="Login__Block__Content__Title">
                        Войти с помощью Jenesei ID
                    </div>
                    {check ?
                        <SpinningCircles height="2em" fill="#0E8AC3" stroke="#000" strokeOpacity={.125} speed={1} />
                        : <>
                            <form onSubmit={e => { e.preventDefault(); setCheck(true); setTimeout(() => handleClick(), 1000); }} className="Login__Block__Content__InputBar">
                                <input minLength={4} required maxLength={50} type={"text"} className="Login__Block__Content__InputBar__MailOrLogin Login__Block__Content__Input" placeholder="Jenesei ID" value={loginValue.login} onChange={(event: any) => { setLoginValue({ ...loginValue, "login": event.target.value }) }} />
                                <input minLength={8} required onKeyDown={handleKeyPress} type={"password"} className="Login__Block__Content__InputBar__Password Login__Block__Content__Input" placeholder="Пароль" value={loginValue.password} onChange={(event: any) => { setLoginValue({ ...loginValue, "password": event.target.value }) }} />
                                <input type="submit" className="Login__Block__Content__InputBar__LoginLogo" />
                            </form>
                            <div className="Login__Block__Content__Remember">
                                Не выходить из системы?
                                <Checker value={loginValue.checked} onClick={handleCheck} />
                            </div>
                        </>
                    }
                    <div className="Login__Block__Content__Footer">
                        <NavLink to={"/forgot"} className="Login__Block__Content__Forgot">
                            Забыли Jenesei ID или пароль?
                        </NavLink>
                        <NavLink to={"/registration"} className="Login__Block__Content__Registration">
                            Создать Jenesei ID
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
};

