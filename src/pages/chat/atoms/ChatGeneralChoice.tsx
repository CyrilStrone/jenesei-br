import { useEffect, useState } from "react";
import "../styles/ChatGeneralChoice.css";
import { $userSocketChat, $userSocketChatChoice, $userSocketChatList } from "../../../ui/functions/hooks";
import { sendMessages } from "../../../ui/functions/useSocketChat";
import { useStore } from "effector-react";
export interface IChatGeneralChoice {
    chatId: any
}
export const ChatGeneralChoice = (params: IChatGeneralChoice) => {
    const [message, setMessage] = useState<string | null>(null);
    const [messageList, setMessageList] = useState<any | null>(null);
    const userSocketChatChoice = useStore($userSocketChatChoice);
    const handleSendMessages = () => {
        if (message) {
            const foundKey = Object.keys($userSocketChatList.getState()).find((e) => {
                return $userSocketChatList.getState()[e][0].id === +params.chatId;
            });
            sendMessages($userSocketChat.getState(), foundKey, message)
        }
    };
    useEffect(() => {
        setMessageList(userSocketChatChoice)
    }, [userSocketChatChoice])
    return (
        <div className="ChatGeneralChoice Transparent__Block Block__NonActive">

            <div className="ChatGeneralChoice__List">
                {messageList && messageList.map((e: any) =>
                    <div className="ChatGeneralChoice__List__Item">
                        {e.content}
                    </div>
                )}
            </div>
            <div className="ChatGeneralChoice__Bar">
                <input type="text" value={message || ""} onChange={(event: any) => setMessage(event.target.value)} />
                <button onClick={handleSendMessages}></button>
            </div>
        </div>
    );
};
