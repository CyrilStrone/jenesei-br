import { ThreeDot } from "../../../../ui/threeDot/organelles/ThreeDot";
import { HomeSubscriptionUserCard } from "../molecules/HomeSubscriptionUserCard";
import "../styles/HomeSubscription.css";
import { useState } from "react";


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
