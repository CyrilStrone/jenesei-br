import '../styles/HeaderBarProfile.css'
import { useStore } from 'effector-react';
import { Link, NavLink } from 'react-router-dom';
import { $userValue } from '../../functions/hooks';
import Logout from '../../../assets/icon/header/menu/exit-jenesei-red-color.svg'
import User from '../../../assets/icon/header/menu/profile-br-full-black.svg'
import Setting from '../../../assets/icon/header/menu/settings-br-product.svg'
import Publication from '../../../assets/icon/header/menu/write-a-publication-br-full-black.svg'
import PublicationList from '../../../assets/icon/header/menu/publications-br-full-black.svg'
import Subscriptions from '../../../assets/icon/header/menu/subscriptions-br-full-black.svg'
import Subscribers from '../../../assets/icon/header/menu/subscribers-br-full-black.svg'
import Security from '../../../assets/icon/header/menu/security-br-full-black.svg'
import { UserLogout } from '../../functions/axiosInstance';
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
          <img src={Subscriptions} className="HeaderBarProfile__List__Image" alt="" />
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
        <a onClick={UserLogout} className="HeaderBarProfile__List__Logout">
          <img src={Logout} className="HeaderBarProfile__List__Image " alt="" />
          Выход
        </a>
      </div>
    </>
  );
};
