import { useEffect, useRef, useState } from "react";
import "../styles/ChatGeneralChoice.css";
import { $userSocketChat, $userValue } from "../../../ui/functions/hooks";
import { sendMessages } from "../../../ui/functions/useSocketChat";
import { useStore } from "effector-react";
import { $userSocketChatChoiceAllMessages, $userSocketChatChoiceId, setUserSocketChatChoiceAllMessages } from "../../../ui/functions/createSocketChat";
export interface IChatGeneralChoice {
    userValue: any
}
export const ChatGeneralChoice = (params: IChatGeneralChoice) => {
    const chat = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState<string | null>(null);
    const userSocketChatChoiceId = useStore($userSocketChatChoiceId);
    const userSocketChatChoiceAllMessages = useStore($userSocketChatChoiceAllMessages);
    const handleSendMessages = () => {
        if (message) {
            setUserSocketChatChoiceAllMessages([...userSocketChatChoiceAllMessages,
            {
                author: params.userValue.user.login,
                avatarPath: params.userValue.avatarPath,
                content: message,
                createdAt: `${new Date()}`
            }
            ])
            sendMessages($userSocketChat.getState(), userSocketChatChoiceId, message)
            setMessage(null)
        }
    };
    useEffect(() => {
        setMessage(null)
    }, [userSocketChatChoiceId])
    useEffect(() => {
        if (chat !== null && chat.current !== null)
            chat.current.scrollTop = chat.current.scrollHeight;
    }, [message]);
    return (
        <div className="ChatGeneralChoice Half__Block Block__NonActive">
            <div className="ChatGeneralBar__Header Half__Block__Header">
                {userSocketChatChoiceId}
            </div>
            <div className="ChatGeneralChoice__Footer Half__Block__Footer">
                <div className="ChatGeneralChoice__ListBar">
                    <div ref={chat} className="ChatGeneralChoice__ListBar__Chat">
                        {userSocketChatChoiceAllMessages && userSocketChatChoiceAllMessages.map((e: any) =>
                            <div className={`${e.author === params.userValue.user.login && "ChatGeneralChoice__ListBar__Chat__Item-User"} ChatGeneralChoice__ListBar__Chat__Item`}>
                                {e.content}
                            </div>
                        )}
                    </div>
                </div>
                <div className="ChatGeneralChoice__InputBar">
                    <input placeholder="Напишите ваше сообщение" className="ChatGeneralChoice__InputBar__Input" type="text" value={message || ""} onChange={(event: any) => setMessage(event.target.value)} />
                    <button className="ChatGeneralChoice__InputBar__Button" onClick={handleSendMessages}></button>
                </div>
            </div>
        </div>
    );
};
