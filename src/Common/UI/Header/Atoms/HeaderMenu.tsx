import { useStore } from "effector-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { $actualPage, setactualPage } from "../../../../Common/hooksHome";
import { IHeaderNav } from "./HeaderNav";
import "../Styles/HeaderMenu.css";
import { Cross as Hamburger } from "hamburger-react";

export const HeaderMenu = () => {
  const actualPage = useStore($actualPage);
  const [menuFlag, setmenuFlag] = useState<boolean>(false);
  useEffect(() => {
    setmenuFlag(false);
  }, [actualPage]);
  let HeaderNavArrayUser: IHeaderNav[] = [];
  let HeaderNavArrayCenter: IHeaderNav[] = [];
  HeaderNavArrayUser.push(
    { link: "Login", class: "", text: "Вход" },
    {
      link: "Registration",
      class: "",
      text: "Регистрация",
    }
  );
  HeaderNavArrayCenter.push(
    { link: "Home", class: "", text: "Главная" },
    { link: "Chat", class: "", text: "Чат" },
    { link: "Search", class: "", text: "Поиск" },
  );
  return (
    <>
      <div className={`HeaderMenu_ActualPage`} onClick={() => {
            setmenuFlag(!menuFlag);
          }}>
        <Hamburger hideOutline={false} size={20} color="#0E8AC3" toggled={menuFlag}  />
        <div
          className={`HeaderMenu_ActualPage_Title`}
          style={menuFlag ? {color: "#0e8ac3"} : {color: "#000000"}}
        >
          {actualPage}
        </div>
      </div>

      <div
        className={`HeaderMenu`}
        style={menuFlag ? { display: "block" } : { display: "none" }}
      >
        <div className={`HeaderMenu_General`}>
          {HeaderNavArrayCenter.map((e, i) => (
            <Link
              to={`${e.link}`}
              className={`${e.class} `}
              onClick={() => {
                setmenuFlag(false);
                setactualPage(e.link);
              }}
            >
              {e.text}
            </Link>
          ))}
        </div>
        <div className={`HeaderMenu_User`}>
          {HeaderNavArrayUser.map((e, i) => (
            <Link
              to={`${e.link}`}
              className={`${e.class} `}
              onClick={() => {
                setmenuFlag(false);
                setactualPage(e.link);
              }}
            >
              {e.text}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
