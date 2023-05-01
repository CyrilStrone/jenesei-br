import '../styles/HeaderBarProfile.css'
import User from '../../../assets/header/User.svg'
import Setting from '../../../assets/header/Setting.svg'
import Publication from '../../../assets/header/Publication.svg'
import PublicationList from '../../../assets/header/PublicationList.svg'
import Subscription from '../../../assets/header/Subscription.svg'
import Subscribers from '../../../assets/header/Subscribers.svg'
import Logout from '../../../assets/header/Logout.svg'

import { NavLink } from 'react-router-dom';
import { $userValue } from '../../../ui/functions/Hooks';
import { useStore } from 'effector-react';
import { UserLogout } from '../../functions/AccessToken'

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
        <NavLink to={`/UserSubscription`}>
          <img src={Subscription} className="HeaderBarProfile__List__Image" alt="" />
          Подписки
        </NavLink>
        <NavLink to={`/UserSubscribers`}>
          <img src={Subscribers} className="HeaderBarProfile__List__Image" alt="" />
          Подписчики
        </NavLink>
        <NavLink to={`/UserPublicationList`}>
          <img src={PublicationList} className="HeaderBarProfile__List__Image" alt="" />
          Публикации
        </NavLink>
        <div className='HeaderBarProfile__List__Title'>
          Еще
        </div>
        <NavLink to={`/UserPublicationWrite`}>
          <img src={Publication} className="HeaderBarProfile__List__Image" alt="" />
          Написать публикацию
        </NavLink>
        <NavLink to={`/UserSetting`} className="HeaderBarProfile__List__Settings">
          <img src={Setting} className="HeaderBarProfile__List__Image" alt="" />
          Настройки
        </NavLink>
        <NavLink to={`/Login`} onClick={UserLogout} className="HeaderBarProfile__List__Logout">
          <img src={Logout} className="HeaderBarProfile__List__Image " alt="" />
          Выход
        </NavLink>
      </div>
    </>
  );
};
