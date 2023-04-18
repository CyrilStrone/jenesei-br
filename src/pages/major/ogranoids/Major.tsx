import {useState} from "react";
import "../styles/Major.css";
import "../styles/MajorScroll.css";
import "../styles/MajorUser.css";
import "../styles/MajorSkills.css";

import Picture from '../../../common/assets/major/Mans.svg';
import PictureGoogle from '../../../common/assets/major/GoogleLogo.png';
import { MajorScroll } from "../molecules/MajorScroll";
import { MajorSkills } from "../molecules/MajorSkills";
import { ILoginUser, loginUser } from "../../login/logics/loginUser";

export const Major = () => {
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [loginValue, setLoginValue] = useState<ILoginUser>({ email: "", password: "" });
    const requestLogin = async () => {
        await loginUser(loginValue);
    }

    let handleClick = () => {
        if (loginValue.email && loginValue.password) {
            requestLogin()
        } else {
            console.log("Данных нет")
        }
    };
    return (
        <div className="Major">
            <div className="Major-First">
                <div className="Major-Block">
                    <div className="Major-Block__Title">
                        BusinessRoulette - Станьте успешнее вместе с нами
                    </div>
                    <div className="Major-Block__Input-MailOrPhone">
                        <input type={"email"} placeholder="Адрес эл. почты" value={loginValue.email} onChange={(event: any) => { setLoginValue({ ...loginValue, "email": event.target.value }) }} />
                    </div>
                    <div className="Major-Block__Input-Password">
                        <input type={passwordCheck ? "text" : "password"} placeholder="Пароль" value={loginValue.password} onChange={(event: any) => { setLoginValue({ ...loginValue, "password": event.target.value }) }}/>
                        {!passwordCheck ? <div onClick={() => {
                                setPasswordCheck(true)
                            }} className="Major-Block__Input-Password__Show">
                                Показать
                            </div> :
                            <div onClick={() => {
                                setPasswordCheck(false)
                            }} className="Major-Block__Input-Password__AnShow">
                                Скрыть
                            </div>}
                    </div>
                    <div className="Major-Block__Button-Forgot">
                        Забыли пароль?
                    </div>
                    <div
                        className={`Major-Block__Login__Style-Standart`}
                        onClick={handleClick}
                    >
                        Войти
                    </div>
                    <div className="Major-Block__OR">
                        Или
                    </div>
                    <div
                        className={`Major-Block__Login__Style-Google`}
                    >
                        <img src={PictureGoogle} alt="Картинка"/>
                        <div className={`Major-Block__Login__Style-Google__Text`}>
                            Войти, используя Google
                        </div>
                    </div>
                </div>
                    <img src={Picture}  className="Major_Picture" alt="Картинка"/>
            </div>
            <MajorScroll/>
            <MajorSkills/>
        </div>
    );
};
