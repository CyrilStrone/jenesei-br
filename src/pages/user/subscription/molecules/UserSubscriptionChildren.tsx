import { useStore } from "effector-react";
import { $userValue } from "../../../../ui/functions/hooks";
import "../styles/UserSubscriptionChildren.css";
import { ApiImage } from "../../../../ui/functions/axiosInstance";
import SendIcon from '../../../../assets/icon/subscription/send.svg'
import ChatIcon from '../../../../assets/icon/subscription/chats.svg'
import DeleteIcon from '../../../../assets/icon/subscription/delete.svg'
import { NavLink } from "react-router-dom";

export const UserSubscriptionChildren = () => {
  const userValue = useStore($userValue);
  return (
    <div className="UserSubscriptionChildren">
      {userValue?.subscription?.map((e: any, id: number) =>
        <div key={id} className="UserSubscriptionChildren__Item Half__Block Block__Active">
          <div className="UserSubscriptionChildren__Item__Header Half__Block__Header">
            <img src={ApiImage + e?.avatarPath} alt="Avatar" className="UserSubscriptionChildren__Item__Header__Avatar" />
            <div className="UserSubscriptionChildren__Item__Header__Name">
              {e.firstName + " " + e.lastName}
            </div>
            <div className="UserSubscriptionChildren__Item__Header__IconBar">
              <div className="UserSubscriptionChildren__Item__Header__IconBar__GenIcon">
                <img src={ChatIcon} alt="Chat" className="UserSubscriptionChildren__Item__Header__IconBar__Icon" />
              </div>
              <NavLink to={`/user/login/${e.login}`} className="UserSubscriptionChildren__Item__Header__IconBar__GenIcon">
                <img src={SendIcon} alt="Send" className="UserSubscriptionChildren__Item__Header__IconBar__Icon" />
              </NavLink>
              <div className="UserSubscriptionChildren__Item__Header__IconBar__GenIcon">
                <img src={DeleteIcon} alt="Delete" className="UserSubscriptionChildren__Item__Header__IconBar__Icon" />
              </div>
            </div>
          </div>
          <div className="UserSubscriptionChildren__Item__Info Half__Block__Footer">
            <div className="UserSubscriptionChildren__Item__Info__Login">
              <div className="UserSubscriptionChildren__Item__Info__Login__Title">
                login
              </div>
              <div className="UserSubscriptionChildren__Item__Info__Login__Value">
                {e.login}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
