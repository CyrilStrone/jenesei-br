import "../styles/ChatGeneralBar.css";
import { ChatGeneralBarItem } from "./ChatGeneralBarItem";

export const ChatGeneralBar = () => {

    return (
        <div className="ChatGeneralBar Half__Block Block__NonActive">
            <div className="ChatGeneralBar__Header Half__Block__Header">
                Даня Булгаков
            </div>
            <div className="ChatGeneralBar__List Half__Block__Footer">
                <input type="text" placeholder="Поиск" className="ChatGeneralBar__List__Search" />
                <div className="ChatGeneralBarItem__List">
                    <ChatGeneralBarItem />
                    <ChatGeneralBarItem />
                    <ChatGeneralBarItem />
                    <ChatGeneralBarItem />
                    <ChatGeneralBarItem />
                    <ChatGeneralBarItem />
                    <ChatGeneralBarItem />
                    <ChatGeneralBarItem />
                    <ChatGeneralBarItem />
                    <ChatGeneralBarItem />
                    <ChatGeneralBarItem />
                    <ChatGeneralBarItem />
                    <ChatGeneralBarItem />
                    <ChatGeneralBarItem />
                </div>
            </div>
        </div>
    );
};
