import { createEvent, createStore } from "effector"
import { accessTokenName } from "./axiosInstance";
import { setuserAuthorization } from "./hooksUser";

export const $accessToken = createStore("")
export const setaccessToken = createEvent<string>()
$accessToken.on(setaccessToken, (_, val) => val)

$accessToken.updates.watch((token) => {
    localStorage.setItem(accessTokenName, token);
});
  
export const UserLogout =()=>{
    localStorage.setItem(accessTokenName, "");
    setuserAuthorization(false)
}