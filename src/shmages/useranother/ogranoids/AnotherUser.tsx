import { useEffect, useState } from "react";
import { AnotherUserContentJobName } from "../atomes/AnotherUserContentJobName";
import { AnotherUserContentPicture } from "../atomes/AnotherUserContentPicture";
import { IAnotherUserContent, AnotherUserContent } from "../molecules/AnotherUserContent";
import "../styles/AnotherUser.css";
import "../styles/AnotherUserContent_LogoutUser.css";
import "../styles/AnotherUserContent_JobNameUser.css";
import "../styles/AnotherUserContent_PictureUser.css";
import "../styles/AnotherUserContent_StackesUser.css";
import "../styles/AnotherUserContent_ShortDescriptionUser.css";
import "../styles/AnotherUserContent_FullDescriptionUser.css";
import "../styles/AnotherUserContent_SocialNetworksUser.css";
import { AnotherUserContentStackes } from "../atomes/AnotherUserContentStackes";
import { AnotherUserContentFullDescription } from "../atomes/AnotherUserContentFullDescription";
import { AnotherUserContentSocialNetworks } from "../atomes/AnotherUserContentSocialNetworks";
import { useNavigate } from "react-router-dom";
import { useStore } from "effector-react";
import { $userAnotherName, setUserAnotherName } from "../../../scommon/UserAnotherHooks";

export interface IAnotherUser {
  id?: number;
}

export const AnotherUser = (params:IAnotherUser) => {
  let navigate = useNavigate();
  const UserAnotherName = useStore($userAnotherName);
  const [changeCheck, setChangeCheck] = useState(false);
  const [UserAnotherNameLocal, setUserAnotherNameLocal] = useState("");

  useEffect(()=>{
    setUserAnotherNameLocal(UserAnotherName)
    setUserAnotherName("")
  },[])

  useEffect(()=>{
    if(changeCheck){
      navigate(`/ChangeUser/${UserAnotherNameLocal}`);
    }
  },[changeCheck])
  const AnotherUserContentArray: IAnotherUserContent[] = [
    { class: "AnotherUserContent_PictureAnotherUser", Component: <AnotherUserContentPicture /> },
    { class: "AnotherUserContent_JobNameAnotherUser", Component: <AnotherUserContentJobName /> },
    { class: "AnotherUserContent_StackesAnotherUser", Component: <AnotherUserContentStackes setChangeCheck={setChangeCheck} changeCheck={changeCheck}/> },
    { class: "AnotherUserContent_FullDescriptionAnotherUser", Component: <AnotherUserContentFullDescription />},
    { class: "AnotherUserContent_SocialNetworksAnotherUser", Component: <AnotherUserContentSocialNetworks />,
    },
  ];


  return (
    <div className={`AnotherUser`}>
      <div className={`AnotherUser_Contents`}>
        {AnotherUserContentArray.map((e, i) => (
          <AnotherUserContent key={i} class={e.class} Component={e.Component} />
        ))
        }
      </div>
    </div>
  );
};
