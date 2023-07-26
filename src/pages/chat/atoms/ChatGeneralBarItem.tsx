import "../styles/ChatGeneralBarItem.css";
import DefaultAvatarChat from '../../../assets/icon/chats/default-avatar.svg'
import { ApiImage } from "../../../ui/functions/axiosInstance";
export interface IChatGeneralBarItem {
    value: any
}
export const ChatGeneralBarItem = (params:IChatGeneralBarItem) => {
    return (
        <div className="ChatGeneralBarItem">
            <img src={params.value.avatarPath ? ApiImage + params.value.avatarPath : DefaultAvatarChat} className="ChatGeneralBarItem__Avatar" alt="" />
            <div className="ChatGeneralBarItem__Info">
                <div className="ChatGeneralBarItem__Info__Name">
                    {params.value.firstName + " " + params.value.lastName}
                </div>
                <div className="ChatGeneralBarItem__Info__Preview">
                    Кирюха я там такой чатгпт написал...
                    Кирюха я там такой чатгпт написал...
                    Кирюха я там такой чатгпт написал...
                </div>
            </div>
            <div className="ChatGeneralBarItem__Message HeaderBarChat__List__Message">
                2
            </div>
        </div>
    );
};
