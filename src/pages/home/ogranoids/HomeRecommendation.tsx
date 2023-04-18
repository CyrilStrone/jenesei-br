import "../styles/HomeRecommendation.css";
import { useState } from "react";
import { HomeRecommendationUserCard } from "../atomes/HomeRecommendationUserCard";
import { ThreeDot } from "../../../ui/threedot/organoids/ThreeDot";
import { HomeMenu } from "../molecules/HomeMenu";


export const HomeRecommendation = () => {
  const [dotCheck, setDotCheck] = useState(false);
  return (
    <div className="Home">
      <HomeMenu />
      <div className="HomeRecommendation" >
        <HomeRecommendationUserCard />
        <HomeRecommendationUserCard />
      </div>
      <ThreeDot dotCheck={dotCheck} setDotCheck={setDotCheck} />
    </div>
  );
};
