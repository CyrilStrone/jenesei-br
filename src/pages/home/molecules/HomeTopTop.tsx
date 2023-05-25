import "../styles/HomeTopTop.css";
import { HomeTopUserBestCard } from "../atoms/HomeTopUserBestCard";

export const HomeTopTop = () => {


  return (
    <div className="HomeTopTop" >
      <HomeTopUserBestCard id={0} />
      <HomeTopUserBestCard id={1} />
    </div>
  );
};
