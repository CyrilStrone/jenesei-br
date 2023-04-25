import { useStore } from "effector-react";
import "../styles/User.css";
import { useNavigate } from "react-router-dom";
import { $userAuthorization } from "../../../ui/functions/Hooks";
import { UserLogout } from "../../../ui/functions/AccessToken";
import { UserGeneralInfo } from "../molecules/UserGeneralInfo";
export const User = () => {
  const userAuthorization = useStore($userAuthorization);

  return (
    <div className="User">
      <div className="User__Content">
        <UserGeneralInfo />
      </div>
    </div>
  );
};
