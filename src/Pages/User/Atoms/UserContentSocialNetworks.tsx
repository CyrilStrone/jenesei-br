import { useStore } from "effector-react";
import React from "react";
// import { Link } from "react-router-dom";
import {  $userSocialNetworks } from "../../../Common/hooks";

export interface IUserContentSocialNetworks {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const UserContentSocialNetworks = (params: IUserContentSocialNetworks) => {
  const userSocialNetworks = useStore($userSocialNetworks);
  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>

  //   </Link>
  // };

  return (
    <>
    {userSocialNetworks.map((e,i)=><div className="UserContent_SocialNetworksUser_Network">{e}</div>)}

    
   </>
  );
};
