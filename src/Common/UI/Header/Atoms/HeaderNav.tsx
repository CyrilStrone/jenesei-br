// import { useStore } from "effector-react";
import React from "react";
import { Link } from "react-router-dom";
// import { $userTopHomeName } from "../../../../../src/Common/hooksHome";
// import { $userAuthorization, $userName } from "../../../../../src/Common/hooks";
// import Picture from"../../../Assets/Header/Picture.svg"
export interface IHeaderNav {
  id?: string;
  text?: string;
  value?: string;
  class?: string;
  authorization?: boolean;
  link?: string;
  indexlink?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const HeaderNav = (params: IHeaderNav) => {
  // const userAuthorization = useStore($userAuthorization);
  // const userName = useStore($userName);
  // var newuserName = userName.replace(/ /g, "-");
  return (
    <>
      
        <Link to={`${params.link}`} className={`${params.class} HeaderNav`}>
          {params.text}
        </Link>
       
    </>
  );
};
