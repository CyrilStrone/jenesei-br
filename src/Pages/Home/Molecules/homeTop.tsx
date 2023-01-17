import { useStore } from "effector-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { $userTopHomeId, $userTopHomeName } from "../../../../src/Common/hooksHome";
import { setAnotheUserId } from "../../../../src/Common/hooksAnotherUser";
import { HomeTopInfo } from "../Atomes/HomeTopInfo";
import { HomeTopPicture } from "../Atomes/HomeTopPicture";

export const HomeTop = () => {
  const userTopHomeName = useStore($userTopHomeName);
  const userTopHomeId = useStore($userTopHomeId);

  let navigate = useNavigate();
  let handleClick = () => {
    setAnotheUserId(userTopHomeId);
    var newuserName = userTopHomeName.replace(/ /g, "-");
    navigate(`/AnotherUser/${newuserName}`);
  };

  return (
    <div className="HomeTop" onClick={() => handleClick()}>
      <div className="HomeTop_Top">
        <HomeTopPicture />
        <HomeTopInfo />
      </div>
    </div>
  );
};
