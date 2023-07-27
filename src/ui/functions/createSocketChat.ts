import { Socket, io } from "socket.io-client";
import { ApiImage, accessTokenName } from "./axiosInstance";
import { createEvent, createStore } from "effector";
import { $userSocketChat, $userValue } from "./hooks";
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

  // socket.on("new_chat_created", (data: any) => {
  //   console.log("Socket.IO Chat Received new_chat_created:", data);
  //   //Получаем ключ чата, если его не было
  //   if (data.id) setUserSocketChatChoiceId(data.id);
  // });

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

  //Событие создания чата
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
  console.log("WATCH. userSocketChatURLId id:", +id);
  if (id) {
    //Поиск чата с списке чатов по id пользователя из url браузера
    const chat = $userSocketChatListAllChats.getState().find((e: any) => {
      return e.interlocutor_id === +id;
    });
    if (chat) {
      //Если чат есть, добавляем ключ чата
      setUserSocketChatChoiceId(chat.chat_id);
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
export const updateUserSocketChatListAllChats = (newMessage: any) => {
  const newUserSocketChatListAllChats = $userSocketChatListAllChats.getState();
  const chatIndex = newUserSocketChatListAllChats.findIndex(
    (chat: any) => chat.chat_id === $userSocketChatChoiceId.getState()
  );
  if (chatIndex !== -1) {
    const updatedChat = newUserSocketChatListAllChats[chatIndex];
    updatedChat.content = newMessage;
    newUserSocketChatListAllChats.splice(chatIndex, 1);
    newUserSocketChatListAllChats.unshift(updatedChat);
  }
  setUserSocketChatListAllChats([...newUserSocketChatListAllChats]);
};
export const updateUserSocketChatListAllMessages = (newMessage: any) => {
  if (newMessage.chat_id === $userSocketChatChoiceId.getState()) {
    setUserSocketChatChoiceAllMessages([
      ...$userSocketChatChoiceAllMessages.getState(),
      newMessage,
    ]);
  }
};
$userSocketChatChoiceAllMessages.updates.watch((chats: any) => {
  console.log("WATCH. userSocketChatChoiceAllMessages chats:", chats);
});

$userSocketChatReceiveMessage.updates.watch((message: any) => {
  console.log("WATCH. userSocketChatReceiveMessage message:", message);
  if (message && message.length !== 0) {
    updateUserSocketChatListAllMessages(message);
    updateUserSocketChatListAllChats(message);
  }
});
