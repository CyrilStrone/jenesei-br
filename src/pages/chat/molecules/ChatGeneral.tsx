import "../styles/ChatGeneral.css";
import { ChatGeneralBar } from "../atoms/ChatGeneralBar";
import { ChatGeneralChoice } from "../atoms/ChatGeneralChoice";

export const ChatGeneral = () => {

    return (
        <div className="ChatGeneral ">
           <ChatGeneralBar/>
            <ChatGeneralChoice />
        </div>
    );
};
