import '../styles/HeaderBarMenu.css'

import { NavLink } from 'react-router-dom';

import Top from '../../../assets/icon/header/navigation/top-br-full-black.svg'
import Recommendations from '../../../assets/icon/header/navigation/recommendations-br-full-black.svg'
import Subscription from '../../../assets/icon/header/navigation/subscriptions-br-full-black.svg'
import Chat from '../../../assets/icon/header/navigation/сhats-br-full-black.svg'
import Search from '../../../assets/icon/header/navigation/search-br-full-black.svg'

export const HeaderBarMenu = () => {
  return (
    <>
      <div className='HeaderBarMenu__Title'>
        Навигация
      </div>
      <div className='HeaderBarMenu__List'>
        <NavLink to={"/home/top"}>
          <img src={Top} className="HeaderBarMenu__List__Image" alt="" />
          Топ
        </NavLink>
        <NavLink to={"/home/recommendations"}>
          <img src={Recommendations} className="HeaderBarMenu__List__Image" alt="" />
          Рекомендации
        </NavLink>
        <NavLink to={"/home/subscription"}>
          <img src={Subscription} className="HeaderBarMenu__List__Image" alt="" />
          Подписки
        </NavLink>
        <NavLink to={"/chat"}>
          <img src={Chat} className="HeaderBarMenu__List__Image" alt="" />
          Чат
        </NavLink>
        <NavLink to={"/search"}>
          <img src={Search} className="HeaderBarMenu__List__Image" alt="" />
          Поиск
        </NavLink>
      </div>
    </>
  );
};
