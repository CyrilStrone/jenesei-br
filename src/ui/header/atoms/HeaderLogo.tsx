import '../styles/HeaderLogo.css'

import { Link } from "react-router-dom";

import logo from "../../../assets/logo/LogoMin.jpg";

export const HeaderLogo = () => {
  return (
    <Link to={`/home/top`} className={`HeaderLogo`}>
      <img src={logo} className={`HeaderLogo__Image`} alt="" />
      <div className="HeaderLogo__Title">
        <div className="HeaderLogo__Title__BLue">
          Business
        </div>
        <div className="HeaderLogo__Title__Black">
          Roulette
        </div>
      </div>
    </Link>
  );
};
