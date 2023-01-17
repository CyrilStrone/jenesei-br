import { useStore } from "effector-react";
import React from "react";
// import { Link } from "react-router-dom";
import { $userJob, $userName, $userShortDescription } from "../../../Common/hooks";

export interface IUserContentJobName {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const UserContentJobName = (params: IUserContentJobName) => {
  const userName = useStore($userName);
  const userJob = useStore($userJob);
  const userShortDescription = useStore($userShortDescription);

  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>

  //   </Link>
  // };

  return (
    <><div className="UserContentJobName_NameAndJob">
      <div className="UserContentJobName_Name">{userName}</div>
      <div className="UserContentJobName_Job">{userJob}</div>
    </div>
    <div className="UserContentJobName_ShortDescription">{userShortDescription}
    </div>
    </>
  );
};
