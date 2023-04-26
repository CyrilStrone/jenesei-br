import { useStore } from "effector-react";
import "../styles/User.css";
import { useNavigate } from "react-router-dom";
import { $userAuthorization } from "../../../ui/functions/Hooks";
import { UserLogout } from "../../../ui/functions/AccessToken";
import { UserGeneralInfo } from "../molecules/UserGeneralInfo";
import { UserAbout } from "../molecules/UserAbout";
import { UserExperience } from "../molecules/UserExperience";
import { UserSkills } from "../molecules/UserSkills";
export const User = () => {
  const userAuthorization = useStore($userAuthorization);

  return (
    <div className="User">
      <div className="User__Content">
        <UserGeneralInfo />
        <UserAbout/>
        <UserExperience/>
        <UserSkills/>
      </div>
    </div>
  );
};
