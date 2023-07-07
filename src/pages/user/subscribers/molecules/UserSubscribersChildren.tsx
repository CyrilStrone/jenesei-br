import { useStore } from "effector-react";
import { $userValue } from "../../../../ui/functions/hooks";
import "../styles/UserSubscribersChildren.css";
import { ApiImage } from "../../../../ui/functions/axiosInstance";
import SendIcon from '../../../../assets/icon/subscription/send.svg'
import ChatIcon from '../../../../assets/icon/subscription/chats.svg'
import DeleteIcon from '../../../../assets/icon/subscription/delete.svg'
import { NavLink } from "react-router-dom";

export const UserSubscribersChildren = () => {
  const userValue = useStore($userValue);
  return (
    <div className="UserSubscribersChildren">
      {userValue.subscribers?.map((e: any, id: number) =>
        <div key={id} className="UserSubscribersChildren__Item Half__Block Block__Active">
          <div className="UserSubscribersChildren__Item__Header Half__Block__Header">
            <img src={ApiImage + e?.avatarPath} alt="Avatar" className="UserSubscribersChildren__Item__Header__Avatar" />
            <div className="UserSubscribersChildren__Item__Header__Name">
              {e.firstName + " " + e.lastName}
            </div>
            <div className="UserSubscribersChildren__Item__Header__IconBar">
              <div className="UserSubscribersChildren__Item__Header__IconBar__GenIcon">
                <img src={ChatIcon} alt="Chat" className="UserSubscribersChildren__Item__Header__IconBar__Icon" />
              </div>
              <NavLink to={`/user/login/${e.login}`} className="UserSubscribersChildren__Item__Header__IconBar__GenIcon">
                <img src={SendIcon} alt="Send" className="UserSubscribersChildren__Item__Header__IconBar__Icon" />
              </NavLink>
              <div className="UserSubscribersChildren__Item__Header__IconBar__GenIcon">
                <img src={DeleteIcon} alt="Delete" className="UserSubscribersChildren__Item__Header__IconBar__Icon" />
              </div>
            </div>
          </div>
          <div className="UserSubscribersChildren__Item__Info Half__Block__Footer">
            <div className="UserSubscribersChildren__Item__Info__Login">
              <div className="UserSubscribersChildren__Item__Info__Login__Title">
                login
              </div>
              <div className="UserSubscribersChildren__Item__Info__Login__Value">
                {e.login}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
