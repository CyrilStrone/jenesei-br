import { useRef } from "react";
import "../styles/ChatGeneralBar.css";
import { ChatGeneralBarItem } from "./ChatGeneralBarItem";

export const ChatGeneralBar = () => {

  
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
                <div className="ChatGeneralBarItem__List" ref={ref} onWheel={handleWheel}>
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
