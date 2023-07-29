import { useStore } from "effector-react";
import { HeaderLogo } from "../atoms/HeaderLogo";
import { HeaderBar } from "../atoms/HeaderBar";
import { $userValue } from "../../functions/hooks";

export const HeaderGeneral = () => {
    const userValue = useStore($userValue);
    return (
        <div className="HeaderGeneral">
            <HeaderLogo />
            {userValue && <HeaderBar />}
        </div>
    );
};
