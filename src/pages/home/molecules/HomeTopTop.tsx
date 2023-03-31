import { HomeTopUserBestCard } from "../atomes/HomeTopUserBestCard";
import "../styles/HomeTopTop.css";


export const HomeTopTop = () => {
 

  return (
    <div className="HomeTopTop" >
      <HomeTopUserBestCard id={0}/>
      <HomeTopUserBestCard id={1}/>
    </div>
  );
};
