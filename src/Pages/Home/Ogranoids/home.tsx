import React from "react";
import { HomePast } from "../Molecules/homePast";
import { HomeTop } from "../Molecules/homeTop";
import "../Styles/Home.css";
import "../Styles/HomeTop.css";
import "../Styles/HomePast.css";

export const Home = () => {
  // require('./index.styl')
//   const monthNames = ["ЯНВАРЯ", "ФЕВРАЛЯ", "МАРТА", "АПРЕЛЯ", "МАЯ", "ИЮНЯ",
//   "ИЮЛЯ", "АВГУСТА", "СЕНЯТБРЯ", "ОКТЯБРЯ", "НОЯБРЯ", "ДЕКАБРЯ"
// ];

  // let DATE = (new Date).getDate() + (" " + monthNames[(new Date()).getMonth()]);
  return (
    <div className="Home">
      <div className="Home_VeryPeople">Топ пользователей</div>
      <HomeTop/>
      <div className="Home_VeryPeople_Past">Рекомендации</div>
      <HomePast/>
    </div>
  );
};
