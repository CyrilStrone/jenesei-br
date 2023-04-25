// import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Registration.css";
import { IRegistrationUser, registrationUser } from "../logics/registrationUser";
import JeneseiLogo from '../../../assets/logo/JeneseiLogo.svg'


export const Registration = () => {
    const [registrationValue, setRegistrationValue] = useState<IRegistrationUser>({ email: "", password: "", firstName: "", lastName: "", login: "", date: "" });
    const [resetPassword, setResetPassword] = useState({ password: "" });
    const [checkedData, setCheckedData] = useState(false);
    const [dateFocus, setDateFocus] = useState(false);
    const handleCheck = () => {
        setCheckedData(!checkedData);
    };
    const requestRegistration = async () => {
        await registrationUser(registrationValue);
    }
    const handleClick = () => {
        if (registrationValue.email && registrationValue.password && registrationValue.firstName && registrationValue.lastName && registrationValue.login && registrationValue.date) {
            requestRegistration()
        } else {
            alert("Данные говно")
        }
    };
    useEffect(() => {
        if (!registrationValue.date) {
            setDateFocus(false)
        }
        console.log("registrationValue", registrationValue)
    }, [registrationValue])
    let checkDate = () => {
        if (!registrationValue.date) {
            setDateFocus(false)
        }
    };
    return (
        <>
            <div className="Registration">
                <div className="Registration__Block">
                    <div className="Registration__Block__Content">
                        <div className="Registration__Block__Content__Logo">
                            <img src={JeneseiLogo} alt="Jenesei Logo" />
                        </div>
                        <div className="Registration__Block__Content__Title">
                            Создание Jenesei ID
                        </div>
                        <div className="Registration__Block__Content__InputBar">
                            <input onClick={checkDate} type={"text"} placeholder="Имя" value={registrationValue.firstName} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "firstName": event.target.value }) }} />
                            <input onClick={checkDate} type={"text"} placeholder="Фамилия" value={registrationValue.lastName} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "lastName": event.target.value }) }} />
                            <input onClick={checkDate} type={"text"} placeholder="Логин" value={registrationValue.login} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "login": event.target.value }) }} />
                            <input onClick={checkDate} type={"email"} placeholder="Почта" value={registrationValue.email} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "email": event.target.value }) }} />
                            <input onClick={() => { setDateFocus(true) }} type={dateFocus ? "date" : "text"} placeholder="Дата рождения" value={registrationValue.date} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "date": event.target.value }) }} />
                            <input onClick={checkDate} type={"password"} placeholder="Пароль" value={registrationValue.password} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "password": event.target.value }) }} />
                            <input onClick={checkDate} type={"password"} placeholder="Повторите пароль" value={resetPassword.password} onChange={(event: any) => { setResetPassword({ ...resetPassword, "password": event.target.value }) }} />
                        </div>
                        <div className="Registration__Block__Content__Remember">
                            <input type="checkbox" checked={checkedData} onChange={handleCheck} />
                            Даю согласие на обработку персональных данных
                        </div>
                        <div className="Registration__Block__Content__Footer">
                            <div onClick={handleClick} className="Registration__Block__Content__Registration">
                                Создать Jenesei ID
                            </div>
                            <NavLink to={"/Login"} className="Registration__Block__Content__Footer__Login">
                                У вас уже есть Jenesei ID?
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
