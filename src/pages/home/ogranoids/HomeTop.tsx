import "../styles/Home.css";
import { HomeMenu } from "../molecules/HomeMenu";
import { HomeTopTop } from "../molecules/HomeTopTop";
import { HomeTopPast } from "../molecules/HomeTopPast";
import { HomeTopPastMenu } from "../molecules/HomeTopPastMenu";
export const HomeTop = () => {
    return (
        <div className="Home" >
            <HomeMenu />
            <HomeTopTop />
            <HomeTopPastMenu />
            <HomeTopPast />
        </div>
    );
};
