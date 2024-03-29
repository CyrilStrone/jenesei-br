import "../styles/ChatGeneralBar.css";

import { useRef } from "react";
import { useStore } from "effector-react";
import { SpinningCircles } from "react-loading-icons";

import { ChatGeneralBarItem } from "./ChatGeneralBarItem";
import { $userSocketChatListAllChats } from "../../../ui/functions/createSocketChat";
import { ThreeDot } from "../../../ui/threeDot/organelles/ThreeDot";

export interface IChatGeneralBar {
    userValue: any
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
                {params.userValue.user.firstName + " " + params.userValue.user.lastName}
            </div>
            <div className="ChatGeneralBar__List Half__Block__Footer">
                <input type="text" placeholder="Поиск" className="ChatGeneralBar__List__Input" />
                {userSocketChatListAllChats ?
                    <div className={`${userSocketChatListAllChats ? "ChatGeneralBarItem__YesList ChatGeneralBarItem__List" : "ChatGeneralBarItem__NoList"}`} ref={ref} onWheel={handleWheel}>
                        {userSocketChatListAllChats ?
                            Object.keys(userSocketChatListAllChats).map((e: any, id: any) =>
                                <ChatGeneralBarItem chatId={e} key={id} value={userSocketChatListAllChats[e]} />
                            ) :
                            <SpinningCircles height="2em" fill="#0E8AC3" stroke="#000" strokeOpacity={.125} speed={1} />
                        }
                    </div>
                    :
                    <ThreeDot />
                }
            </div>
        </div>
    );
};