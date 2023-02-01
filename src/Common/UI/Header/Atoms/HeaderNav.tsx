// import { useStore } from "effector-react";
import React from "react";
import {Link} from "react-router-dom";
import {$userAuthorization} from "../../../hooksUser";
import {$checkLoginPage} from "../../../hooksHome";
import {useStore} from "effector-react";
// import { $userTopHomeName } from "../../../../../src/Common/hooksHome";
// import { $userAuthorization, $userName } from "../../../../../src/Common/hooks";
// import Picture from"../../../Assets/Header/Picture.svg"
export interface IHeaderNav {
    id?: string;
    text?: string;
    value?: string;
    class?: string;
    authorization?: boolean;
    userAuthorization?: boolean;
    checkLoginPage?:boolean;
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
