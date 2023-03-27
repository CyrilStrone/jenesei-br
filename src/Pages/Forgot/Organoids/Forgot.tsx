// import { useStore } from "effector-react";
// import { PagesLogin } from "../../Routes";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Forgot.css";

// import { Link } from "react-router-dom";
// import {
//   $userAuthorization,
// } from "../../../Common/hooks";

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
export const Forgot = () => {

  return (
    // <button className={`Login`} onClick={handleClick}>
    //   {userAuthorization ? <a>Выход</a> : <Link to={"/User"}>Вход</Link>}
    // </button>
    <div className="Forgot">
      <Link to={"/Login"}>Назад</Link>
      <div>Забыл?</div>
    </div>
  );
};
