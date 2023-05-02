import { createEvent, createStore } from "effector"
import { accessTokenName, axiosInstance } from "./AxiosInstance";

export const $accessToken = createStore("")
export const setAccessToken = createEvent<string>()
$accessToken.on(setAccessToken, (_, val) => val)

$accessToken.updates.watch((token) => {
    axiosInstance.defaults.headers.authorization = `Bearer ${token}`
    localStorage.setItem(accessTokenName, (token));
});

export const UserLogout = () => {
    setAccessToken("")
}