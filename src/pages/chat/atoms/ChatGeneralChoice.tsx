import "../styles/ChatGeneralChoice.css";
import SendIcon from '../../../assets/icon/chats/send.svg'

import { useEffect, useRef, useState } from "react";
import { useStore } from "effector-react";

import { $userSocketChatChoiceAllMessages, $userSocketChatChoiceId, $userSocketChatListAllChats } from "../../../ui/functions/createSocketChat";
import { sendMessages } from "../../../ui/functions/useSocketChat";
import { formatDateTime } from "../../../ui/functions/formatDateTime";
import useIsMobileDevice from "../../../ui/functions/useIsMobileDevice";
import { OnlineStatus } from "../../../ui/onlineStatus/organelles/OnlineStatus";
import { ApiImage } from "../../../ui/functions/axiosInstance";

export interface IChatGeneralChoice {
    userValue: any
}
export const ChatGeneralChoice = (params: IChatGeneralChoice) => {
    const isMobileDevice = useIsMobileDevice();
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const chatGeneralChoiceBarChat = useRef<HTMLDivElement>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [user, setUser] = useState<any | null>(null);
    const userSocketChatChoiceId = useStore($userSocketChatChoiceId);
    const userSocketChatChoiceAllMessages = useStore($userSocketChatChoiceAllMessages);
    const handleSendMessages = () => {
        if (message) {
            sendMessages(userSocketChatChoiceId, message)
            setMessage(null)
        }
    };

    useEffect(() => {
        setMessage(null)
        if (userSocketChatChoiceId) {
            Object.keys($userSocketChatListAllChats.getState())?.map(
                (e: any) => e === userSocketChatChoiceId && setUser($userSocketChatListAllChats.getState()[e])
            )
        }
        return () => {
            setUser(null)
            setMessage(null)
        }
    }, [userSocketChatChoiceId]);

    useEffect(() => {
        if (chatGeneralChoiceBarChat !== null && chatGeneralChoiceBarChat.current !== null)
            chatGeneralChoiceBarChat.current.scrollTop = chatGeneralChoiceBarChat.current.scrollHeight;
    }, [userSocketChatChoiceId, userSocketChatChoiceAllMessages]);

    useEffect(() => {
        if (textAreaRef && textAreaRef.current) {
            textAreaRef.current.style.height = 'auto';
            if (!isMobileDevice && message && message.length > 88) {
                textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight + 24}px`;
            } else if (!message) {
                textAreaRef.current.style.height = `${36}px`;
            } else {
                textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight + 12}px`;
            }
            if (textAreaRef.current.style.height > "300") {
                textAreaRef.current.style.overflow = "auto"
            } else {
                textAreaRef.current.style.overflow = "hidden"
            }
        }
    }, [message, userSocketChatChoiceAllMessages, userSocketChatChoiceId]);

    return (
        <div className="ChatGeneralChoice Half__Block Block__NonActive">
            {userSocketChatChoiceId ?
                <>
                    <div className="ChatGeneralBar__Header Half__Block__Header">
                        {user &&
                            <>
                                {isMobileDevice && <img src={ApiImage + user.avatarPath} className="ChatGeneralBar__Header__Avatar" alt="" />}
                                <div className="ChatGeneralBar__Header__Name">
                                    {user.firstName + " " + user.lastName}
                                </div>
                                <OnlineStatus login={user.login} />
                            </>
                        }
                    </div>
                    <div className="ChatGeneralChoice__Footer Half__Block__Footer">
                        {userSocketChatChoiceAllMessages && userSocketChatChoiceAllMessages.length == 0 &&
                            <div className="ChatGeneralChoice__NoListBar">
                                <div>
                                    Список сообщений пуст
                                </div>
                            </div>
                        }
                        <div className="ChatGeneralChoice__ListBar">
                            <div ref={chatGeneralChoiceBarChat} className="ChatGeneralChoice__ListBar__Chat">
                                {userSocketChatChoiceAllMessages && userSocketChatChoiceAllMessages.map((e: any, id: number) =>
                                    <div key={id} className={`${e.login === params.userValue.user.login && "ChatGeneralChoice__ListBar__Chat__Item-User"} ChatGeneralChoice__ListBar__Chat__Item`}>
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
                        <form onSubmit={e => { e.preventDefault(); handleSendMessages() }} className="ChatGeneralChoice__InputBar">
                            <textarea ref={textAreaRef} placeholder="Напишите ваше сообщение" required className="ChatGeneralChoice__InputBar_TextArea" value={message || ""} onChange={(event: any) => { setMessage(event.target.value); }} >
                            </textarea>
                            <div className="ChatGeneralChoice__InputBar__MessageLength">
                                {message && message.length}
                            </div>
                            <label htmlFor="save">
                                <img src={SendIcon} alt="SendIcon" className="ChatGeneralChoice__InputBar__Button" />
                            </label>
                            <input type="submit" id="save" style={{ display: "none" }} value="Отправить" />
                        </form>
                    </div>
                </>
                :
                <div className="ChatGeneralBar__NoChatChoiceId">
                    Выберите или создайте чат
                </div>
            }
        </div>
    );
};
