import { HeaderGeneral } from "../molecules/Headergeneral";
import "../styles/Header.css"
import "../styles/Burger.css"




export const Header = () => {
  return (
        <div className={`Header`} >
           <HeaderGeneral/>
        </div>
  );
};
