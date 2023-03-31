import { useStore } from "effector-react";
import { $userTopHomeJob, $userTopHomeName, $userTopHomeShortDescription, $userTopHomeStackes } from "../../../scommon/HomeHooks";

export const HomeTopInfo = () => {
  const userTopHomeName = useStore($userTopHomeName);
  const userTopHomeJob = useStore($userTopHomeJob);
  const userTopHomeStackes = useStore($userTopHomeStackes);
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

      <div className="HomeTopInfo_Stackes">
        {userTopHomeStackes.map((e, i) => (
          <img src={"../../public/Icons/Design/"+e+".svg"} alt="" />
        ))}
      </div>
    </div>
  );
};
