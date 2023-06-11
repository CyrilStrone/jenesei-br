import { ThreeDot } from "../../../../ui/threeDot/organelles/ThreeDot";
import { HomeRecommendationUserCard } from "../molecules/HomeRecommendationUserCard";
import "../styles/HomeRecommendation.css";
import { useState } from "react";


export const HomeRecommendation = () => {
  const [dotCheck, setDotCheck] = useState(false);
  return (
    <>
      <div className="HomeRecommendation" >
        <HomeRecommendationUserCard />
        <HomeRecommendationUserCard />
        <HomeRecommendationUserCard />
        <HomeRecommendationUserCard />
      </div>
      <ThreeDot dotCheck={dotCheck} setDotCheck={setDotCheck} />
    </>
  );
};
