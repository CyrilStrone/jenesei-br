import { Socket, io } from "socket.io-client";
import { ApiImage, accessTokenName } from "./axiosInstance";
import { createEvent, createStore } from "effector";
import { $userSocketChat } from "./hooks";
import { createChat, requestAllMessages } from "./useSocketChat";

const createSocketChat = (): Socket => {
  const socket = io(ApiImage, {
    transports: ["websocket"],
    auth: {
      authorization: `Bearer ${localStorage.getItem(accessTokenName)}`,
    },
    withCredentials: true,
  });

  socket.on("connect", () => {
    console.log("Socket.IO Chat connected");
  });

  socket.on("disconnect", () => {
    console.log("Socket.IO Chat disconnected");
    setUserSocketChatListAllChats(null);
  });

  socket.on("error", (error: any) => {
    console.log("Socket.IO Chat error:", error);
  });

  socket.on("new_chat_created", (data: any) => {
    console.log("Socket.IO Chat Received new_chat_created:", data);
    //Получаем ключ чата, если его не было
    if (data.id) setUserSocketChatChoiceId(data.id);
  });

  socket.on("disconnect_notification", (data: any) => {
    console.log("Socket.IO Chat Received disconnect_notification:", data);
  });
  socket.on("online_notification", (data: any) => {
    console.log("Socket.IO Chat Received online_notification:", data);
  });

  socket.on("response_all_chats", (data: any) => {
    setUserSocketChatListAllChats(data);
  });
  socket.on("response_all_messages", (data: any) => {
    setUserSocketChatChoiceAllMessages(data);
  });
  socket.on("receive_message", (data: any) => {
    setUserSocketChatReceiveMessage(data);
  });
  socket.on("response_chat", (data: any) => {
    console.log("Socket.IO Chat Received response_chat:", data);
  });

  return socket;
};

export default createSocketChat;

//Новое сообщение от любого пользователя
export const $userSocketChatReceiveMessage = createStore<any | null>(null);
export const setUserSocketChatReceiveMessage = createEvent<any | null>();
$userSocketChatReceiveMessage.on(
  setUserSocketChatReceiveMessage,
  (_, val) => val
);

//Id последнего актуального чата (для апи)
export const $userSocketChatChoiceId = createStore<any | null>(null);
export const setUserSocketChatChoiceId = createEvent<any | null>();
$userSocketChatChoiceId.on(setUserSocketChatChoiceId, (_, val) => val);

//Все сообщения выбранного чата
export const $userSocketChatChoiceAllMessages = createStore<any | null>(null);
export const setUserSocketChatChoiceAllMessages = createEvent<any | null>();
$userSocketChatChoiceAllMessages.on(
  setUserSocketChatChoiceAllMessages,
  (_, val) => val
);

//Все сообщения при авторизации на сайте
export const $userSocketChatListAllChats = createStore<any | null>(null);
export const setUserSocketChatListAllChats = createEvent<any | null>();
$userSocketChatListAllChats.on(setUserSocketChatListAllChats, (_, val) => val);

//url Id в чатах
export const $userSocketChatURLId = createStore<any | null>(null);
export const setUserSocketChatURLId = createEvent<any | null>();
$userSocketChatURLId.on(setUserSocketChatURLId, (_, val) => val);

$userSocketChatURLId.updates.watch((id: any) => {
  console.log("WATCH. userSocketChatURLId id:", id);
  if (id) {
    //Поиск чата с списке чатов по id пользователя из url браузера
    const foundKey = Object.keys($userSocketChatListAllChats.getState()).find(
      (e) => {
        return $userSocketChatListAllChats.getState()[e][0].id === +id;
      }
    );
    if (foundKey) {
      //Если чат есть, добавляем ключ чата
      setUserSocketChatChoiceId(foundKey);
    } else {
      //Если чата нет, создаем чат
      createChat($userSocketChat.getState(), +id);
    }
  }
});

$userSocketChatChoiceId.updates.watch((id: any) => {
  console.log("WATCH. userSocketChatChoiceId id:", id);
  if (id) {
    requestAllMessages($userSocketChat.getState(), id);
  }
});

$userSocketChatListAllChats.updates.watch((chats: any) => {
  console.log("WATCH. userSocketChatListAllChats chats:", chats);
});

$userSocketChatChoiceAllMessages.updates.watch((chats: any) => {
  console.log("WATCH. userSocketChatChoiceAllMessages chats:", chats);
});

$userSocketChatReceiveMessage.updates.watch((message: any) => {
  console.log("WATCH. userSocketChatReceiveMessage message:", message);
  if (message && message.length !== 0) {
    setUserSocketChatListAllChats({
      ...$userSocketChatListAllChats.getState(),
      [message.chat_id]: [message],
    });
    if (message.chat_id === $userSocketChatChoiceId.getState())
      setUserSocketChatChoiceAllMessages([
        ...$userSocketChatChoiceAllMessages.getState(),
        message,
      ]);
  }
});

// author
// :
// "tazdinger"
// avatarPath
// :
// "/image/profile/1/53be9c9a-8fce-4888-9891-415fda1e88d8.jpg"
// chat_id
// :
// "79be6ca0-4e86-4bae-aa31-5f64a6744db7"
// content
// :
// "Сообщение!!!"
// createdAt
// :
// "2023-07-27T09:03:28.382Z"
