import { useEffect, useRef, useState } from "react";
import "../styles/HomeMenu.css";
import { NavLink, useLocation } from "react-router-dom";
import useWindowDimensions from "../../../../ui/functions/UseWindowDimensions";

export const HomeMenu = () => {
  const [leftSlider, setLeftSlider] = useState<number | null>(null)
  const [widthSlider, setWidthSlider] = useState<number | null>(null)
  const location = useLocation();
  const parentRef = useRef(null);
  const { width, height } = useWindowDimensions()

  useEffect(() => {
    const parentElement = parentRef.current;
    if (parentElement) {
      //@ts-ignore
      const activeNavLink = parentElement.querySelector('.HomeMenu__Navs__Active');
      if (activeNavLink) {
        //@ts-ignore
        const parentLeft = parentElement.getBoundingClientRect().left;
        const activeLeft = activeNavLink.getBoundingClientRect().left;
        console.log(activeNavLink,activeLeft,parentLeft)
        setLeftSlider(activeLeft - parentLeft)
        setWidthSlider(activeNavLink.getBoundingClientRect().width)
      }
    }
  }, [location, width, height]);
  return (
    <div className="HomeMenu Translucent__Block Block__NonActive">
      <div className="HomeMenu__Navs" ref={parentRef}>
        <NavLink
          to={"top"}
          className={(navData) => navData.isActive ? "HomeMenu__Navs__Active" : ""}
        >
          Топ
        </NavLink>
        <NavLink
          to={"recommendations"}
          className={(navData) => navData.isActive ? "HomeMenu__Navs__Active" : ""}
        >
          Рекомендации
        </NavLink>
        <NavLink
          to={"subscription"}
          className={(navData) => navData.isActive ? "HomeMenu__Navs__Active" : ""}
        >
          Подписки
        </NavLink>
        <div className="HomeMenu__Slider" style={{
          left: `${leftSlider}px`,
          width: `${widthSlider}px`
        }} />
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
