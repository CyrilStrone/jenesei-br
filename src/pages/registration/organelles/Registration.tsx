import "../styles/Registration.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IRegistrationUser, registrationUser } from "../logics/registrationUser";
import { setCustomValidityShow } from "../../../ui/customValidity/organelles/CustomValidity";
import { SpinningCircles } from "react-loading-icons";
import JeneseiLogo from '../../../assets/logo/JeneseiLogo.svg'
import { changeAccessTokenToLocalStorage } from "../../../ui/functions/axiosInstance";
import { requestUser } from "../../../ui/functions/requestUser";

export const Registration = () => {
    const [registrationValue, setRegistrationValue] = useState<IRegistrationUser>({ email: "", password: "", firstName: "", lastName: "", login: "", date: "" });
    const [resetPassword, setResetPassword] = useState({ password: "" });
    const [checkedData, setCheckedData] = useState(false);
    const [check, setCheck] = useState<boolean>(false)
    const handleCheck = () => {
        setCheckedData(!checkedData);
    };
    const handleClick = async () => {
        if (registrationValue.password === resetPassword.password) {
            try {
                setCheck(true)
                const result = await registrationUser(registrationValue);
                if(result){
                    changeAccessTokenToLocalStorage(result)
                    requestUser()
                }
            } catch (error) {
                setCheck(false)
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
                    {check ?
                        <SpinningCircles height="2em" fill="#0E8AC3" stroke="#000" strokeOpacity={.125} speed={1} />
                        :
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
                                <input minLength={1} required maxLength={40} className="Registration__Block__Content__InputBar__Input" type={"email"} placeholder="Почта" value={registrationValue.email} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "email": event.target.value }) }} />
                                <input required minLength={8} className="Registration__Block__Content__InputBar__Input" type={"password"} placeholder="Пароль" value={registrationValue.password} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "password": event.target.value }) }} />
                                <input required minLength={8} className="Registration__Block__Content__InputBar__Input" type={"password"} placeholder="Повторите пароль" value={resetPassword.password} onChange={(event: any) => { setResetPassword({ ...resetPassword, "password": event.target.value }) }} />
                                <div className="Registration__Block__Content__InputBar__Date">
                                    <div className="Registration__Block__Content__InputBar__Title">Дата рождения</div>
                                    <input required max={new Date().toISOString().split('T')[0]} min="1776-06-30" className="Registration__Block__Content__InputBar__Input" type={"date"} placeholder="Дата рождения" value={registrationValue?.date} onChange={(event: any) => { setRegistrationValue({ ...registrationValue, "date": event.target.value }) }} />
                                </div>
                            </div>
                            <div className="Registration__Block__Content__Remember">
                                <input type="checkbox" checked={checkedData} onChange={handleCheck} />
                                Даю согласие на обработку персональных данных
                            </div>
                            <div className="Registration__Block__Content__Footer">
                                <input type="submit" className="Registration__Block__Content__Registration" value="Создать Jenesei ID" />
                                <NavLink to={"/authorization"} className="Registration__Block__Content__Footer__Login">
                                    У вас уже есть Jenesei ID?
                                </NavLink>
                            </div>
                        </form>
                    }
                </div>
            </div>
        </>
    );
};
