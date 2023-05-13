import "../styles/User.css";
import { UserGeneralInfo } from "../molecules/UserGeneralInfo";
import { UserAbout } from "../molecules/UserAbout";
import { UserExperience } from "../molecules/UserExperience";
import { UserStack } from "../molecules/UserStack";
import { UserEducation } from "../molecules/UserEducation";
import { UserSubscribers } from "../molecules/UserSubscribers";
import { UserSubscription } from "../molecules/UserSubscription";
import { useStore } from "effector-react";
import { $userValue } from "../../../ui/functions/Hooks";
import { useEffect } from "react";
export const User = () => {
  const userValue = useStore($userValue);

  return (
    <div className="User">
      {userValue && <div className="User__Content">
        <UserGeneralInfo avatarPath={userValue.avatarPath} login={userValue.user.login} firstName={userValue.user.firstName} lastName={userValue.user.lastName} />
        <UserAbout />
        <UserExperience />
        <UserStack />
        <UserEducation />
        <UserSubscribers />
        <UserSubscription />
      </div>}
    </div>
  );
};
