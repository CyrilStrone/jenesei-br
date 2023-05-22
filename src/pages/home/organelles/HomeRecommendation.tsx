import "../styles/HomeRecommendation.css";
import { useState } from "react";
import { ThreeDot } from "../../../ui/threeDot/organelles/ThreeDot";
import { HomeMenu } from "../molecules/HomeMenu";
import { HomeRecommendationUserCard } from "../atoms/HomeRecommendationUserCard";


export const HomeRecommendation = () => {
  const [dotCheck, setDotCheck] = useState(false);
  return (
    <div className="Home">
      <HomeMenu />
      <div className="HomeRecommendation" >
        <HomeRecommendationUserCard />
        <HomeRecommendationUserCard />
        <HomeRecommendationUserCard />
        <HomeRecommendationUserCard />
      </div>
      <ThreeDot dotCheck={dotCheck} setDotCheck={setDotCheck} />
    </div>
  );
};
