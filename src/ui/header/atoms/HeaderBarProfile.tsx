import '../styles/HeaderBarProfile.css'
import { useStore } from 'effector-react';
import { Link, NavLink } from 'react-router-dom';
import { $userValue } from '../../functions/Hooks';
import { UserLogout } from '../../functions/AccessToken'
import Logout from '../../../assets/header/Logout.svg'
import User from '../../../assets/header/User.svg'
import Setting from '../../../assets/header/Setting.svg'
import Publication from '../../../assets/header/Publication.svg'
import PublicationList from '../../../assets/header/PublicationList.svg'
import Subscription from '../../../assets/header/Subscription.svg'
import Subscribers from '../../../assets/header/Subscribers.svg'
import Security from '../../../assets/header/Security.svg'
export const HeaderBarProfile = () => {
  const userValue = useStore($userValue);
  return (
    <>
      <div className='HeaderBarProfile__Title'>
        <div className='HeaderBarProfile__Title__Header'>
          {userValue.user.firstName + " " + userValue.user.lastName}
        </div>
        <div className='HeaderBarProfile__Title__Mail'>
          {userValue.mail}
        </div>
      </div>
      <div className='HeaderBarProfile__List'>
        <div className='HeaderBarProfile__List__Title'>
          Основные
        </div>
        <Link to={`/user/login/${userValue.user.login}`}>
          <img src={User} className="HeaderBarProfile__List__Image" alt="" />
          Профиль
        </Link>
        <NavLink to={`/user/subscription`}>
          <img src={Subscription} className="HeaderBarProfile__List__Image" alt="" />
          Подписки
        </NavLink>
        <NavLink to={`/user/subscribers`}>
          <img src={Subscribers} className="HeaderBarProfile__List__Image" alt="" />
          Подписчики
        </NavLink>
        <NavLink to={`/user/publication/list`}>
          <img src={PublicationList} className="HeaderBarProfile__List__Image" alt="" />
          Публикации
        </NavLink>
        <div className='HeaderBarProfile__List__Title'>
          Еще
        </div>
        <NavLink to={`/user/publication/write`}>
          <img src={Publication} className="HeaderBarProfile__List__Image" alt="" />
          Написать публикацию
        </NavLink>
        <NavLink to={`/user/security`}>
          <img src={Security} className="HeaderBarProfile__List__Image" alt="" />
          Безопасность
        </NavLink>
        <NavLink to={`/user/setting`} className="HeaderBarProfile__List__Settings">
          <img src={Setting} className="HeaderBarProfile__List__Image" alt="" />
          Настройки
        </NavLink>
        <NavLink to={`/authorization`} onClick={UserLogout} className="HeaderBarProfile__List__Logout">
          <img src={Logout} className="HeaderBarProfile__List__Image " alt="" />
          Выход
        </NavLink>
      </div>
    </>
  );
};
