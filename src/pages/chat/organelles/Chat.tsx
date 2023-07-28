import "../styles/Chat.css";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { setUserSocketChatURLId } from "../../../ui/functions/createSocketChat";
import { ChatGeneral } from "../molecules/ChatGeneral";

export const Chat = () => {
  const { id } = useParams();
  useEffect(() => {
    setUserSocketChatURLId(id)
  }, [id])
  return (
    <div className="Chat">
      <div className="Chat__Header Translucent__Block  Block__NonActive">
        <div className="Chat__Title">
          Чат
        </div>
      </div>
      <ChatGeneral/>
    </div>
  );
};
