import { useStore } from "effector-react";
import React from "react";
import { $userTopHomeJob } from "../../../Common/hooksHome";
import { $userTopHomeSocialNetworks } from "../../../Common/hooksHome";
import { $userTopHomeShortDescription } from "../../../Common/hooksHome";
import { $userTopHomeName } from "../../../Common/hooksHome";

export const HomeTopInfo = () => {
  const userTopHomeName = useStore($userTopHomeName);
  const userTopHomeJob = useStore($userTopHomeJob);
  const userTopHomeSocialNetworks = useStore($userTopHomeSocialNetworks);
  const userTopHomeShortDescription = useStore($userTopHomeShortDescription);

  return (
    <div className="HomeTopInfo">
      <div className="HomeTopInfo_JobAndName">
        <div className="HomeTopInfo_JobAndName_Name">
          {userTopHomeName}
        </div>
        <div className="HomeTopInfo_JobAndName_Job">
          {userTopHomeJob}
        </div>

      </div>
      <div className="HomeTopInfo_ShortDescription">
        {userTopHomeShortDescription}
      </div>

      <div className="HomeTopInfo_SocialNetworks">
        {userTopHomeSocialNetworks.map((e, i) => (
          <div className="HomeTopInfo_SocialNetworks_Network">{e}</div>
        ))}
      </div>
    </div>
  );
};
