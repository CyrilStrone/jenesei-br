import { HomeTopTop } from "../molecules/HomeTopTop";
import { HomeTopPast } from "../molecules/HomeTopPast";
import { HomeTopPastMenu } from "../molecules/HomeTopPastMenu";

export const HomeTop = () => {
    return (
        <>
            <HomeTopTop />
            <HomeTopPastMenu />
            <HomeTopPast />
        </>
    );
};
