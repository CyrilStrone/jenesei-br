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
import { useEffect, useState } from "react";
import { InAnotherUser } from "../logics/InAnotherUser";
import { useLocation, useNavigate } from "react-router-dom";
import { setCustomValidityShow } from "../../../ui/customValidity/organelles/CustomValidity";
import { accessTokenNameLogin } from "../../../ui/functions/AxiosInstance";
import { $accessToken } from "../../../ui/functions/AccessToken";
import { UserContacts } from "../molecules/UserContacts";
import { UserButton } from "../molecules/UserButton";



export const User = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const userValue = useStore($userValue);
  const accessToken = useStore($accessToken);
  const [login, setLogin] = useState<any>()
  const [value, setValue] = useState<any>()

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
  }, [login])

  useEffect(() => {
    if (location.pathname.split("/:")[1]) {
      setLogin(location.pathname.split("/:")[1])
    } else {
      const localLogin = localStorage.getItem(accessTokenNameLogin) || "";
      if (localLogin) {
        navigate(`/:${localLogin}`)
        setLogin(localLogin)
      }
    }
  }, [location])

  useEffect(() => {
    if (userValue && !location.pathname.split("/:")[1]) {
      navigate(`/:${userValue.user.login}`)
      setLogin(userValue.user.login)
    }
  }, [userValue])
  
  useEffect(() => {
    return (() => {
      setValue(null)
      setLogin(null)
    })
  }, [])
  return (
    <div className="User">
      {value && <div className="User__Content">
        <UserGeneralInfo avatarPath={value.avatarPath} login={value.user.login} firstName={value.user.firstName} lastName={value.user.lastName} />
        {(value?.user?.aboutLong || value?.user?.currentPosition) && <UserAbout value={value} />}
        {value?.workExp.length !== 0 && <UserExperience workExp={value.workExp} />}
        {value?.stack?.length !== 0 && <UserStack stack={value.stack} />}
        {value?.education?.length !== 0 && <UserEducation education={value.education} />}
        {value?.contacts?.length !== 0 && <UserContacts contacts={value.contacts} />}
        {value?.subscribers?.length !== 0 && <UserSubscribers subscribers={value.subscribers} />}
        {value?.subscription?.length !== 0 && <UserSubscription subscription={value.subscription} />}
        {accessToken && userValue?.user?.id !== value?.user?.id && <UserButton value={value} userValue={userValue} requestInAnotherUser={requestInAnotherUser} />}
      </div>}
    </div>
  );
};
