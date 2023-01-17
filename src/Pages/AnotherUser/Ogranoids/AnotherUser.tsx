import React, { useEffect } from "react";
import { AnotherUserContentJobName } from "../Atoms/AnotherUserContentJobName";
import { AnotherUserContentPicture } from "../Atoms/AnotherUserContentPicture";
import { IAnotherUserContent, AnotherUserContent } from "../Molecules/AnotherUserContent";
import "../Styles/AnotherUser.css";
import "../Styles/AnotherUserContent_LogoutUser.css";
import "../Styles/AnotherUserContent_JobNameUser.css";
import "../Styles/AnotherUserContent_PictureUser.css";
import "../Styles/AnotherUserContent_StackesUser.css";
import "../Styles/AnotherUserContent_ShortDescriptionUser.css";
import "../Styles/AnotherUserContent_FullDescriptionUser.css";
import "../Styles/AnotherUserContent_SocialNetworksUser.css";
import { AnotherUserContentStackes } from "../Atoms/AnotherUserContentStackes";
import { AnotherUserContentFullDescription } from "../Atoms/AnotherUserContentFullDescription";
import { AnotherUserContentSocialNetworks } from "../Atoms/AnotherUserContentSocialNetworks";
import { $AnotheUserId } from "../../../../src/Common/hooksAnotherUser";
import { useStore } from "effector-react";

export interface IAnotherUser {
  id?: number;
}

export const AnotherUser = (params:IAnotherUser) => {
  // setAnotheUserId(params.id)
  const AnotheUserId = useStore($AnotheUserId);

  useEffect(()=>{
    console.log(AnotheUserId)

  },[AnotheUserId])
  const AnotherUserContentArray: IAnotherUserContent[] = [
    { class: "AnotherUserContent_PictureAnotherUser", Component: <AnotherUserContentPicture /> },
    { class: "AnotherUserContent_JobNameAnotherUser", Component: <AnotherUserContentJobName /> },
    { class: "AnotherUserContent_StackesAnotherUser", Component: <AnotherUserContentStackes /> },
    {
      class: "AnotherUserContent_FullDescriptionAnotherUser",
      Component: <AnotherUserContentFullDescription />,
    },
    {
      class: "AnotherUserContent_SocialNetworksAnotherUser",
      Component: <AnotherUserContentSocialNetworks />,
    },
  ];


  return (
    <div className={`AnotherUser`}>
      <div className={`AnotherUser_Contents`}>
        {AnotherUserContentArray.map((e, i) => (
          <AnotherUserContent class={e.class} Component={e.Component} />
        ))
        }
      </div>
    </div>
  );
};
