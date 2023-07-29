import { createEvent, createStore } from "effector";
import {
  rememberRefreshName,
} from "./axiosInstance";
import { disconnectChat } from "./useSocketChat";
import { setUserValue } from "./hooks";

export const $rememberCheck = createStore<string>("");
export const setRememberCheck = createEvent<string>();
$rememberCheck.on(setRememberCheck, (_, val) => val);

export const $userLogin = createStore<string | null>("");
export const setUserLogin = createEvent<string | null>();
$userLogin.on(setUserLogin, (_, val) => val);

$rememberCheck.updates.watch((check) => {
  localStorage.setItem(rememberRefreshName, check);
});

export const UserLogout = () => {
  document.cookie = "name=<Refresh>; expires=-1";
  document.cookie = "name=<Session>; expires=-1";
  setUserLogin(null);
  setUserValue(null)
  setRememberCheck("false");
  disconnectChat()
};

$rememberCheck.updates.watch((check: any) => {
  console.log("WATCH. rememberCheck check:", check);
});
