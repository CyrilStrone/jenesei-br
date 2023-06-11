import { Outlet } from "react-router-dom";
import { HomeMenu } from "../molecules/HomeMenu";
import '../styles/Home.css'
export const HomeMore = () => {
    return (
        <div className="Home">
            <HomeMenu />
            <Outlet />
        </div>
    );
};
