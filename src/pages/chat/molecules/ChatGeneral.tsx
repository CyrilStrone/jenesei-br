import { ChatGeneralBar  } from "../atomes/ChatGeneralBar";
import { ChatGeneralChoice } from "../atomes/ChatGeneralChoice";
import "../styles/ChatGeneral.css";

export const ChatGeneral = () => {

    return (
        <div className="ChatGeneral ">
           <ChatGeneralBar/>
            <ChatGeneralChoice />
        </div>
    );
};
