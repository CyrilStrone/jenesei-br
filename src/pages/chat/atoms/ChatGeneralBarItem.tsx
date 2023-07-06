import "../styles/ChatGeneralBarItem.css";
import DefaultAvatarChat from '../../../assets/icon/chats/default-avatar.svg'

export const ChatGeneralBarItem = () => {

    return (
        <div className="ChatGeneralBarItem">
            <img src={DefaultAvatarChat} className="ChatGeneralBarItem__Avatar" alt="" />
            <div className="ChatGeneralBarItem__Info">
                <div className="ChatGeneralBarItem__Info__Name">
                    Данил Булгаков
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
