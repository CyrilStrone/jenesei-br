import "../styles/ChatGeneral.css";

import { useStore } from "effector-react";

import { ChatGeneralBar } from "../atoms/ChatGeneralBar";
import { ChatGeneralChoice } from "../atoms/ChatGeneralChoice";
import { $userValue } from "../../../ui/functions/hooks";

export const ChatGeneral = () => {
    const userValue = useStore($userValue);
    return (
        <div className="ChatGeneral ">
            <ChatGeneralBar userValue={userValue}/>
            <ChatGeneralChoice userValue={userValue}/>
        </div>
    );
};
