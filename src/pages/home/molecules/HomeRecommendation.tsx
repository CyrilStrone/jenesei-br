import { useState } from "react";
import { HomeRecommendationUserCard } from "../atomes/HomeRecommendationUserCard";
import "../styles/HomeRecommendation.css";
import { ThreeDot } from "../../../ui/threedot/organoids/ThreeDot";


export const HomeRecommendation = () => {
  const [dotCheck, setDotCheck] = useState(false);


  return (
    <>
     <div className="HomeRecommendation" >
      <HomeRecommendationUserCard/>
      <HomeRecommendationUserCard/>
    </div>
    <ThreeDot dotCheck={dotCheck} setDotCheck={setDotCheck}/>
    </>
  );
};
