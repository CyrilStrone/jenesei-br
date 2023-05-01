import { NavLink, useLocation } from "react-router-dom";
import "../styles/UserMenu.css";
import "../styles/UserMore.css";
export const UserMenu = () => {
  const location = useLocation();
  return (
    <div className="UserMenu Translucent__Block Block__Active">
      <div className="UserMenu__Navs">
        <NavLink
          to={"/UserSetting"}
          className={(navData) => navData.isActive ? "UserMenu__Navs__Active" : ""}
        >
          Настройки
        </NavLink>
        <NavLink
          to={"/UserPublicationList"}
          className={(navData) => navData.isActive ? "UserMenu__Navs__Active" : ""}
        >
          Публикации
        </NavLink>
        <NavLink
          to={"/UserSubscription"}
          className={(navData) => navData.isActive ? "UserMenu__Navs__Active" : ""}
        >
          Подписки
        </NavLink>
        <NavLink
          to={"/UserSubscribers"}
          className={(navData) => navData.isActive ? "UserMenu__Navs__Active" : ""}
        >
          Подписчики
        </NavLink>
        <NavLink
          to={"/UserPublicationWrite"}
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



