// import { useStore } from "effector-react";
// import { Link } from "react-router-dom";
// import {  $userAnotherSocialNetworks } from "../../../../src/Common/hooksAnotherUser";

export interface IAnotherUserContentSocialNetworks {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const AnotherUserContentSocialNetworks = (params: IAnotherUserContentSocialNetworks) => {
  // const UserAnotherSocialNetworks = useStore($userAnotherSocialNetworks);
  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>

  //   </Link>
  // };

  return (
    <>
    {/* {UserAnotherSocialNetworks.map((e,i)=><div key={i} className="AnotherUserContent_SocialNetworksAnotherUser_Network">{e}</div>)} */}

    
   </>
  );
};
