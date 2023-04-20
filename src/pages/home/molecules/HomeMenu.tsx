import "../styles/HomeMenu.css";

import { NavLink, useLocation } from "react-router-dom";
export const HomeMenu = () => {
  const location = useLocation();
  return (
    <div className="HomeMenu Home__Block__Active">
      <div className="HomeMenu__Navs">
        <NavLink
          to={"/Home/Top"}
          className={(navData) => navData.isActive ? "HomeMenu__Navs__Active" : ""}
        >
          Топ
        </NavLink>
        <NavLink
          to={"/Home/Recommendations"}
          className={(navData) => navData.isActive ? "HomeMenu__Navs__Active" : ""}
        >
          Рекомендации
        </NavLink>
        <NavLink
          to={"/Home/Subscriptions"}
          className={(navData) => navData.isActive ? "HomeMenu__Navs__Active" : ""}
        >
          Подписки
        </NavLink>
        <div className="HomeMenu__Line">
        </div>
      </div>
      <div className="HomeMenu__Title">
        {location.pathname === '/Home/Top' ?
          "Топ" : location.pathname === '/Home/Recommendations' ?
            "Рекомендации" : location.pathname === '/Home/Subscriptions' ?
              "Подписки" : null
        }
      </div>
    </div>
  );
};
