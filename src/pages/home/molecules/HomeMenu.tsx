import "../styles/HomeMenu.css";

import { NavLink, useLocation } from "react-router-dom";
export const HomeMenu = () => {
  const location = useLocation();
  return (
    <div className="HomeMenu Translucent__Block Block__Active">
      <div className="HomeMenu__Navs">
        <NavLink
          to={"/home/top"}
          className={(navData) => navData.isActive ? "HomeMenu__Navs__Active" : ""}
        >
          Топ
        </NavLink>
        <NavLink
          to={"/home/recommendations"}
          className={(navData) => navData.isActive ? "HomeMenu__Navs__Active" : ""}
        >
          Рекомендации
        </NavLink>
        <NavLink
          to={"/home/subscription"}
          className={(navData) => navData.isActive ? "HomeMenu__Navs__Active" : ""}
        >
          Подписки
        </NavLink>
        <div className="HomeMenu__Line">
        </div>
      </div>
      <div className="HomeMenu__Title">
        {location.pathname === '/home/top' ?
          "Топ" : location.pathname === '/home/recommendations' ?
            "Рекомендации" : location.pathname === '/home/subscription' ?
              "Подписки" : null
        }
      </div>
    </div>
  );
};
