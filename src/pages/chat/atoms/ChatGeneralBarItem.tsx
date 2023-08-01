import "../styles/ChatGeneralBarItem.css";

import { useNavigate } from "react-router-dom";
import { useStore } from "effector-react";

import DefaultAvatarChat from '../../../assets/icon/chats/default-avatar.svg'
import { ApiImage } from "../../../ui/functions/axiosInstance";
import { $userSocketChatChoiceId } from "../../../ui/functions/createSocketChat";
import { formatDateTime } from "../../../ui/functions/formatDateTime";
import { OnlineStatus } from "../../../ui/onlineStatus/organelles/OnlineStatus";

export interface IChatGeneralBarItem {
    value: any
    chatId: any
}
export const ChatGeneralBarItem = (params: IChatGeneralBarItem) => {
    const navigate = useNavigate();
    const userSocketChatChoiceId = useStore($userSocketChatChoiceId);
    return (
        <div className={`${userSocketChatChoiceId === params.chatId && "ChatGeneralBarItem-Choice"} ChatGeneralBarItem`} onClick={() => navigate(`/chat/${params.value.interlocutor_id}`)}>
            <img src={params.value.avatarPath ? ApiImage + params.value.avatarPath : DefaultAvatarChat} className="ChatGeneralBarItem__Avatar dowlandBackground-userImage" alt="" />
            <div className="ChatGeneralBarItem__Info">
                <div className="ChatGeneralBarItem__Info__Name">
                    <div className="ChatGeneralBarItem__Info__Name__FullName">
                        {params.value.firstName + " " + params.value.lastName}
                    </div>
                    {userSocketChatChoiceId !== params.chatId && <OnlineStatus login={params.value.login} />}
                </div>
                {params.value.content && <div className="ChatGeneralBarItem__Info__Preview">
                    <div className="ChatGeneralBarItem__Info__Preview__Message">
                        {params.value.content.message}
                    </div>
                    <div className="ChatGeneralBarItem__Info__Preview__Date">
                        {formatDateTime(params.value.content.createdAt)}
                    </div>
                </div>}
            </div>
        </div>
    );
};
