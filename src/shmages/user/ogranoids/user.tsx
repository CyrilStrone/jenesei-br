import { useStore } from "effector-react";
import { useEffect } from "react";
import "../styles/User.css";
import "../styles/UserContent_LogoutUser.css";
import "../styles/UserContent_JobNameUser.css";
import "../styles/UserContent_PictureUser.css";
import "../styles/UserContent_StackesUser.css";
import "../styles/UserContent_ShortDescriptionUser.css";
import "../styles/UserContent_FullDescriptionUser.css";
import "../styles/UserContent_SocialNetworksUser.css";
import { useNavigate } from "react-router-dom";
import { $userAuthorization } from "../../../scommon/UserHooks";
import { UserLogout } from "../../../scommon/AccessToken";
import { IUserContent, UserContent } from "../molecules/UserContent";
import { UserContentPicture } from "../atomes/UserContentPicture";
import { UserContentJobName } from "../atomes/UserContentJobName";
import { UserContentStackes } from "../atomes/UserContentStackes";
import { UserContentFullDescription } from "../atomes/UserContentFullDescription";
import { UserContentSocialNetworks } from "../atomes/UserContentSocialNetworks";
export const User = () => {
  const userAuthorization = useStore($userAuthorization);
  const navigate = useNavigate();
  const UserContentArray: IUserContent[] = [
    { class: "UserContent_PictureUser", Component: <UserContentPicture /> },
    { class: "UserContent_JobNameUser", Component: <UserContentJobName /> },
    { class: "UserContent_StackesUser", Component: <UserContentStackes /> },
    {
      class: "UserContent_FullDescriptionUser",
      Component: <UserContentFullDescription />,
    },
    {
      class: "UserContent_SocialNetworksUser",
      Component: <UserContentSocialNetworks />,
    },
  ];
  useEffect(()=>{
    if(!userAuthorization){
      navigate("/Login")
    }
  },[userAuthorization])
  return (
    <div className={`User`}>
      <div className={`User_Contents`}>
        {userAuthorization
          ? UserContentArray.map((e, i) => (
            <UserContent key={i} class={e.class} Component={e.Component} />
          ))
          : null}
      </div>
      <div className={`UserContentLogout_Buttom`}>
        <button className={`UserContentLogout_Buttom-Block_2`} >
          Редактировать
        </button>
        <button className={`UserContentLogout_Buttom-Block`}>
          {userAuthorization ? <div onClick={UserLogout}>Выход</div> : <a>Вход</a>}
        </button>
      </div >
    </div>
  );
};
