import "../styles/UserMenu.css";
import "../styles/UserMore.css";
import { NavLink, useLocation } from "react-router-dom";

export const UserMenu = () => {
  const location = useLocation();
  return (
    <div className="UserMenu Translucent__Block Block__NonActive__NotShadow">
      <div className="UserMenu__Navs">
        <NavLink
          to={"/user/setting"}
          className={(navData) => navData.isActive ? "UserMenu__Navs__Active" : ""}
        >
          Настройки
        </NavLink>
        <NavLink
          to={"/user/publication/list"}
          className={(navData) => navData.isActive ? "UserMenu__Navs__Active" : ""}
        >
          Публикации
        </NavLink>
        <NavLink
          to={"/user/subscription"}
          className={(navData) => navData.isActive ? "UserMenu__Navs__Active" : ""}
        >
          Подписки
        </NavLink>
        <NavLink
          to={"/user/subscribers"}
          className={(navData) => navData.isActive ? "UserMenu__Navs__Active" : ""}
        >
          Подписчики
        </NavLink>
        <NavLink
          to={"/user/publication/write"}
          className={(navData) => navData.isActive ? "UserMenu__Navs__Active" : ""}
        >
          Написать публикацию
        </NavLink>
        <div className="UserMenu__Line">
        </div>
      </div>
      <div className="UserMenu__Title">
        {location.pathname === '/UserSetting' ?
          "Настройки" : location.pathname === '/UserPublicationList' ?
            "Публикации" : location.pathname === '/UserSubscription' ?
              "Подписки" : location.pathname === '/UserSubscribers' ?
                "Подписчики" : location.pathname === '/UserPublicationWrite' ?
                  "Написать публикацию" : null
        }
      </div>
    </div>
  );
};



