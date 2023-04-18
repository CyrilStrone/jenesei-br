import { Link } from "react-router-dom";
import '../styles/HeaderLogo.css'
import logo from "../../../common/assets/logo/LogoMin.jpg";


export const HeaderLogo = () => {
  return (
    <Link to={`/Home/Top`} className={`HeaderLogo`}>
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
