import React from "react";
import "../Styles/Major.css";
import { Link } from "react-router-dom";
import Picture from '../../../Common/Assets/Major/Uncle with dog.svg';

export const Major = () => {

  return (
    <div className="Major">
      <div className="Major_Title">
        <div className="Major_Title-Big">
        {`Станьте успешнее`}<br/>{`вместе с нами`}
        </div>
        <div className="Major_Title-min">
        Сайт для поиска и установления деловых контактов,<br/>просто зарегестрируйтесь на нашем сервисе.
        </div>
        <div className="Major_Title-Button">
        <Link
          className={`Major_Link`}
          to={"/Registration"}
        >
          Регистрация
        </Link>
        </div>
      </div>
      <div className="Major_Picture">
      <img src={Picture} alt="Картинка" />
      </div>
    </div>
  );
};
