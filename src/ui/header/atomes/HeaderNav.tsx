import { Link } from "react-router-dom";
import { useStore } from "effector-react";
import { $userAuthorization } from "../../../common/UserHooks";
import { $checkLoginPage } from "../../../common/HomeHooks";
export interface IHeaderNav {
    id?: string;
    text?: string;
    value?: string;
    class?: string;
    authorization?: boolean;
    userAuthorization?: boolean;
    checkLoginPage?: boolean;
    link?: string;
    indexlink?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const HeaderNav = (params: IHeaderNav) => {
    const userAuthorization = useStore($userAuthorization);
    const checkLoginPage = useStore($checkLoginPage);

    return (
        <>
            {!params.authorization ?
                <Link to={`${params.link}`} className={`${params.class} HeaderNav`}>
                    {params.text}
                </Link> :
                params.userAuthorization ?
                    params.userAuthorization == userAuthorization ?
                        <Link to={`${params.link}`} className={`${params.class} HeaderNav`}>
                            {params.text}
                        </Link>
                        : null
                    :
                    userAuthorization == true ?
                        null
                        : checkLoginPage == params.checkLoginPage ?
                            <Link to={`${params.link}`} className={`${params.class} HeaderNav`}>
                                {params.text}
                            </Link> : null
            }
        </>
    );
};
