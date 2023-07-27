import "../styles/ChatGeneral.css";
import { ChatGeneralBar } from "../atoms/ChatGeneralBar";
import { ChatGeneralChoice } from "../atoms/ChatGeneralChoice";
export interface IChatGeneral{
    chatId:any
    setChatId:any
}
export const ChatGeneral = (params:IChatGeneral) => {
    return (
        <div className="ChatGeneral ">
            <ChatGeneralBar chatId={params.chatId} setChatId={params.setChatId}/>
            <ChatGeneralChoice chatId={params.chatId} />
        </div>
    );
};
