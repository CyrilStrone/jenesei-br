import { useStore } from "effector-react";
import { useNavigate } from "react-router-dom";
import { $userTopHomeId, $userTopHomeName } from "../../../scommon/HomeHooks";
import { setUserAnotherId } from "../../../scommon/UserAnotherHooks";
import { HomeTopInfo } from "../atomes/HomeTopInfo";
import { HomeTopPicture } from "../atomes/HomeTopPicture";
import { HomeTopVeryDay } from "../atomes/HomeTopVeryDay";
import { HomeTopVeryMounth } from "../atomes/HomeTopVeryMounth";

export const HomeTop = () => {
  const userTopHomeName = useStore($userTopHomeName);
  const userTopHomeId = useStore($userTopHomeId);

  let navigate = useNavigate();
  let handleClick = () => {
    setUserAnotherId(userTopHomeId);
    var newuserName = userTopHomeName.replace(/ /g, "-");
    navigate(`/AnotherUser/${newuserName}`);
  };

  return (
    <div className="HomeTop" onClick={() => handleClick()}>
      <div className="HomeTop_Day">
        <HomeTopVeryDay />
        <div className="HomeTop_Block">
          <HomeTopPicture />
          <HomeTopInfo />
        </div>
      </div>
      <div className="HomeTop_Mounth">
        <HomeTopVeryMounth />
        <div className="HomeTop_Block">
          <HomeTopPicture />
          <HomeTopInfo />
        </div>
      </div>
    </div>
  );
};
