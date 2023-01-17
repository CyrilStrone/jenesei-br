import React from "react";
import { HeaderGeneral } from "../Molecules/Headergeneral";
import "../Styles/Header.css"
import "../Styles/Burger.css"




export const Header = () => {
  return (
        <div className={`Header`} >
           <HeaderGeneral/>
        </div>
  );
};
