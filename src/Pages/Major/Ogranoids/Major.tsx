import React, {useEffect, useState} from "react";
import "../Styles/Major.css";
import "../Styles/MajorScroll.css";
import "../Styles/MajorUser.css";
import "../Styles/MajorSkills.css";

import {Link} from "react-router-dom";
import Picture from '../../../Common/Assets/Major/Mans.svg';
import PictureGoogle from '../../../Common/Assets/Major/GoogleLogo.png';
import { MajorScroll } from "../Molecules/MajorScroll";
import { MajorSkills } from "../Molecules/MajorSkills";
import {setcheckLoginPage} from "../../../Common/hooksHome";
import {$userName, setuserAuthorization} from "../../../Common/hooksUser";
import {useStore} from "effector-react";

export const Major = () => {
    const [passwordCheck, setPasswordCheck] = useState(false);
    const userName = useStore($userName);
    let newuserName = userName.replace(/ /g, "-");
    useEffect(() => {
        newuserName = userName.replace(/ /g, "-");
        }, [userName])
    useEffect(() => {
        setcheckLoginPage(false)
    }, [])
    return (
        <div className="Major">
            <div className="Major-First">
                <div className="Major-Block">
                    <div className="Major-Block__Title">
                        BusinessRoulette - Станьте успешнее вместе с нами
                    </div>
                    <div className="Major-Block__Input-MailOrPhone">
                        <input type={"text"} value="Адрес эл. почты или телефон"
                               defaultValue="Адрес эл. почты или телефон"/>
                    </div>
                    <div className="Major-Block__Input-Password">
                        <input type={passwordCheck ? "text" : "password"} value="Пароль" defaultValue="Пароль"/>
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
                    <Link
                        className={`Major-Block__Login__Style-Standart`}
                        to={`/User/${newuserName}`}
                        onClick={()=>setuserAuthorization(true)}
                    >
                        Войти
                    </Link>
                    <div className="Major-Block__OR">
                        Или
                    </div>
                    <Link
                        className={`Major-Block__Login__Style-Google`}
                        to={"/Home/Top"}
                    >
                        <img src={PictureGoogle} alt="Картинка"/>
                        <div className={`Major-Block__Login__Style-Google__Text`}>
                            Войти, используя Google
                        </div>
                    </Link>
                </div>
                    <img src={Picture}  className="Major_Picture" alt="Картинка"/>
            </div>
            <MajorScroll/>
            <MajorSkills/>
        </div>
    );
};
