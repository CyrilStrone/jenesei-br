import React, {useState} from "react";
import "../Styles/Major.css";
import {Link} from "react-router-dom";
import Picture from '../../../Common/Assets/Major/Mans.svg';
import PictureGoogle from '../../../Common/Assets/Major/GoogleLogo.png';

export const Major = () => {
    const [passwordCheck, setPasswordCheck] = useState(false);

    return (
        <div className="Major">
            <div className="Major-Block">
                <div className="Major-Block__Title">
                    BusinessRoulette - Станьте успешнее вместе с нами
                </div>
                <div className="Major-Block__Input-MailOrPhone">
                    <input type={"text"} value="Адрес эл. почты или телефон" defaultValue="Адрес эл. почты или телефон"/>
                </div>
                <div className="Major-Block__Input-Password">
                    <input type={passwordCheck ? "text" : "password"} value="Пароль" defaultValue="Пароль"/>
                    {!passwordCheck ? <div onClick={()=>{setPasswordCheck(true)}} className="Major-Block__Input-Password__Show">
                            Показать
                        </div> :
                        <div onClick={()=>{setPasswordCheck(false)}} className="Major-Block__Input-Password__AnShow">
                            Скрыть
                        </div>}
                </div>
                <div className="Major-Block__Button-Forgot">
                    Забыли пароль?
                </div>
                <Link
                    className={`Major-Block__Login__Style-Standart`}
                    to={"/Home/Top"}
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
            <div className="Major_Picture">
                <img src={Picture} alt="Картинка"/>
            </div>
        </div>
    );
};
