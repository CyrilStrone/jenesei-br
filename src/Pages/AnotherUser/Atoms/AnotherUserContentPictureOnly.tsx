import { useStore } from "effector-react";
import React from "react";
import { $AnotheUserPicture } from "../../../../src/Common/hooksAnotherUser";

export interface IAnotherUserContentPictureOnly {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const AnotherUserContentPictureOnly = (params: IAnotherUserContentPictureOnly) => {
  const AnotheUserPicture = useStore($AnotheUserPicture);

  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>
  
  //   </Link>
  // };
 

  return (
    <div>
      <img src={AnotheUserPicture} alt="Картинка" />
    </div>
  );
};
