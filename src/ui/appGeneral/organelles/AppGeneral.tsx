import { Outlet } from "react-router-dom";
import { Header } from "../../header/organelles/Header";
import { CustomValidity } from "../../customValidity/organelles/CustomValidity";
import { Footer } from "../../footer/organelles/Footer";
import '../styles/AppGeneral.css'

export const AppGeneral = () => {
    return (
        <div className="AdminMore body">
            <div className="App__PhoneWallpaper"></div>
            <Header />
            <div className="App_Actual">
                <CustomValidity />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};