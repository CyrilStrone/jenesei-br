import { createEvent, createStore } from "effector";
import createSocketChat from "./createSocketChat";

export const $userValue = createStore<any>(null);
export const setUserValue = createEvent<any>();
$userValue.on(setUserValue, (_, val) => val);

export const $userSetting = createStore<boolean>(false);
export const setUserSetting = createEvent<boolean>();
$userSetting.on(setUserSetting, (_, val) => val);

export const $checkPublicationWriteOnDrag = createStore<boolean>(false);
export const setCheckPublicationWriteOnDrag = createEvent<boolean>();
$checkPublicationWriteOnDrag.on(
  setCheckPublicationWriteOnDrag,
  (_, val) => val
);
// Веб сокеты //
export const $userSocketChat = createStore<any | null>(null);
export const setUserSocketChat = createEvent<any | null>();
$userSocketChat.on(setUserSocketChat, (_, val) => val);
// Веб сокеты //

export const $userSocketChatChoice = createStore<any | null>(null);
export const setUserSocketChatChoice = createEvent<any | null>();
$userSocketChatChoice.on(setUserSocketChatChoice, (_, val) => val);

export const $userSocketChatList = createStore<any | null>(null);
export const setUserSocketChatList = createEvent<any | null>();
$userSocketChatList.on(setUserSocketChatList, (_, val) => val);

$userValue.updates.watch((value: any) => {
  console.log("WATCH. userValue value:", value);
  if(value){
    setUserSocketChat(createSocketChat())
  }
});
$userSetting.updates.watch((setting: any) => {
  console.log("WATCH. userSetting setting:", setting);
});

$checkPublicationWriteOnDrag.updates.watch((check: any) => {
  console.log("WATCH. checkPublicationWriteOnDrag check:", check);
});

$userSocketChat.updates.watch((socket: any) => {
  console.log("WATCH. userSocketChat socket:", socket);
});
