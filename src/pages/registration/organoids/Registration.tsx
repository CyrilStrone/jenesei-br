// import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Registration.css";
import { IRegistrationUser, registrationUser } from "../logics/registrationUser";
import JeneseiLogo from '../../../assets/logo/JeneseiLogo.svg'
import { setCustomValidityShow } from "../../../ui/customValidity/organoids/CustomValidity";

export const Registration = () => {
    const [registrationValue, setRegistrationValue] = useState<IRegistrationUser>({ email: "", password: "", firstName: "", lastName: "", login: "", date: "" });
    const [resetPassword, setResetPassword] = useState({ password: "" });
    const [checkedData, setCheckedData] = useState(false);
    const [dateFocus, setDateFocus] = useState(false);
    const handleCheck = () => {
        setCheckedData(!checkedData);
    };
    const handleClick = async () => {
        if (registrationValue.password == resetPassword.password) {
            try {
                await registrationUser(registrationValue);
            } catch (error) {
                setCustomValidityShow("Такой аккаунт уже существует")
            }
        } else {
            setCustomValidityShow("Пароли не совпадают")
        }
    }
    return (
        <>
            <div className="Registration White__Block">
                <div className="Registration__Block White__Block__General">
                    <form onSubmit={e => { e.preventDefault(); handleClick(); }} className="Registration__Block__Content">
                        <div className="Registration__Block__Content__Logo">
                            <img src={JeneseiLogo} alt="Jenesei Logo" />
                        </div>
                        <div className="Registration__Block__Content__Title">
                            Создание Jenesei ID
                        </div>
                        <div className="Registration__Block__Content__InputBar">
                            <input minLength={1} required maxLength={20} className="Registration__Block__Content__InputBar__Input" type={"text"} placeholder="Имя" value={registrationValue.firstName} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "firstName": event.target.value }) }} />
                            <input minLength={1} required maxLength={20} className="Registration__Block__Content__InputBar__Input" type={"text"} placeholder="Фамилия" value={registrationValue.lastName} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "lastName": event.target.value }) }} />
                            <input minLength={4} required maxLength={20} className="Registration__Block__Content__InputBar__Input" type={"text"} placeholder="Логин" value={registrationValue.login} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "login": event.target.value }) }} />
                            <input minLength={1} required className="Registration__Block__Content__InputBar__Input" type={"email"} placeholder="Почта" value={registrationValue.email} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "email": event.target.value }) }} />
                            <input required className="Registration__Block__Content__InputBar__Input Registration__Block__Content__InputBar__Input" onFocus={(e: any) => { setDateFocus(true) }} type={dateFocus ? "date" : "text"} placeholder="Дата рождения" value={registrationValue.date} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "date": event.target.value }) }} />
                            {/* TODO:Странность на ios */}
                            <input required minLength={8} className="Registration__Block__Content__InputBar__Input" type={"password"} placeholder="Пароль" value={registrationValue.password} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "password": event.target.value }) }} />
                            <input required minLength={8} className="Registration__Block__Content__InputBar__Input" type={"password"} placeholder="Повторите пароль" value={resetPassword.password} onChange={(event: any) => { setResetPassword({ ...resetPassword, "password": event.target.value }) }} />
                        </div>
                        <div className="Registration__Block__Content__Remember">
                            <input type="checkbox" checked={checkedData} onChange={handleCheck} />
                            Даю согласие на обработку персональных данных
                        </div>
                        <div className="Registration__Block__Content__Footer">
                            <input type="submit" className="Registration__Block__Content__Registration" value="Создать Jenesei ID"/>
                            <NavLink to={"/Login"} className="Registration__Block__Content__Footer__Login">
                                У вас уже есть Jenesei ID?
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
