import "../styles/HomeMenu.css";

import { NavLink } from "react-router-dom";
export const HomeMenu = (props: any) => {
  interface IHomeMenuArray {
    Title: string;
    Link: string;
  }

  let HomeMenuArray: IHomeMenuArray[] = [
    {
      Title: "Топ",
      Link: "/Home/Top",
    },
    {
      Title: "Рекомендации",
      Link: "/Home/Recommendations",
    },
    {
      Title: "Подписки",
      Link: "/Home/Subscriptions",
    }
  ];
  return (
    <div className="HomeMenu">
      {HomeMenuArray.map((e: IHomeMenuArray) => (
        <NavLink
          key={e.Link}
          to={e.Link}
          className={(navData) => navData.isActive ? "HomeMenu__Active" : "" }
        >
          {e.Title}
        </NavLink>
      ))}
    </div>
  );
};
