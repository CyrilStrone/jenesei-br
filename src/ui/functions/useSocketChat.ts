import { Socket } from "socket.io-client";
import { $userSocketChat } from "./hooks";

export const createChat = (socket: Socket, id: any) => {
  socket.emit("create_chat", { interlocutor_id: id });
};

export const requestAllMessages = (socket: Socket, id: any) => {
  socket.emit("request_all_messages", { chat_id: id });
};

export const sendMessages = (id: any, content: any) => {
  $userSocketChat.getState().emit("send_message", { chat_id: id, content: content });
};

