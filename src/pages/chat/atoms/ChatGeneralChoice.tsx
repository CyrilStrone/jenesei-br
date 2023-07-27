import { useEffect, useState } from "react";
import "../styles/ChatGeneralChoice.css";
import { $userSocketChat, $userValue } from "../../../ui/functions/hooks";
import { sendMessages } from "../../../ui/functions/useSocketChat";
import { useStore } from "effector-react";
import { $userSocketChatChoiceAllMessages, $userSocketChatChoiceId, setUserSocketChatChoiceAllMessages } from "../../../ui/functions/createSocketChat";
export interface IChatGeneralChoice {

}
export const ChatGeneralChoice = (params: IChatGeneralChoice) => {
    const [message, setMessage] = useState<string | null>(null);
    const userSocketChatChoiceId = useStore($userSocketChatChoiceId);
    const userSocketChatChoiceAllMessages = useStore($userSocketChatChoiceAllMessages);
    const userValue = useStore($userValue);
    const handleSendMessages = () => {
        setUserSocketChatChoiceAllMessages([...userSocketChatChoiceAllMessages,
        {
            author: userValue.user.login,
            avatarPath: userValue.avatarPath,
            content: message,
            createdAt: `${new Date()}`
        }
        ])
        sendMessages($userSocketChat.getState(), userSocketChatChoiceId, message)
    };
    useEffect(() => {
        setMessage(null)
    }, [userSocketChatChoiceId])
    return (
        <div className="ChatGeneralChoice Transparent__Block Block__NonActive">

            <div className="ChatGeneralChoice__List">
                {userSocketChatChoiceAllMessages && userSocketChatChoiceAllMessages.map((e: any) =>
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
