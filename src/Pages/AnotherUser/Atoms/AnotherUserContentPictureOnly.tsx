import React from "react";
import AnotheUserPicture from "../../../Common/Assets/User/UserPicture.jpg"

export interface IAnotherUserContentPictureOnly {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const AnotherUserContentPictureOnly = (params: IAnotherUserContentPictureOnly) => {
  return (
    <div>
      <img src={AnotheUserPicture} alt="Картинка" />
    </div>
  );
};
