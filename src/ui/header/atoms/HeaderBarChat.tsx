import '../styles/HeaderBarChat.css'
import { NavLink } from 'react-router-dom';
import DefaultAvatarChat from '../../../assets/icon/header/default-avatar.svg'
import { $userSocketChatListAllChats } from '../../functions/createSocketChat';
import { useStore } from 'effector-react';
import { ApiImage } from '../../functions/axiosInstance';

export const HeaderBarChat = () => {
  const userSocketChatListAllChats = useStore($userSocketChatListAllChats);
  return (
    <>
      <div className='HeaderBarChat__Title'>
        Чаты
      </div>
      <div className='HeaderBarChat__List'>
        {userSocketChatListAllChats ?
          userSocketChatListAllChats.map((e: any, id: any) =>
            id < 6 && <NavLink key={id} to={`/chat/${e.interlocutor_id}`}>
              <img src={e.avatarPath ? ApiImage + e.avatarPath : DefaultAvatarChat} alt="DefaultAvatarChat" className='HeaderBarChat__List__Avatar' />
              {e.firstName + " " + e.lastName}
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
