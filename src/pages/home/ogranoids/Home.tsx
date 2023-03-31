import { useState } from "react";
// import { HomePast } from "../Molecules/HomePast";
import "../styles/Home.css";
import "../styles/HomeTop.css";
import "../styles/HomePast.css";
import "../styles/HomeMenu.css";
import "../styles/HomeListSkill.css";
import { HomeMenu } from "../molecules/HomeMenu";
import { HomeTop } from "../molecules/HomeTop";
import { HomeListSkill } from "../atomes/HomeListSkill";

export const Home = () => {
  const [disabled1, setDisabled1] = useState(false);
  const [disabled2, setDisabled2] = useState(false);

  //onClick={()=>disabled === true ? setDisabled(false) : null}
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
