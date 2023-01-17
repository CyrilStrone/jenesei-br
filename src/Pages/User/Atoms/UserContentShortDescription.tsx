import { useStore } from "effector-react";
import React from "react";
// import { Link } from "react-router-dom";
import {  $userShortDescription } from "../../../Common/hooks";

export interface IUserContentShortDescription {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const UserContentShortDescription = (params: IUserContentShortDescription) => {
  const userShortDescription = useStore($userShortDescription);
  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>

  //   </Link>
  // };

  return (
    <>
      <div className="UserContent_ShortDescriptionUser_Title">{userShortDescription}</div>
    </>
  );
};
