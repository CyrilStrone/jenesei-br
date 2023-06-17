import { useEffect, useRef, useState } from "react";
import "../styles/UserMenu.css";
import "../styles/UserMore.css";
import { NavLink, useLocation } from "react-router-dom";
import useWindowDimensions from "../../functions/UseWindowDimensions";

export const UserMenu = () => {
  const [leftSlider, setLeftSlider] = useState<number | null>(null)
  const [widthSlider, setWidthSlider] = useState<number | null>(null)
  const location = useLocation();
  const parentRef = useRef(null);
  const { width, height } = useWindowDimensions()

  useEffect(() => {
    const parentElement = parentRef.current;
    if (parentElement) {
      //@ts-ignore
      const activeNavLink = parentElement.querySelector('.UserMenu__Navs__Active');
      if (activeNavLink) {
        //@ts-ignore
        const parentLeft = parentElement.getBoundingClientRect().left;
        const activeLeft = activeNavLink.getBoundingClientRect().left;
        setLeftSlider(activeLeft - parentLeft)
        setWidthSlider(activeNavLink.getBoundingClientRect().width + 2)
      }
    }
  }, [location, width, height]);
  return (
    <div className="UserMenu Translucent__Block Block__NonActive__NotShadow">
      <div className="UserMenu__Navs" ref={parentRef}>
        <NavLink
          to={"/user/setting"}
          className={(navData) => navData.isActive ? "UserMenu__Navs__Active" : ""}
        >
          Настройки
        </NavLink>
        <NavLink
          to={"/user/security"}
          className={(navData) => navData.isActive ? "UserMenu__Navs__Active" : ""}
        >
          Безопасность
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
          to={"/user/publication/list"}
          className={(navData) => navData.isActive ? "UserMenu__Navs__Active" : ""}
        >
          Публикации
        </NavLink>
        <NavLink
          to={"/user/publication/write"}
          className={(navData) => navData.isActive ? "UserMenu__Navs__Active" : ""}
        >
          Написать публикацию
        </NavLink>
      </div>
      <div className="UserMenu__Slider" style={{
        left: `${leftSlider}px`,
        width: `${widthSlider}px`
      }} />
    </div>
  );
};



