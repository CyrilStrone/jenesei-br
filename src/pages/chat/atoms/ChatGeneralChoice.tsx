import { useEffect, useRef, useState } from "react";
import "../styles/ChatGeneralChoice.css";
import { sendMessages } from "../../../ui/functions/useSocketChat";
import { useStore } from "effector-react";
import { $userSocketChatChoiceAllMessages, $userSocketChatChoiceId, $userSocketChatListAllChats, updateUserSocketChatListAllChats, updateUserSocketChatListAllMessages } from "../../../ui/functions/createSocketChat";
import SendIcon from '../../../assets/icon/chats/send.svg'
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
            updateUserSocketChatListAllMessages({
                chat_id:userSocketChatChoiceId,
                author: params.userValue.user.login,
                avatarPath: params.userValue.avatarPath,
                content: message,
                createdAt: `${new Date().toISOString()}`
            })
            sendMessages(userSocketChatChoiceId, message)
            updateUserSocketChatListAllChats({
                author: params.userValue.user.login,
                avatarPath: params.userValue.avatarPath,
                message: message,
                createdAt: `${new Date().toISOString()}`
            });
            setMessage(null)
        }
    };

    useEffect(() => {
        setMessage(null)
    }, [userSocketChatChoiceId])
    useEffect(() => {
        if (chat !== null && chat.current !== null)
            chat.current.scrollTop = chat.current.scrollHeight;
    }, [userSocketChatChoiceId, userSocketChatChoiceAllMessages]);
    const formatDateTime = (dateTimeString: any) => {
        const date = new Date(dateTimeString);
        const now = new Date();

        if (date.getFullYear() === now.getFullYear()) {
            if (date.getMonth() === now.getMonth() && date.getDate() === now.getDate()) {
                return date.toLocaleTimeString('ru-RU', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
            } else {
                return date.toLocaleString('ru-RU', { hour12: false, month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
            }
        } else {
            return date.toLocaleString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
        }
    };
    return (
        <div className="ChatGeneralChoice Half__Block Block__NonActive">
            <div className="ChatGeneralBar__Header Half__Block__Header">
                {$userSocketChatListAllChats.getState()?.map(
                    (e: any) => e.chat_id === userSocketChatChoiceId && e.firstName + " " + e.lastName

                )}
            </div>
            <div className="ChatGeneralChoice__Footer Half__Block__Footer">
                <div className="ChatGeneralChoice__ListBar">
                    <div ref={chat} className="ChatGeneralChoice__ListBar__Chat">
                        {userSocketChatChoiceAllMessages && userSocketChatChoiceAllMessages.map((e: any, id: number) =>
                            <div key={id} className={`${e.author === params.userValue.user.login && "ChatGeneralChoice__ListBar__Chat__Item-User"} ChatGeneralChoice__ListBar__Chat__Item`}>
                                <div className="ChatGeneralChoice__ListBar__Chat__Item__Content">
                                    {e.content}
                                </div>
                                <div className="ChatGeneralChoice__ListBar__Chat__Item__Time">
                                    {formatDateTime(e.createdAt)}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="ChatGeneralChoice__InputBar">
                    <input placeholder="Напишите ваше сообщение" className="ChatGeneralChoice__InputBar__Input" type="text" value={message || ""} onChange={(event: any) => setMessage(event.target.value)} />
                    <img src={SendIcon} className="ChatGeneralChoice__InputBar__Button" onClick={handleSendMessages} />
                </div>
            </div>
        </div>
    );
};
