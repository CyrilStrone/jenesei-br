import { useStore } from "effector-react";
import React from "react";
// import { Link } from "react-router-dom";
import { $userFullDescription } from "../../../Common/hooks";

export interface IUserContentFullDescription {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const UserContentFullDescription = (params: IUserContentFullDescription) => {
  const userFullDescription = useStore($userFullDescription);
  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>

  //   </Link>
  // };

  return (
    <>
      <div className="UserContent_FullDescriptionUser_Title">{userFullDescription}</div>
    </>
  );
};
