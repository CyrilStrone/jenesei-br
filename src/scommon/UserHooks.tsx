import { createEvent, createStore } from "effector";
import { $accessToken } from "./AccessToken";
import { accessTokenName } from "./AxiosInstance";

export const $userAuthorization = createStore<boolean>(false)
export const setUserAuthorization = createEvent<boolean>()
$userAuthorization.on(setUserAuthorization, (_,val)=> val);


export const $userName= createStore<string>("Даня Булгаков")  
export const setUserName = createEvent<string>()
$userName.on(setUserName, (_,val)=> val);

$accessToken.updates.watch((token) => {
  if (!localStorage.getItem(accessTokenName)?.length) {
      setUserAuthorization(false)
    }else{
      setUserAuthorization(true)
    }
});