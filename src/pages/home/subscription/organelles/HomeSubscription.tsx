import { ThreeDot } from "../../../../ui/threeDot/organelles/ThreeDot";
import { HomeSubscriptionUserCard } from "../molecules/HomeSubscriptionUserCard";

import "../styles/HomeSubscription.css";


export const HomeSubscription = () => {

  return (
    <>
      <div className="HomeSubscription" >
        <HomeSubscriptionUserCard />
        <HomeSubscriptionUserCard />
        <HomeSubscriptionUserCard />
        <HomeSubscriptionUserCard />
      </div>
      <ThreeDot  />
    </>
  );
};
