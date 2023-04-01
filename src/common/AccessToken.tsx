import { createEvent, createStore } from "effector"
import { accessTokenName } from "./AxiosInstance";
import { setUserAuthorization } from "./UserHooks";


export const $accessToken = createStore("")
export const setAccessToken = createEvent<string>()
$accessToken.on(setAccessToken, (_, val) => val)

$accessToken.updates.watch((token) => {
    localStorage.setItem(accessTokenName, JSON.stringify(token));
});
  
export const UserLogout =()=>{
    localStorage.setItem(accessTokenName, "");
    setUserAuthorization(false)
}