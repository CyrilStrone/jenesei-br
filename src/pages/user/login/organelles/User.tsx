import "../styles/UserLogin.css";
import { UserGeneralInfo } from "../molecules/UserGeneralInfo";
import { UserAbout } from "../molecules/UserAbout";
import { UserExperience } from "../molecules/UserExperience";
import { UserStack } from "../molecules/UserStack";
import { UserEducation } from "../molecules/UserEducation";
import { UserSubscribers } from "../molecules/UserSubscribers";
import { UserSubscription } from "../molecules/UserSubscription";
import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { InAnotherUser } from "../logics/InAnotherUser";
import { useParams } from "react-router-dom";
import { UserContacts } from "../molecules/UserContacts";
import { UserButton } from "../molecules/UserButton";
import { $userValue } from "../../../../ui/functions/hooks";
import { setCustomValidityShow } from "../../../../ui/customValidity/organelles/CustomValidity";

export const UserLogin = () => {
  const userValue = useStore($userValue);
  const [value, setValue] = useState<any>()
  const { login } = useParams();
  const requestInAnotherUser = async (login: string) => {
    try {
      const result = await InAnotherUser(login);
      if (result) {
        setValue(result)
      }
    } catch (error) {
      setCustomValidityShow("Не верный url")
    }
  }
  useEffect(() => {
    if (login) {
      requestInAnotherUser(login)
    }
    return (() => {
      setValue(null)
    })
  }, [login])
  return (
    <div className="UserLogin">
      {value && <div className="User__Content">
        <UserGeneralInfo avatarPath={value.avatarPath} login={value.login} firstName={value.firstName} lastName={value.lastName} />
        {(value?.aboutLong || value?.currentPosition) && <UserAbout value={value} />}
        {value.workExp && value?.workExp?.length !== 0 && <UserExperience workExp={value.workExp} />}
        {value.stack && value.stack?.length !== 0 && <UserStack stack={value.stack} />}
        {value.education && value.education?.length !== 0 && <UserEducation education={value.education} />}
        {value.contacts && value.contacts?.length !== 0 && <UserContacts contacts={value.contacts} />}
        {value.subscribers && value.subscribers?.length !== 0 && <UserSubscribers subscribers={value.subscribers} />}
        {value.subscription && value.subscription?.length !== 0 && <UserSubscription subscription={value.subscription} />}
        {userValue && userValue?.user?.id !== value?.id && <UserButton value={value} userValue={userValue} requestInAnotherUser={requestInAnotherUser} />}
      </div>}
    </div>
  );
};
