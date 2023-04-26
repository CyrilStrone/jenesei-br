import { createEvent, createStore } from "effector"
import { accessTokenName } from "./AxiosInstance";

export const $accessToken = createStore("")
export const setAccessToken = createEvent<string>()
$accessToken.on(setAccessToken, (_, val) => val)

$accessToken.updates.watch((token) => {
    localStorage.setItem(accessTokenName, (token));
});
  
export const UserLogout =()=>{
    setAccessToken("")
}