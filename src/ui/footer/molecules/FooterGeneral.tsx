import { NavLink } from "react-router-dom";

export const FooterGeneral = () => {
  return (
    <div className="FooterGeneral">
      <div className="FooterGeneral__Info">
        <NavLink to={"/"} className="FooterGeneral__Info__Title">
          Команда
        </NavLink>
        <div className="FooterGeneral__Info__Line">
        </div>
        <NavLink to={"/"} className="FooterGeneral__Info__Title">
          Политика конфиденциальности
        </NavLink>
        <div className="FooterGeneral__Info__Line">
        </div>
        <NavLink to={"/"} className="FooterGeneral__Info__Title">
          Куки
        </NavLink>
      </div>
      <div className="FooterGeneral__Copyright ">
        Copyright © 2023 Jenesei Inc. All rights reserved.
      </div>
    </div>
  );
};