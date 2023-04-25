import { HeaderLogo } from "../atomes/HeaderLogo";
import { HeaderBar } from "../atomes/HeaderBar";
import { useLocation } from "react-router-dom";

export const HeaderGeneral = () => {
    const location = useLocation();
    return (
        <div className="HeaderGeneral">
            <HeaderLogo />
            {(location.pathname !== "/" && location.pathname !== "/Login" && location.pathname !== "/Forgot" && location.pathname !== "/Registration") && <HeaderBar />}
        </div>
    );
};
