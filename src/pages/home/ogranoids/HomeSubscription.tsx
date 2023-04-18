import { useState } from "react";
import { HomeSubscriptionUserCard } from "../atomes/HomeSubscriptionUserCard";
import "../styles/HomeSubscription.css";
import { ThreeDot } from "../../../ui/threedot/organoids/ThreeDot";
import { HomeMenu } from "../molecules/HomeMenu";


export const HomeSubscription = () => {
  const [dotCheck, setDotCheck] = useState(false);


  return (
    <div className="Home">
      <HomeMenu />
      <div className="HomeSubscription" >
        <HomeSubscriptionUserCard />
        <HomeSubscriptionUserCard />
        <HomeSubscriptionUserCard />
        <HomeSubscriptionUserCard />
      </div>
      <ThreeDot dotCheck={dotCheck} setDotCheck={setDotCheck} />
    </div>
  );
};
