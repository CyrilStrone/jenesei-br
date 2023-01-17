import { useStore } from "effector-react";
import React from "react";
import { $userTopHomePicture } from "../../../Common/hooksHome";

export const HomeTopPicture = () => {
  // require('./index.styl')
  const userTopHomePicture = useStore($userTopHomePicture);
  return (
    <div className="HomeTopPicture">
          <img src={userTopHomePicture} alt="Картинка" />

    </div>
  );
};
