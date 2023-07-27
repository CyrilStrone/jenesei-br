import "../styles/ChatGeneralBar.css";
import { useRef } from "react";
import { ChatGeneralBarItem } from "./ChatGeneralBarItem";
import { useStore } from "effector-react";
import { SpinningCircles } from "react-loading-icons";
import { $userSocketChatListAllChats } from "../../../ui/functions/createSocketChat";
export interface IChatGeneralBar {
    userValue:any
}
export const ChatGeneralBar = (params: IChatGeneralBar) => {
    const userSocketChatListAllChats = useStore($userSocketChatListAllChats);

    const ref = useRef<HTMLDivElement>(null);
    const handleWheel = (e: any) => {
        if (ref.current) {
            ref.current.scrollLeft += e.deltaY;
        }
    };
    return (
        <div className="ChatGeneralBar Half__Block Block__NonActive">
            <div className="ChatGeneralBar__Header Half__Block__Header">
                {params.userValue.user.login}
            </div>
            <div className="ChatGeneralBar__List Half__Block__Footer">
                <input type="text" placeholder="Поиск" className="ChatGeneralBar__List__Input" />


                <div className={`${userSocketChatListAllChats ? "ChatGeneralBarItem__YesList ChatGeneralBarItem__List" : "ChatGeneralBarItem__NoList"}`} ref={ref} onWheel={handleWheel}>
                    {userSocketChatListAllChats ?
                        Object.keys(userSocketChatListAllChats).map((e: any, id: any) =>
                            <ChatGeneralBarItem chatKey={e} key={id} value={userSocketChatListAllChats[e][0]} />
                        ) :
                        <SpinningCircles height="2em" fill="#0E8AC3" stroke="#000" strokeOpacity={.125} speed={1} />
                    }
                </div>


            </div>
        </div>
    );
};
