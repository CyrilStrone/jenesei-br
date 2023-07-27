import "../styles/Chat.css";
import { ChatGeneral } from "../molecules/ChatGeneral";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Chat = () => {
  const { id } = useParams();
  const [chatId, setChatId] = useState<any | null>(null)
  useEffect(() => {
    setChatId(id)
  }, [id])
  return (
    <div className="Chat">
      <div className="Chat__Header Translucent__Block  Block__NonActive">
        <div className="Chat__Title">
          Чат
        </div>
      </div>
      <ChatGeneral chatId={chatId} setChatId={setChatId} />
    </div>
  );
};
