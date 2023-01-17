import { useStore } from "effector-react";
import React from "react";
import { $userPicture } from "../../../Common/hooks";

export interface IUserContentPictureOnly {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const UserContentPictureOnly = (params: IUserContentPictureOnly) => {
  const userPicture = useStore($userPicture);

  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>
  
  //   </Link>
  // };
 

  return (
    <div>
      <img src={userPicture} alt="Картинка" />
    </div>
  );
};
