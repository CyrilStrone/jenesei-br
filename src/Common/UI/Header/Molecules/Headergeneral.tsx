import React from "react";
import { Headerlogo, IHeaderlogo } from "../Atoms/HeaderLogo";
// import {  IHeaderNav } from "../Atoms/HeaderNav";
// import { $menuBurger, $userAuthorization, setmenuBurger } from "../../../hooks";

// import ikit from '../../../Assets/Search/ikit.jpg';
import logo from "../../../Assets/Logo/LogoMin.jpg";

// import burgerIcon from '../../../Assets/Burger/BurgerIcon.svg';
// import BurgerIconExit from '../../../Assets/Burger/BurgerIconExit.svg';

import { HeaderNav, IHeaderNav } from "../Atoms/HeaderNav";
import { Link } from "react-router-dom";
import { HeaderMenu } from "../Atoms/Headermenu";
// import { slide as Menu } from 'react-burger-menu';

export const HeaderGeneral = () => {
  // const menuBurger = useStore($menuBurger);
  const HeaderlogoArray: IHeaderlogo[] = [
    { link: "Home", indexlink: "0", class: "Headerlogo_Elem", img: logo },
  ];

  let HeaderNavArrayUser: IHeaderNav[] = [];
  let HeaderNavArrayCenter: IHeaderNav[] = [];

  // const handleIsOpen = () => {
  //     setmenuBurger(!menuBurger)
  // }

  // PagesLogin.map((page: any, index: any) => [HeaderNavArray.push({ link: page.link, indexlink: index, class: page.class ? `${page.class}` : "HeaderNav_Elem", authorization: userAuthorization, text: page.text })]);
  HeaderNavArrayUser.push(
    { link: "/Login", class: "HeaderNav_Login", text: "Вход" },
    {
        link: "/Registration",
        class: "HeaderNav_Registration",
        text: "Регистрация",
      },
  );
  HeaderNavArrayCenter.push(
    { link: "/Home", class: "HeaderNav_Elem", text: "Главная" },
    { link: "/Chat", class: "HeaderNav_Elem", text: "Чат" },
    { link: "/Search", class: "HeaderNav_Elem", text: "Поиск" },
  );
  return (
    <div className={`HeaderGeneral`}>
      <div className={`HeaderGeneral_Logo`}>
        {HeaderlogoArray.map((e, i) => (
          <Headerlogo
            link={e.link}
            indexlink={e.indexlink}
            class={e.class}
            img={e.img}
          />
        ))}
        <Link to={`Home`} className={`HeaderGeneral_Navs_Title_Style-BLue`}>
          Business
        </Link>
        <Link to={`Home`} className={`HeaderGeneral_Navs_Title_Style-Black`}>
          Roulette
        </Link>
      </div>
      <div className={`HeaderGeneral_Navs__Style-Center`}>
        {HeaderNavArrayCenter.map((e, i) => (
          <HeaderNav class={e.class} text={e.text} link={e.link} />
        ))}
      </div>
      <div className={`HeaderGeneral_Navs`}>
        {HeaderNavArrayUser.map((e, i) => (
          <HeaderNav class={e.class} text={e.text} link={e.link} />
        ))}
      </div>
      <HeaderMenu/>
    </div>
  );
};
