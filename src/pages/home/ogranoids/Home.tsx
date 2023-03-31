import "../styles/Home.css";
import { HomeMenu } from "../molecules/HomeMenu";
import { HomeTopTop } from "../molecules/HomeTopTop";
import { HomeTopPast } from "../molecules/HomeTopPast";
import { HomeTopPastMenu } from "../molecules/HomeTopPastMenu";
import { useLocation } from "react-router-dom";
import { HomeRecommendation } from "../molecules/HomeRecommendation";
import { HomeSubscription } from "../molecules/HomeSubscription";

export const Home = () => {
  const location = useLocation();
  return (
    <div className="Home" >
      <HomeMenu />
      {
        location.pathname == "/Home/Top" ?
          <>
            <HomeTopTop />
            <HomeTopPastMenu />
            <HomeTopPast />
          </> : location.pathname == "/Home/Recommendations" ?
            <>
              <HomeRecommendation />
            </> : location.pathname == "/Home/Subscriptions" ?
              <>
                <HomeSubscription />
              </> : null
      }
    </div>
  );
};
