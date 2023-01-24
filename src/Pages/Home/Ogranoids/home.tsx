import React, { useState } from "react";
// import { HomePast } from "../Molecules/HomePast";
import { HomeTop } from "../Molecules/HomeTop";
import "../Styles/Home.css";
import "../Styles/HomeTop.css";
import "../Styles/HomePast.css";
import "../Styles/HomeMenu.css";
import "../Styles/HomeListSkill.css";

import { HomeMenu } from "../Molecules/homeMenu";
import { HomeListSkill } from "../Atomes/HomeListSkill";

export const Home = () => {
  const [disabled1, setDisabled1] = useState(false);
  const [disabled2, setDisabled2] = useState(false);

  //onClick={()=>disabled == true ? setDisabled(false) : null}
  return (
    <div className="Home" >
      <HomeMenu />
      <HomeTop />
      <HomeListSkill setDisabled1={setDisabled1}
        disabled1={disabled1} setDisabled2={setDisabled2}
        disabled2={disabled2}/>
      {/* <HomePast /> */}
    </div>
  );
};
