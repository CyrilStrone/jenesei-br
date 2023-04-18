import { HeaderLogo } from "../atomes/HeaderLogo";
import { HeaderBar } from "../atomes/HeaderBar";

export const HeaderGeneral = () => {
    return (
        <div className="HeaderGeneral">
            <HeaderLogo/>
            <HeaderBar/>
        </div>
    );
};
