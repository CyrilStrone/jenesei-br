import { useStore } from "effector-react";
import React from "react";
// import { Link } from "react-router-dom";
import { $AnotheUserJob, $AnotheUserName, $AnotheUserShortDescription } from "../../../../src/Common/hooksAnotherUser";

export interface IAnotherUserContentJobName {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const AnotherUserContentJobName = (params: IAnotherUserContentJobName) => {
  const AnotheUserName = useStore($AnotheUserName);
  const AnotheUserJob = useStore($AnotheUserJob);
  const AnotheUserShortDescription = useStore($AnotheUserShortDescription);

  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>

  //   </Link>
  // };

  return (
    <><div className="AnotherUserContentJobName_NameAndJob">
      <div className="AnotherUserContentJobName_Name">{AnotheUserName}</div>
      <div className="AnotherUserContentJobName_Job">{AnotheUserJob}</div>
    </div>
    <div className="AnotherUserContentJobName_ShortDescription">{AnotheUserShortDescription}
    </div>
    </>
  );
};
