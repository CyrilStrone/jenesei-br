import { Outlet, useLocation } from "react-router-dom";
import { useStore } from "effector-react";
import { useRef } from "react";
import { usePWAInstall } from "react-use-pwa-install";

import { Header } from "../../header/organelles/Header";
import { CustomValidity } from "../../customValidity/organelles/CustomValidity";
import { Footer } from "../../footer/organelles/Footer";
import { $checkPublicationWriteOnDrag } from "../../functions/hooks";

import '../styles/AppGeneral.css'
import '../styles/Wallpaper.css'
import '../styles/PWA.css'

import useIsMobileDevice from "../../functions/useIsMobileDevice";

export const AppGeneral = () => {
    const isMobileDevice = useIsMobileDevice();
    const location = useLocation();
    const AppGeneralRef = useRef<HTMLDivElement>(null);
    const checkPublicationWriteOnDrag = useStore($checkPublicationWriteOnDrag);
    const backgroundLocationPublicationWrite = "/user/publication/write"
    const install = usePWAInstall()

    return (
        <div ref={AppGeneralRef} className="AppGeneral">
            {
                isMobileDevice && install &&
                <div className="AppGeneral__PWA Block__Active" onClick={install}>Добавить Business Roulette на главный экран</div>
            }
            {
                location.pathname === backgroundLocationPublicationWrite &&
                <div className="AppGeneral__Wallpaper-PublicationWrite" style={{
                    opacity: `${checkPublicationWriteOnDrag ? "1" : "0"}`
                }}>
                </div>
            }
            {
                isMobileDevice ?
                    <div className="AppGeneral__Wallpaper-Phone"></div>
                    :
                    <div className="AppGeneral__Wallpaper-PC"></div>
            }
            <Header />
            <div className="AppGeneral__Actual" >
                <CustomValidity />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};