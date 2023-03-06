import React from "react";
import { FooterGeneral } from "../Molecules/FooterGeneral";
import "../Styles/Footer.css"
import JeneseiLogo from "../../../Assets/Footer/Logo.svg"



export const Footer = () => {
  return (
        <div className={`Footer`} >
           <FooterGeneral/>
           <img className="Footer__JenLogo" src={JeneseiLogo} alt="JeneseiLogo" />
        </div>
  );
};
