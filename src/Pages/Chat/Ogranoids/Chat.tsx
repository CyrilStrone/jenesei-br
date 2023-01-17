import React from "react";
// import { ChatList, MessageList, Input } from "react-chat-elements";
// import "react-chat-elements/dist/main.css";
// MessageBox component
import "../Styles/Chat.css";

export const Chat = () => {
  // require('./index.styl')
  // let aboba: any = [
  //   {
  //     position: "left",
  //     type: "text",
  //     title: "Кирилл ММмяу",
  //     text: "Блин, какой клевый сайт",
  //   },
  //   {
  //     position: "right",
  //     type: "text",
  //     title: "Данил Биг",
  //     text: "Ага, иуууу",
  //   },
  // ];
  // let aboba2: any = [
  //   {
  //     avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
  //     alt: "kursat_avatar",
  //     title: "Kursat",
  //     subtitle: "Why don't we go to the No Way Home movie this weekend ?",
  //     date: new Date(),
  //     unread: 3,
  //   },
  //   {
  //     avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
  //     alt: "kursat_avatar",
  //     title: "Kursat",
  //     subtitle: "Why don't we go to the No Way Home movie this weekend ?",
  //     date: new Date(),
  //     unread: 3,
  //   },
  //   {
  //     avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
  //     alt: "kursat_avatar",
  //     title: "Kursat",
  //     subtitle: "Why don't we go to the No Way Home movie this weekend ?",
  //     date: new Date(),
  //     unread: 3,
  //   },
  //   {
  //     avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
  //     alt: "kursat_avatar",
  //     title: "Kursat",
  //     subtitle: "Why don't we go to the No Way Home movie this weekend ?",
  //     date: new Date(),
  //     unread: 3,
  //   },
  // ];
  return (
    <div className="Chat">
      <div className="Chat_Title">Чат</div>
      {/* <div className="Chat_Block">
        <ChatList
          lazyLoadingImage={""}
          id="0"
          className="chat-list"
          dataSource={aboba2}
        />
        <div className="Chat_Message">
          <MessageList
            // referance="Chat"
            className="message-list"
            lockable={true}
            dataSource={aboba}
            toBottomHeight={"100%"}
          />
          <Input placeholder="Type here..." multiline={true} maxHeight={1000} />
        </div>
      </div> */}
    </div>
  );
};
