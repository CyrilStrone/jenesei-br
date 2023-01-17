// import { useStore } from "effector-react";
// import { PagesLogin } from "../../Routes";
import React from "react";
import { Link } from "react-router-dom";
import {
  $userName,
  // $userAuthorization,
  setuserAuthorization,
} from "../../../Common/hooks";
import "../Styles/Login.css";
import Picture from '../../../Common/Assets/Login/LoginPicture.png';
import { useStore } from "effector-react";


// export interface ILoginArray {
//   id?: string;
//   text?: string;
//   value?: string;
//   class?: string;
//   authorization?: boolean;
//   link?: string;
//   indexlink?: string;
//   Component?:JSX.Element;
// }
export const Login = () => {
  // const userAuthorization = useStore($userAuthorization);
  const userName = useStore($userName);
  var newuserName = userName.replace(/ /g, "-");
  let handleClick = () => {
    // if (userAuthorization) {
    //   setuserAuthorization(false);
    // } else {
      setuserAuthorization(true);
    // }
  };

  const soldCheckbox = () => {};
  return (
    <>
      <div className={`Login`}>
      <div className="Login_Picture">
        <img src={Picture} alt="Картинка" />
        </div>
        
        <div className="Login_Block">
          <div className="Login_Block-Title">Вход</div>
          <div className="Login_Block-Mail">
            <input type="email" value="Email" />
          </div>
          <div className="Login_Block-Password">
            <input type="password" value="Пароль" />
            <Link className="Login_Block-Password_Forgot" to={"/Forgot"}>
              Забыли?
            </Link>
          </div>
          <div className="Login_Block-Check">
            <input
              type="checkbox"
              className="checkbox"
              onChange={soldCheckbox}
            />
            Запомнить меня
          </div>
          <div className="Login_Block-Login">
            <Link to={`/User/${newuserName}`} onClick={handleClick}>
              Войти
            </Link>
          </div>
          <div className="Login_Block-Registration">
            У вас еще нет аккаунта?
            <Link to={"/Registration"}>Зарегистрироваться!</Link>
          </div>
        </div>
      </div>
    </>
  );
};
