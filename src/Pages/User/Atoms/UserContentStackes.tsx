import { useStore } from "effector-react";
import React from "react";
// import { Link } from "react-router-dom";
import { $userStackes } from "../../../Common/hooks";

export interface IUserContentStackes {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const UserContentStackes = (params: IUserContentStackes) => {
  const userStackes = useStore($userStackes);
  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>

  //   </Link>
  // };

  return (
    <>
      <div className="UserContent_StackesUser_Title">
        Стэк
      </div>
      <div className="UserContent_StackesUser_Stackes">
      {userStackes.map((e, i) => (
        <div className="UserContent_StackesUser_Stacke">{e}</div>
      ))}
      </div>
    </>
  );
};
