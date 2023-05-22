import { HeaderLogo } from "../atoms/HeaderLogo";
import { HeaderBar } from "../atoms/HeaderBar";
import { $accessToken } from "../../functions/AccessToken";
import { useStore } from "effector-react";

export const HeaderGeneral = () => {
    const accessToken = useStore($accessToken);
    return (
        <div className="HeaderGeneral">
            <HeaderLogo />
            {accessToken && <HeaderBar />}
        </div>
    );
};
