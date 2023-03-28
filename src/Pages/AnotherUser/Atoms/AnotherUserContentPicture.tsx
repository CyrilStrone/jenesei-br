import React from "react";
// import { Link } from "react-router-dom";
import AnotheUserPicture from "../../../Common/Assets/User/UserPicture.jpg"

export interface IAnotherUserContentPicture {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const AnotherUserContentPicture = (params: IAnotherUserContentPicture) => {

  return (
    <div className="AnotherUserContentPicture_Picture">
      <img src={AnotheUserPicture} alt="Картинка" />
    </div>
  );
};
