// import { useStore } from "effector-react";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {
    $userName,
    // $userAuthorization,
    setuserAuthorization,
} from "../../../Common/hooksUser";
import "../Styles/Registration.css";
import Picture from '../../../Common/Assets/Major/Mans.svg';
import {useStore} from "effector-react";
import {setcheckLoginPage} from "../../../Common/hooksHome";
import PictureGoogle from '../../../Common/Assets/Major/GoogleLogo.png';

export const Registration = () => {
    const userName = useStore($userName);
    let newuserName = userName.replace(/ /g, "-");
    useEffect(() => {
        newuserName = userName.replace(/ /g, "-");
    }, [userName])
    let handleClick = () => {
        setuserAuthorization(true);
    };
    const [passwordCheck1, setPasswordCheck1] = useState(false);
    const [passwordCheck2, setPasswordCheck2] = useState(false);

    useEffect(() => {
        setcheckLoginPage(true)
    }, [])
    const soldCheckbox = () => {
    };
    return (
        <>
            <div className={`Registration`}>
                <div className="Registration_Picture">
                    <img src={Picture} alt="Картинка"/>
                </div>
                <div className="Registration_Block">
                    <div className="Registration_Block-Title">BusinessRoulette - Станьте успешнее вместе с нами</div>
                    <div className="Registration_Block-name">
                        <input type="name" value="Имя"/>
                    </div>
                    <div className="Registration_Block-Mail">
                        <input type="email" value="Email"/>
                    </div>
                    <div className="Registration_Block-Password">
                        <input type={passwordCheck1 ? "password" : "text"} value="Пароль"/>
                        {!passwordCheck1 ? <div onClick={() => {
                                setPasswordCheck1(true)
                            }} className="Registration_Block-Password__Show">
                                Показать
                            </div> :
                            <div onClick={() => {
                                setPasswordCheck1(false)
                            }} className="Registration_Block-Password__AnShow">
                                Скрыть
                            </div>}
                    </div>
                    <div className="Registration_Block-Password">
                        <input type={passwordCheck2 ? "password" : "text"} defaultValue="Повторите пароль"/>
                        {!passwordCheck2 ? <div onClick={() => {
                                setPasswordCheck2(true)
                            }} className="Registration_Block-Password__Show">
                                Показать
                            </div> :
                            <div onClick={() => {
                                setPasswordCheck2(false)
                            }} className="Registration_Block-Password__AnShow">
                                Скрыть
                            </div>}
                    </div>
                    <div className="Registration_Block-Check Registration_Block-Check_Style">
                        <input
                            type="checkbox"
                            className="checkbox"
                            onChange={soldCheckbox}
                        />
                        Даю согласие на обработку персональных данных
                    </div>
                    <div className="Registration_Block-Check Registration_Block-Check_Style">
                        <input
                            type="checkbox"
                            className="checkbox"
                            onChange={soldCheckbox}
                        />
                        Даю согласиена получение рекламной рассылки на мой email{" "}
                    </div>
                    <Link className="Registration_Block-Registration" to={`/User/${newuserName}`} onClick={handleClick}>
                        Присоедениться
                    </Link>
                    <div className="Registration_Block__OR">
                        Или
                    </div>
                    <Link
                        className={`Registration_Block__Style-Google`}
                        to={"/Home/Top"}
                    >
                        <img src={PictureGoogle} alt="Картинка"/>
                        <div className={`Registration_Block__Style-Google__Text`}>
                            Войти, используя Google
                        </div>
                    </Link>
                    <div className="Registration_Block-Login">
                        У вас уже есть аккаунт?
                        <Link to={"/Login"}>Войти!</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
