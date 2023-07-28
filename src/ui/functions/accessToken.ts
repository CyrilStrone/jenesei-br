import { createEvent, createStore } from "effector";
import {
  RememberRefreshName,
  accessTokenName,
  axiosInstance,
} from "./axiosInstance";
import { requestUser } from "./requestUser";
import { disconnectChat } from "./useSocketChat";

export const $accessToken = createStore<string>("");
export const setAccessToken = createEvent<string>();
$accessToken.on(setAccessToken, (_, val) => val);

export const $rememberCheck = createStore<string>("");
export const setRememberCheck = createEvent<string>();
$rememberCheck.on(setRememberCheck, (_, val) => val);

export const $userLogin = createStore<string>("");
export const setUserLogin = createEvent<string>();
$userLogin.on(setUserLogin, (_, val) => val);

$accessToken.updates.watch((token) => {
  localStorage.setItem(accessTokenName, token);
  axiosInstance.defaults.headers.authorization = `Bearer ${token}`;
  if (token) {
    requestUser();
  }
});
$rememberCheck.updates.watch((check) => {
  localStorage.setItem(RememberRefreshName, check);
});

export const UserLogout = () => {
  document.cookie = "name=<Refresh>; expires=-1";
  document.cookie = "name=<Session>; expires=-1";
  setAccessToken("");
  setUserLogin("");
  setRememberCheck("false");
  disconnectChat()
};
$accessToken.updates.watch((value: any) => {
  console.log("WATCH. accessToken value:", value);
});
$rememberCheck.updates.watch((check: any) => {
  console.log("WATCH. rememberCheck check:", check);
});
