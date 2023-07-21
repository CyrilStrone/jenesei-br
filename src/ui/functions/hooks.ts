import { createEvent, createStore } from "effector";

export const $userValue = createStore<any>(null);
export const setUserValue = createEvent<any>();
$userValue.on(setUserValue, (_, val) => val);

export const $userSetting = createStore<boolean>(false);
export const setUserSetting = createEvent<boolean>();
$userSetting.on(setUserSetting, (_, val) => val);

export const $checkPublicationWriteOnDrag = createStore<boolean>(false);
export const setCheckPublicationWriteOnDrag = createEvent<boolean>();
$checkPublicationWriteOnDrag.on(setCheckPublicationWriteOnDrag, (_, val) => val);

$userValue.updates.watch((value: any) => {
  console.log("WATCH. userValue value:", value);
});

$userSetting.updates.watch((setting: any) => {
  console.log("WATCH. userSetting setting:", setting);
});

$checkPublicationWriteOnDrag.updates.watch((check: any) => {
  console.log("WATCH. checkPublicationWriteOnDrag check:", check);
});