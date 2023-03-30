import { FooterGeneral } from "../molecules/FooterGeneral";
import "../styles/Footer.css"
import JeneseiLogo from "../../../common/assets/footer/Logo.svg"



export const Footer = () => {
  return (
        <div className={`Footer`} >
           <FooterGeneral/>
           <img className="Footer__JenLogo" src={JeneseiLogo} alt="JeneseiLogo" />
        </div>
  );
};
