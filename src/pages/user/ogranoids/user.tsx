import "../styles/User.css";
import { UserGeneralInfo } from "../molecules/UserGeneralInfo";
import { UserAbout } from "../molecules/UserAbout";
import { UserExperience } from "../molecules/UserExperience";
import { UserSkills } from "../molecules/UserSkills";
import { useEffect, useState } from "react";
import { InProfile } from "../logics/InProfile";
import { $accessToken } from "../../../ui/functions/AccessToken";
import { useStore } from "effector-react";
export const User = () => {
  const [value, setValue] = useState<any>();
  const accessToken = useStore($accessToken);
  const requestProfile = async () => {
    setValue(await InProfile())
  }
  useEffect(() => {
    if(accessToken)
    requestProfile()
  }, [accessToken])
  useEffect(() => {
    console.log("value", value)
  }, [value])
  return (
    <div className="User">
      <div className="User__Content">
        <UserGeneralInfo />
        <UserAbout />
        <UserExperience />
        <UserSkills />
      </div>
    </div>
  );
};
