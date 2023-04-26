import "../styles/User.css";
import { UserGeneralInfo } from "../molecules/UserGeneralInfo";
import { UserAbout } from "../molecules/UserAbout";
import { UserExperience } from "../molecules/UserExperience";
import { UserStack } from "../molecules/UserStack";
import { useEffect, useState } from "react";
import { InProfile } from "../logics/InProfile";
import { $accessToken } from "../../../ui/functions/AccessToken";
import { useStore } from "effector-react";
import { UserEducation } from "../molecules/UserEducation";
import { UserSubscribers } from "../molecules/UserSubscribers";
import { UserSubscription } from "../molecules/UserSubscription";
export const User = () => {
  const [value, setValue] = useState<any>();
  const accessToken = useStore($accessToken);
  const requestProfile = async () => {
    setValue(await InProfile())
  }
  useEffect(() => {
    if (accessToken)
      requestProfile()
  }, [accessToken])

  useEffect(() => {
    console.log("value", value)
  }, [value])

  return (
    <div className="User">
      {value && <div className="User__Content">
        <UserGeneralInfo avatarPath={value.avatarPath} login={value.user.login} firstName={value.user.firstName} lastName={value.user.lastName} />
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
