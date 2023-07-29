import { Socket, io } from "socket.io-client";
import { ApiImage, accessTokenName } from "./axiosInstance";
import { createEvent, createStore } from "effector";
import { $userSocketChat } from "./hooks";
import {
  connectChatAfterResponse,
  createChat,
  requestAllMessages,
} from "./useSocketChat";
import { UserLogout } from "./accessToken";
// import addNotification from "react-push-notification";

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
    if ($userSocketChatChoiceId.getState())
      requestAllMessages(
        $userSocketChat.getState(),
        $userSocketChatChoiceId.getState()
      );
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
  socket.on("my_message", (data: any) => {
    //Событие доставки моего сообщения
    setUserSocketChatMyMessage(data);
  });

  return socket;
};

export default createSocketChat;

//Событие доставки моего сообщения
export const $userSocketChatMyMessage = createStore<any | null>(null);
export const setUserSocketChatMyMessage = createEvent<any | null>();
$userSocketChatMyMessage.on(setUserSocketChatMyMessage, (_, val) => val);

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
  updateUserSocketChatChoiceIdOrCreateChat(id);
});

$userSocketChatChoiceId.updates.watch((id: any) => {
  console.log("WATCH. userSocketChatChoiceId id:", id);
  if (id) requestAllMessages($userSocketChat.getState(), id);
});

$userSocketChatResponseChat.updates.watch((chat: any) => {
  console.log("WATCH. userSocketChatResponseChat chat:", chat);
  updateAllChats(chat);
});
$userSocketChatListAllChats.updates.watch((chats: any) => {
  console.log("WATCH. userSocketChatListAllChats chats:", chats);
});

$userSocketChatChoiceAllMessages.updates.watch((chats: any) => {
  console.log("WATCH. userSocketChatChoiceAllMessages chats:", chats);
});

export const pushNotification = (newMessage: any) => {
  console.log("WATCH. pushNotification newMessage:", newMessage);
  // document.hidden &&
  //   addNotification({
  //     title: "Business Roulette. " + newMessage.author,
  //     message: newMessage.content,
  //     icon: ApiImage + newMessage.avatarPath,
  //     vibrate: 1,
  //     native: true, // when using native, your OS will handle theming.
  //   });
};
$userSocketChatReceiveMessage.updates.watch((message: any) => {
  console.log("WATCH. userSocketChatReceiveMessage message:", message);
  updateAllChatsAndAllMessages(message);
});
$userSocketChatMyMessage.updates.watch((message: any) => {
  console.log("WATCH. userSocketChatMyMessage message:", message);
  updateAllChatsAndAllMessages(message);
});
const moveKeyToFirstPlace = <T extends Record<string, any>>(
  obj: T,
  keyToMove: keyof T
): any => {
  if (!Object.prototype.hasOwnProperty.call(obj, keyToMove)) {
    return obj;
  }
  const { [keyToMove]: value, ...rest } = obj;
  return { [keyToMove]: value, ...rest };
};
const updateAllChatsAndAllMessages = (message: any) => {
  let key: string | null = null;
  let keyObject: any | null = null;
  if (message)
    Object.keys(message).map((e: any) => {
      key = e;
      keyObject = message[e];
      if (keyObject) {
        keyObject.author = keyObject.login;
        keyObject.message = keyObject.content;
      }
    });
  if (key && keyObject) {
    const newUserSocketChatListAllChats = moveKeyToFirstPlace(
      {
        ...$userSocketChatListAllChats.getState(),
        [key]: {
          ...$userSocketChatListAllChats.getState()[key],
          content: keyObject,
        },
      },
      key
    );
    if (key == $userSocketChatChoiceId.getState()) {
      setUserSocketChatChoiceAllMessages([
        ...$userSocketChatChoiceAllMessages.getState(),
        keyObject,
      ]);
    }
    setUserSocketChatListAllChats(newUserSocketChatListAllChats);
  }
};
const updateUserSocketChatChoiceIdOrCreateChat = (id: any) => {
  if (id) {
    //Поиск чата с списке чатов по id пользователя из url браузера
    const chatId = Object.keys($userSocketChatListAllChats.getState()).find(
      (e: any) => {
        return (
          $userSocketChatListAllChats.getState()[e].interlocutor_id === +id
        );
      }
    );
    if (chatId) {
      setUserSocketChatChoiceId(chatId);
    } else {
      //Если чата нет, создаем чат
      createChat($userSocketChat.getState(), +id);
    }
  }
};
const updateAllChats = (message: any) => {
  let key: string | null = null;
  let keyObject: any | null = null;
  if (message)
    Object.keys(message).map((e: any) => {
      key = e;
      keyObject = message[e];
    });
  if (key && keyObject) {
    connectChatAfterResponse(key);
    if ($userSocketChatChoiceId.getState() == null) {
      setUserSocketChatChoiceId(key);
    }
    const newUserSocketChatListAllChats = moveKeyToFirstPlace(
      {
        ...$userSocketChatListAllChats.getState(),
        [key]: keyObject,
      },
      key
    );
    setUserSocketChatListAllChats(newUserSocketChatListAllChats);
  }
};
