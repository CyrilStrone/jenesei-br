
import { ChatGeneralBar } from "../atoms/ChatGeneralBar";
import { ChatGeneralChoice } from "../atoms/ChatGeneralChoice";
import "../styles/ChatGeneral.css";

export const ChatGeneral = () => {

    return (
        <div className="ChatGeneral ">
           <ChatGeneralBar/>
            <ChatGeneralChoice />
        </div>
    );
};
