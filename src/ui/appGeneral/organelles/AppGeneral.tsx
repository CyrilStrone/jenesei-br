import { Outlet, useLocation } from "react-router-dom";
import { useStore } from "effector-react";
import { useRef } from "react";
import { usePWAInstall } from "react-use-pwa-install";

import { Header } from "../../header/organelles/Header";
import { CustomValidity } from "../../customValidity/organelles/CustomValidity";
import { Footer } from "../../footer/organelles/Footer";
import { $checkPublicationWriteOnDrag } from "../../functions/hooks";

import Background from '../../../assets/wallpaper/publication-background.svg'

import '../styles/AppGeneral.css'

export const AppGeneral = () => {
    const location = useLocation();
    const AppGeneralRef = useRef<HTMLDivElement>(null);
    const checkPublicationWriteOnDrag = useStore($checkPublicationWriteOnDrag);
    const backgroundLocationPublicationWrite = "/user/publication/write"
    const install = usePWAInstall()

    return (
        <div ref={AppGeneralRef} className="AppGeneral body">
            {install && <div className="AppGeneral__PWA Block__Active" onClick={install}>Добавить Business Roulette на главный экран</div>}
            {location.pathname === backgroundLocationPublicationWrite && <div className="AppGeneral__Background" style={{
                backgroundImage: `url(${Background})`,
                width: `${AppGeneralRef?.current?.offsetWidth}px`,
                height: `${AppGeneralRef?.current?.offsetHeight}px`,
                opacity: `${checkPublicationWriteOnDrag ? "1" : "0"}`
            }}></div>}
            <div className="App__PhoneWallpaper"></div>
            <Header />
            <div className="App_Actual" >
                <CustomValidity />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};