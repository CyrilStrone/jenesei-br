import { useStore } from "effector-react";
import React from "react";
// import { Link } from "react-router-dom";
import { $AnotheUserStackes } from "../../../../src/Common/hooksAnotherUser";

export interface IAnotherUserContentStackes {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const AnotherUserContentStackes = (params: IAnotherUserContentStackes) => {
  const AnotheUserStackes = useStore($AnotheUserStackes);
  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>

  //   </Link>
  // };

  return (
    <>
      <div className="AnotherUserContent_StackesAnotherUser_Title">
        Стэк
      </div>
      <div className="AnotherUserContent_StackesAnotherUser_Stackes">
      {AnotheUserStackes.map((e, i) => (
        <div className="AnotherUserContent_StackesAnotherUser_Stacke">{e}</div>
      ))}
      </div>
    </>
  );
};
