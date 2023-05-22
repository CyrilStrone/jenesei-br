import { ChatGeneral } from "../molecules/ChatGeneral";
import "../styles/Chat.css";

export const Chat = () => {

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
