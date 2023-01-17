import { useStore } from "effector-react";
import React from "react";
import { UserContentJobName } from "../Atoms/UserContentJobName";
import { UserContentPicture } from "../Atoms/UserContentPicture";
import { IUserContent, UserContent } from "../Molecules/UserContent";
import "../Styles/User.css";
import "../Styles/UserContent_LogoutUser.css";
import "../Styles/UserContent_JobNameUser.css";
import "../Styles/UserContent_PictureUser.css";
import "../Styles/UserContent_StackesUser.css";
import "../Styles/UserContent_ShortDescriptionUser.css";
import "../Styles/UserContent_FullDescriptionUser.css";
import "../Styles/UserContent_SocialNetworksUser.css";
import { UserContentStackes } from "../Atoms/UserContentStackes";
import { UserContentFullDescription } from "../Atoms/UserContentFullDescription";
// import { UserContentShortDescription } from "../Atoms/UserContentShortDescription";
import { UserContentSocialNetworks } from "../Atoms/UserContentSocialNetworks";
import { Link } from "react-router-dom";
import { $userAuthorization, setuserAuthorization } from "../../../Common/hooks";
UserContentSocialNetworks;
export const User = () => {
  const userAuthorization = useStore($userAuthorization);

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


  let handleClick = () => {
    if (userAuthorization) {
      setuserAuthorization(false);
    } else {
      setuserAuthorization(true);
    }
  };
  return (
    <div className={`User`}>
      <div className={`User_Contents`}>
        {userAuthorization
          ? UserContentArray.map((e, i) => (
            <UserContent class={e.class} Component={e.Component} />
          ))
          : null}
      </div>
      <div className={`UserContentLogout_Buttom`}>
        <button className={`UserContentLogout_Buttom-Block_2`} >
          Редактировать
        </button>
        <button className={`UserContentLogout_Buttom-Block`} onClick={handleClick}>
          {userAuthorization ? <Link to={"/Login"}>Выход</Link> : <a>Вход</a>}
        </button>
      </div >
    </div>
  );
};
