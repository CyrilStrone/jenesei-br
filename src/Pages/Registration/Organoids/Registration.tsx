// import { useStore } from "effector-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  $userName,
  // $userAuthorization,
  setuserAuthorization,
} from "../../../Common/hooks";
import "../Styles/Registration.css";
import Picture from "../../../Common/Assets/Login/LoginPicture.png";
import { useStore } from "effector-react";

export const Registration = () => {
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
      <div className={`Registration`}>
        <div className="Registration_Picture">
          <img src={Picture} alt="Картинка" />
        </div>

        <div className="Registration_Block">
          <div className="Registration_Block-Title">Регистрация</div>
          <div className="Registration_Block-name">
            <input type="name" value="Имя" />
          </div>
          <div className="Registration_Block-Mail">
            <input type="email" value="Email" />
          </div>
          <div className="Registration_Block-Password">
            <input type="password" value="Пароль" />
            <Link className="Registration_Block-Password_Forgot" to={"/Forgot"}>
              Забыли?
            </Link>
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
          <div className="Registration_Block-Registration">
            <Link to={`/User/${newuserName}`} onClick={handleClick}>
              Войти
            </Link>
          </div>
          <div className="Registration_Block-Login">
            У вас уже есть аккаунт?
            <Link to={"/Login"}>Войти!</Link>
          </div>
        </div>
      </div>
    </>
  );
};
