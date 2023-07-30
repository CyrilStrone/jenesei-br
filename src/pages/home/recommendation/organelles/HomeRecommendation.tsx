import { ThreeDot } from "../../../../ui/threeDot/organelles/ThreeDot";
import { HomeRecommendationUserCard } from "../molecules/HomeRecommendationUserCard";
import "../styles/HomeRecommendation.css";


export const HomeRecommendation = () => {
  return (
    <>
      <div className="HomeRecommendation" >
        <HomeRecommendationUserCard />
        <HomeRecommendationUserCard />
        <HomeRecommendationUserCard />
        <HomeRecommendationUserCard />
      </div>
      <ThreeDot  />
    </>
  );
};
