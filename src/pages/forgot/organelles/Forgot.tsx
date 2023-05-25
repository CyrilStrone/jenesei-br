import "../styles/Forgot.css";
import { NavLink } from "react-router-dom";

export const Forgot = () => {

  return (
    <div className="Forgot">
      <div className="Forgot__Block">
        <div className="Forgot__Block__Content">
          <div className="Forgot__Block__Content__Footer">
            <NavLink to={"/Login"} className="Login__Block__Content__Registration">
              Назад
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
