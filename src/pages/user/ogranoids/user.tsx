import "../styles/User.css";
import { UserGeneralInfo } from "../molecules/UserGeneralInfo";
import { UserAbout } from "../molecules/UserAbout";
import { UserExperience } from "../molecules/UserExperience";
import { UserStack } from "../molecules/UserStack";
import { useEffect, useState } from "react";
import { InProfile } from "../logics/InProfile";
import { UserEducation } from "../molecules/UserEducation";
import { UserSubscribers } from "../molecules/UserSubscribers";
import { UserSubscription } from "../molecules/UserSubscription";
import { accessTokenName } from "../../../ui/functions/AxiosInstance";
export const User = () => {
  const [value, setValue] = useState<any>();
  const requestProfile = async () => {
    setValue(await InProfile())
  }
  useEffect(() => {
      console.log("localStorage.getItem(accessTokenName)",localStorage.getItem(accessTokenName))
      requestProfile()
  }, [])

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
