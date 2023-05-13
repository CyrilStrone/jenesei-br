import { createEvent, createStore } from "effector";

export const $userValue = createStore<any>(null)
export const setUserValue = createEvent<any>()
$userValue.on(setUserValue, (_, val) => val);

export const $userSetting = createStore<boolean>(false)
export const setUserSetting = createEvent<boolean>()
$userSetting.on(setUserSetting, (_, val) => val);
