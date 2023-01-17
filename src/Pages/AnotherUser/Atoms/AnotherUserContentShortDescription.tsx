import { useStore } from "effector-react";
import React from "react";
// import { Link } from "react-router-dom";
import {  $AnotheUserShortDescription } from "../../../../src/Common/hooksAnotherUser";

export interface IAnotherUserContentShortDescription {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const AnotherUserContentShortDescription = (params: IAnotherUserContentShortDescription) => {
  const AnotheUserShortDescription = useStore($AnotheUserShortDescription);
  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>

  //   </Link>
  // };

  return (
    <>
      <div className="AnotherUserContent_ShortDescriptionAnotherUser_Title">{AnotheUserShortDescription}</div>
    </>
  );
};
