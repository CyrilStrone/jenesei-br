import '../styles/HeaderBarProfile.css'
import User from '../../../common/assets/header/User.svg'
import Setting from '../../../common/assets/header/Setting.svg'
import Publication from '../../../common/assets/header/Publication.svg'
import PublicationList from '../../../common/assets/header/PublicationList.svg'
import Subscriptions from '../../../common/assets/header/Subscriptions.svg'
import Subscribers from '../../../common/assets/header/Subscribers.svg'
import Logout from '../../../common/assets/header/Logout.svg'

import { NavLink } from 'react-router-dom';
import { $userValue } from '../../../common/Hooks';
import { useStore } from 'effector-react';

export const HeaderBarProfile = () => {
  const userValue = useStore($userValue);
  return (
    <>
      <div className='HeaderBarProfile__Title'>
        <div className='HeaderBarProfile__Title__Header'>
          {userValue.firstName + " " + userValue.lastName}
        </div>
        <div className='HeaderBarProfile__Title__Mail'>
          {userValue.mail}
        </div>
      </div>
      <div className='HeaderBarProfile__List'>
        <div className='HeaderBarProfile__List__Title'>
          Основные
        </div>
        <NavLink to={`/User`}>
          <img src={User} className="HeaderBarProfile__List__Image" alt="" />
          Профиль
        </NavLink>
        <NavLink to={`/User`}>
          <img src={Subscriptions} className="HeaderBarProfile__List__Image" alt="" />
          Подписки
        </NavLink>
        <NavLink to={`/User`}>
          <img src={Subscribers} className="HeaderBarProfile__List__Image" alt="" />
          Подписчики
        </NavLink>
        <NavLink to={`/User`}>
          <img src={PublicationList} className="HeaderBarProfile__List__Image" alt="" />
          Публикации
        </NavLink>
        <div className='HeaderBarProfile__List__Title'>
          Еще
        </div>
        <NavLink to={`/User`}>
          <img src={Publication} className="HeaderBarProfile__List__Image" alt="" />
          Написать публикацию
        </NavLink>
        <NavLink to={`/User`} className="HeaderBarProfile__List__Settings">
          <img src={Setting} className="HeaderBarProfile__List__Image" alt="" />
          Настройки
        </NavLink>
        <NavLink to={`/User`} className="HeaderBarProfile__List__Logout">
          <img src={Logout} className="HeaderBarProfile__List__Image " alt="" />
          Выход
        </NavLink>
      </div>
    </>
  );
};
