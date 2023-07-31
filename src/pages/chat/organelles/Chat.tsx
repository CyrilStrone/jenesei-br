import "../styles/Chat.css";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { setUserSocketChatChoiceAllMessages, setUserSocketChatChoiceId, setUserSocketChatURLId } from "../../../ui/functions/createSocketChat";
import { ChatGeneral } from "../molecules/ChatGeneral";
import useIsMobileDevice from "../../../ui/functions/useIsMobileDevice";

export const Chat = () => {
  const { id } = useParams();
  const isMobileDevice = useIsMobileDevice();
  useEffect(() => {
    setUserSocketChatURLId(id)
    return () => {
      setUserSocketChatChoiceAllMessages(null)
      setUserSocketChatChoiceId(null)
      setUserSocketChatURLId(null)
    }
  }, [id])
  return (
    <div className="Chat">
      {!isMobileDevice && <div className="Chat__Header Translucent__Block  Block__NonActive">
        <div className="Chat__Title">
          Чат
        </div>
      </div>}
      <ChatGeneral />
    </div>
  );
};
