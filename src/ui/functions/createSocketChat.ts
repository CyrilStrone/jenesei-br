import { Socket, io } from "socket.io-client";
import { ApiImage, accessTokenName } from "./axiosInstance";
import { setUserSocketChatChoice, setUserSocketChatList } from "./hooks";

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
    setUserSocketChatList(null)
  });

  socket.on("error", (error: any) => {
    console.log("Socket.IO Chat error:", error);
  });

  socket.on("create_chat", (data: any) => {
    console.log("Socket.IO Chat Received create_chat:", data);
  });

  socket.on("disconnect_notification", (data: any) => {
    console.log("Socket.IO Chat Received disconnect_notification:", data);
  });
  socket.on("online_notification", (data: any) => {
    console.log("Socket.IO Chat Received online_notification:", data);
  });

  socket.on("response_all_chats", (data: any) => {
    console.log("Socket.IO Chat Received response_all_chats:", data);
    setUserSocketChatList(data)
  });
  socket.on("response_all_messages", (data: any) => {
    console.log("Socket.IO Chat Received response_all_messages:", data);
    setUserSocketChatChoice(data)
  });
  socket.on("receive_message", (data: any) => {
    console.log("Socket.IO Chat Received receive_message:", data);
  });

  socket.on("new_chat_created", (data: any) => {
    console.log("Socket.IO Chat Received new_chat_created:", data);
  });

  return socket;
};

export default createSocketChat;
