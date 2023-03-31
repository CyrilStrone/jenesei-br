import "../styles/Header.css"
import "../styles/Burger.css"
import { HeaderGeneral } from "../molecules/HeaderGeneral";

export const Header = () => {
  return (
        <div className={`Header`} >
           <HeaderGeneral/>
        </div>
  );
};
