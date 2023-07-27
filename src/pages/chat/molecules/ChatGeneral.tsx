import "../styles/ChatGeneral.css";
import { ChatGeneralBar } from "../atoms/ChatGeneralBar";
import { ChatGeneralChoice } from "../atoms/ChatGeneralChoice";
export interface IChatGeneral{
}
export const ChatGeneral = (params:IChatGeneral) => {
    return (
        <div className="ChatGeneral ">
            <ChatGeneralBar />
            <ChatGeneralChoice />
        </div>
    );
};
