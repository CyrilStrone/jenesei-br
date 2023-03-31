import { useState } from "react";
import { HomeSubscriptionUserCard } from "../atomes/HomeSubscriptionUserCard";
import "../styles/HomeSubscription.css";
import { ThreeDot } from "../../../ui/threedot/organoids/ThreeDot";


export const HomeSubscription = () => {
  const [dotCheck, setDotCheck] = useState(false);


  return (
    <>
    <div className="HomeSubscription" >
      <HomeSubscriptionUserCard />
      <HomeSubscriptionUserCard />
      <HomeSubscriptionUserCard />
      <HomeSubscriptionUserCard />
    </div>
      <ThreeDot dotCheck={dotCheck} setDotCheck={setDotCheck} />
    </>
  );
};
