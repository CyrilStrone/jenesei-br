// import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Registration.css";
import Picture from '../../../common/assets/major/Mans.svg';
import PictureGoogle from '../../../common/assets/major/GoogleLogo.png';
import { IRegistrationUser, registrationUser } from "../logics/registrationUser";
import { setcheckLoginPage } from "../../../common/HomeHooks";


export const Registration = () => {
    useEffect(() => {
        setcheckLoginPage(true)
    }, [])
    
    const [passwordCheck1, setPasswordCheck1] = useState(true);
    const [passwordCheck2, setPasswordCheck2] = useState(true);
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [personalData, setPersonalData] = useState(false);
    const [personalDataMismatch, setPersonalDataMismatch] = useState(false);

    const [registrationValue, setRegistrationValue] = useState<IRegistrationUser>({ email: "", password: "", firstName: "", lastName: "" });
    const [resetPassword, setResetPassword] = useState({ password: "" });

    const requestRegistration = async () => {
        await registrationUser(registrationValue);
    }

    let handleClick = () => {
        if (registrationValue.email && registrationValue.password && registrationValue.firstName && registrationValue.lastName) {
            if (registrationValue.password == resetPassword.password && personalData) {
                console.log("Все ок")
                requestRegistration()
            } else if (registrationValue.password == resetPassword.password && personalData == false) {
                console.log("personalData не ок")
                setPersonalDataMismatch(true)
            } else if (personalData == true) {
                console.log("password не ок")
                setPasswordMismatch(true)
            } else {
                console.log("password и personalData не ок")
                setPersonalDataMismatch(true)
                setPasswordMismatch(true)
            }
        } else {
            console.log("Данных нет")
        }
    };
    
    return (
        <>
            <div className="Registration">
                <div className="Registration_Picture">
                    <img src={Picture} alt="Картинка" />
                </div>
                <div className="Registration_Block">
                    <div className="Registration_Block-Title">BusinessRoulette - Станьте успешнее вместе с нами</div>
                    <div className="Registration_Block-name">
                        <input type="name" placeholder="Имя" value={registrationValue.firstName} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "firstName": event.target.value }) }} />
                    </div>
                    <div className="Registration_Block-name">
                        <input type="name" placeholder="Фамилия" value={registrationValue.lastName} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "lastName": event.target.value }) }} />
                    </div>
                    <div className="Registration_Block-Mail">
                        <input type="email" placeholder="Email" value={registrationValue.email} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "email": event.target.value }) }} />
                    </div>
                    <div className="Registration_Block-Password">
                        <input type={passwordCheck1 ? "password" : "text"} placeholder="Пароль" value={registrationValue.password} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "password": event.target.value }); setPasswordMismatch(false) }} />
                        {passwordCheck1 ? <div onClick={() => {
                            setPasswordCheck1(false)
                        }} className="Registration_Block-Password__Show">
                            Показать
                        </div> :
                            <div onClick={() => {
                                setPasswordCheck1(true)
                            }} className="Registration_Block-Password__AnShow">
                                Скрыть
                            </div>}
                    </div>
                    <div className="Registration_Block-Password">
                        <input type={passwordCheck2 ? "password" : "text"} placeholder="Повторите пароль" value={resetPassword.password} onChange={(event: any) => { setResetPassword({ ...registrationValue, "password": event.target.value }); setPasswordMismatch(false) }} />
                        {passwordMismatch && <div className="Registration_Block-Mismatch">Пароли не совпадают</div>}
                        {passwordCheck2 ? <div onClick={() => {
                            setPasswordCheck2(false)
                        }} className="Registration_Block-Password__Show">
                            Показать
                        </div> :
                            <div onClick={() => {
                                setPasswordCheck2(true)
                            }} className="Registration_Block-Password__AnShow">
                                Скрыть
                            </div>}
                    </div>

                    <div className="Registration_Block-Check Registration_Block-Check_Style">
                        <div className="Registration_Block-Check__Block">
                            <input
                                type="checkbox"
                                className="checkbox"
                                value={personalData ? "checked" : ""}
                                onChange={() => { setPersonalData(!personalData); personalData == false && setPersonalDataMismatch(false) }}
                            />
                            Даю согласие на обработку персональных данных
                        </div>
                        {personalDataMismatch && <div className="Registration_Block-Mismatch Registration_Block-Mismatch__Check ">Согласитесь</div>}
                    </div>
                    <div className="Registration_Block-Check Registration_Block-Check_Style">
                        <input
                            type="checkbox"
                            className="checkbox"
                        // onChange={soldCheckbox}
                        />
                        Даю согласиена получение рекламной рассылки на мой email{" "}
                    </div>
                    <div className="Registration_Block-Registration" onClick={handleClick}>
                        Присоедениться
                    </div>
                    <div className="Registration_Block__OR">
                        Или
                    </div>
                    <Link
                        className={`Registration_Block__Style-Google`}
                        to={"/Home/Top"}
                    >
                        <img src={PictureGoogle} alt="Картинка" />
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
