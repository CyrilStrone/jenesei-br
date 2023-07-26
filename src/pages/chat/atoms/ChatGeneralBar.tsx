import "../styles/ChatGeneralBar.css";
import { useEffect, useRef, useState } from "react";
import { ChatGeneralBarItem } from "./ChatGeneralBarItem";
import { useStore } from "effector-react";
import { $userSocketChat, $userSocketChatList } from "../../../ui/functions/hooks";
import { SpinningCircles } from "react-loading-icons";
import { requestAllMessages } from "../../../ui/functions/useSocketChat";
export interface IChatGeneralBar {
    chatId: any
    setChatId: any
}
export const ChatGeneralBar = (params: IChatGeneralBar) => {
    const userSocketChat = useStore($userSocketChat);
    const userSocketChatList = useStore($userSocketChatList);
    useEffect(() => {
        if (userSocketChatList && params.chatId && userSocketChat) {
            const foundKey = Object.keys(userSocketChatList).find((e) => {
                return userSocketChatList[e][0].id === +params.chatId;
            });
            console.log(foundKey)
            if (foundKey) {
                requestAllMessages(userSocketChat, foundKey)
            } else {

            }
        }
        // if (params.chatId) createChat(+params.chatId)
    }, [params.chatId, userSocketChatList,userSocketChat])
    const ref = useRef<HTMLDivElement>(null);
    const handleWheel = (e: any) => {
        if (ref.current) {
            ref.current.scrollLeft += e.deltaY;
        }
    };
    return (
        <div className="ChatGeneralBar Half__Block Block__NonActive">
            <div className="ChatGeneralBar__Header Half__Block__Header">
                Даня Булгаков
            </div>
            <div className="ChatGeneralBar__List Half__Block__Footer">
                <input type="text" placeholder="Поиск" className="ChatGeneralBar__List__Input" />


                <div className={`${userSocketChatList ? "ChatGeneralBarItem__YesList ChatGeneralBarItem__List" : "ChatGeneralBarItem__NoList"}`} ref={ref} onWheel={handleWheel}>
                    {userSocketChatList ?
                        Object.keys(userSocketChatList).map((e: any, id: any) =>
                            <ChatGeneralBarItem key={id} value={userSocketChatList[e][0]} />
                        ) :
                        <SpinningCircles height="2em" fill="#0E8AC3" stroke="#000" strokeOpacity={.125} speed={1} />
                    }
                </div>


            </div>
        </div>
    );
};
