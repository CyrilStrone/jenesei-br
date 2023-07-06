import '../styles/HeaderBarChat.css'
import { NavLink } from 'react-router-dom';
import DefaultAvatarChat from '../../../assets/icon/header/default-avatar.svg'

export const HeaderBarChat = () => {
  return (
    <>
      <div className='HeaderBarChat__Title'>
        Чаты
      </div>
      <div className='HeaderBarChat__List'>
        <NavLink to={`/chat`}>
          <img src={DefaultAvatarChat} alt="DefaultAvatarChat" className='HeaderBarChat__List__Avatar' />
          Данил Булгаков
          <div className='HeaderBarChat__List__Message'>12</div>
        </NavLink>
        <div className='HeaderBarChat__List__Line'>
        </div>
        <NavLink to={`/chat`}>
          <img src={DefaultAvatarChat} alt="DefaultAvatarChat" className='HeaderBarChat__List__Avatar' />
          Кирилл Строженко
          <div className='HeaderBarChat__List__Message'>6</div>
        </NavLink>
        <div className='HeaderBarChat__List__Line'>
        </div>
        <NavLink to={`/chat`}>
          <img src={DefaultAvatarChat} alt="DefaultAvatarChat" className='HeaderBarChat__List__Avatar' />
          Данил Строженко
          <div className='HeaderBarChat__List__Message'>1</div>
        </NavLink>
        <div className='HeaderBarChat__List__Line'>
        </div>
        <NavLink to={`/chat`}>
          <img src={DefaultAvatarChat} alt="DefaultAvatarChat" className='HeaderBarChat__List__Avatar' />
          Кирилл Булгаков
        </NavLink>
        <div className='HeaderBarChat__List__Line'>
        </div>
        <NavLink to={`/chat`}>
          <img src={DefaultAvatarChat} alt="DefaultAvatarChat" className='HeaderBarChat__List__Avatar' />
          Николай Бабушников
        </NavLink>
      </div>
    </>
  );
};
