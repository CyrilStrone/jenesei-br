import { Socket, io } from "socket.io-client";
import { ApiImage, accessTokenName } from "./axiosInstance";
import { createEvent, createStore } from "effector";
import { $userSocketChat } from "./hooks";
import { createChat, requestAllMessages } from "./useSocketChat";
import { UserLogout } from "./accessToken";
import addNotification from "react-push-notification";

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
    UserLogout();
  });

  socket.on("disconnect_notification", (data: any) => {
    console.log("Socket.IO Chat Received disconnect_notification:", data);
  });

  socket.on("online_notification", (data: any) => {
    console.log("Socket.IO Chat Received online_notification:", data);
  });

  socket.on("response_all_chats", (data: any) => {
    //Событие получения всех сообщений при входе в приложение
    setUserSocketChatListAllChats(data);
  });
  socket.on("response_all_messages", (data: any) => {
    //Событие получения всех сообщений при входе в чат
    setUserSocketChatChoiceAllMessages(data);
  });
  socket.on("receive_message", (data: any) => {
    //Событие получения нового сообщения
    setUserSocketChatReceiveMessage(data);
  });
  socket.on("response_chat", (data: any) => {
    //Событие создания чата
    setUserSocketChatResponseChat(data);
  });

  return socket;
};

export default createSocketChat;

//Событие создания чата
export const $userSocketChatResponseChat = createStore<any | null>(null);
export const setUserSocketChatResponseChat = createEvent<any | null>();
$userSocketChatResponseChat.on(setUserSocketChatResponseChat, (_, val) => val);

//Событие получения нового сообщения
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

//Событие получения всех сообщений при входе в чат
export const $userSocketChatChoiceAllMessages = createStore<any | null>(null);
export const setUserSocketChatChoiceAllMessages = createEvent<any | null>();
$userSocketChatChoiceAllMessages.on(
  setUserSocketChatChoiceAllMessages,
  (_, val) => val
);

//Событие получения всех сообщений при входе в приложение
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
$userSocketChatResponseChat.updates.watch((chat: any) => {
  console.log("WATCH. userSocketChatResponseChat chat:", chat);
  setUserSocketChatChoiceId(chat.chat_id);
  setUserSocketChatListAllChats([
    chat,
    ...$userSocketChatListAllChats.getState(),
  ]);
});
$userSocketChatListAllChats.updates.watch((chats: any) => {
  console.log("WATCH. userSocketChatListAllChats chats:", chats);
});
export const updateUserSocketChatListAllChats = (newMessage: any) => {
  const newUserSocketChatListAllChats = $userSocketChatListAllChats.getState();
  const chatIndex = newUserSocketChatListAllChats.findIndex(
    (chat: any) => chat.chat_id === newMessage.chat_id
  );
  if (chatIndex !== -1) {
    const updatedChat = newUserSocketChatListAllChats[chatIndex];
    if (newMessage.content) newMessage.message = newMessage.content;
    updatedChat.content = newMessage;
    newUserSocketChatListAllChats.splice(chatIndex, 1);
    newUserSocketChatListAllChats.unshift(updatedChat);
  }
  setUserSocketChatListAllChats([...newUserSocketChatListAllChats]);
};
export const updateUserSocketChatListAllMessages = (newMessage: any) => {
  if (newMessage.chat_id === $userSocketChatChoiceId.getState()) {
    if ($userSocketChatChoiceAllMessages.getState()) {
      setUserSocketChatChoiceAllMessages([
        ...$userSocketChatChoiceAllMessages.getState(),
        newMessage,
      ]);
    } else {
      setUserSocketChatChoiceAllMessages([newMessage]);
    }
  }
};
$userSocketChatChoiceAllMessages.updates.watch((chats: any) => {
  console.log("WATCH. userSocketChatChoiceAllMessages chats:", chats);
});
export const pushNotification = (newMessage: any) => {
  document.hidden && addNotification({
    title: "Business Roulette. "+ newMessage.author,
    message: newMessage.content,
    icon: ApiImage + newMessage.avatarPath,
    vibrate:1,
    native: true, // when using native, your OS will handle theming.
  });
};
$userSocketChatReceiveMessage.updates.watch((message: any) => {
  pushNotification(message
    );
  console.log("WATCH. userSocketChatReceiveMessage message:", message);
  if (message && message.length !== 0) {
    updateUserSocketChatListAllMessages(message);
    updateUserSocketChatListAllChats(message);
  }
});
