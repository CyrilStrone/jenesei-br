import '../styles/HeaderBarChat.css'

import { NavLink } from 'react-router-dom';
import { useStore } from 'effector-react';

import DefaultAvatarChat from '../../../assets/icon/header/default-avatar.svg'

import { $userSocketChatListAllChats } from '../../functions/createSocketChat';
import { ApiImage } from '../../functions/axiosInstance';

export const HeaderBarChat = () => {
  const userSocketChatListAllChats = useStore($userSocketChatListAllChats);
  return (
    <>
      <div className='HeaderBarChat__Title'>
        Чаты
      </div>
      <div className='HeaderBarChat__List'>

        {userSocketChatListAllChats && Object.keys(userSocketChatListAllChats) && Object.keys(userSocketChatListAllChats).length !== 0 ?
          Object.keys(userSocketChatListAllChats).map((e: any, id: any) =>
            //  <ChatGeneralBarItem key={id} value={userSocketChatListAllChats[e]} />
            id < 6 && <NavLink key={id} to={`/chat/${userSocketChatListAllChats[e].interlocutor_id}`}>
              <img src={userSocketChatListAllChats[e].avatarPath ? ApiImage + userSocketChatListAllChats[e].avatarPath : DefaultAvatarChat} alt="DefaultAvatarChat" className='HeaderBarChat__List__Avatar' />
              {userSocketChatListAllChats[e].firstName + " " + userSocketChatListAllChats[e].lastName}
              {/* <div className='HeaderBarChat__List__Message'>12</div> */}
            </NavLink>
          ) :
          <div className='HeaderBarChat__List__Error'>
            Нет доступных чатов
          </div>
        }
      </div>
    </>
  );
};
