import { useStore } from "effector-react";
import React from "react";
import { $AnotheUserFullDescription } from "../../../../src/Common/hooksAnotherUser";
// import { Link } from "react-router-dom";

export interface IAnotherUserContentFullDescription {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const AnotherUserContentFullDescription = (params: IAnotherUserContentFullDescription) => {
  const AnotherUserFullDescription = useStore($AnotheUserFullDescription);
  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>

  //   </Link>
  // };

  return (
    <>
      <div className="AnotherUserContent_FullDescriptionAnotherUser_Title">{AnotherUserFullDescription}</div>
    </>
  );
};
