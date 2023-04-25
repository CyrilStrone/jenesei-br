import '../styles/HeaderBarMenu.css'
import { NavLink } from 'react-router-dom';
import Top from '../../../assets/header/Top.svg'
import Recommendations from '../../../assets/header/Recommendations.svg'
import Subscriptions from '../../../assets/header/Subscriptions.svg'
import Chat from '../../../assets/header/ChatBlack.svg'
import Search from '../../../assets/header/Search.svg'


export const HeaderBarMenu = () => {
  return (
    <>
      <div className='HeaderBarMenu__Title'>
        Навигация
      </div>
      <div className='HeaderBarMenu__List'>
        <NavLink to={"/Home/Top"}>
          <img src={Top} className="HeaderBarMenu__List__Image" alt="" />
          Топ
        </NavLink>
        <NavLink to={"/Home/Recommendations"}>
          <img src={Recommendations} className="HeaderBarMenu__List__Image" alt="" />
          Рекомендации
        </NavLink>
        <NavLink to={"/Home/Subscriptions"}>
          <img src={Subscriptions} className="HeaderBarMenu__List__Image" alt="" />
          Подписки
        </NavLink>
        <NavLink to={"/Chat"}>
          <img src={Chat} className="HeaderBarMenu__List__Image" alt="" />
          Чат
        </NavLink>
        <NavLink to={"/Search"}>
          <img src={Search} className="HeaderBarMenu__List__Image" alt="" />
          Поиск
        </NavLink>
      </div>
    </>
  );
};
