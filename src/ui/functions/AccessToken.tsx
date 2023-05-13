import { createEvent, createStore } from "effector"
import { requestUser } from "../../App";
import { accessTokenName, axiosInstance } from "./AxiosInstance";

export const $accessToken = createStore("")
export const setAccessToken = createEvent<string>()
$accessToken.on(setAccessToken, (_, val) => val)

$accessToken.updates.watch((token) => {
    localStorage.setItem(accessTokenName, (token));
    axiosInstance.defaults.headers.authorization = `Bearer ${token}`
    if(token){
        requestUser()
    }
});

export const UserLogout = () => {
    setAccessToken("")
}