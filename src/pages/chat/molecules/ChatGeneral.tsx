import "../styles/ChatGeneral.css";
import { ChatGeneralBar } from "../atoms/ChatGeneralBar";
import { ChatGeneralChoice } from "../atoms/ChatGeneralChoice";
import { $userValue } from "../../../ui/functions/hooks";
import { useStore } from "effector-react";
export interface IChatGeneral{
}
export const ChatGeneral = (params:IChatGeneral) => {
    const userValue = useStore($userValue);
    return (
        <div className="ChatGeneral ">
            <ChatGeneralBar userValue={userValue}/>
            <ChatGeneralChoice userValue={userValue}/>
        </div>
    );
};
