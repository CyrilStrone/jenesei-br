import "../styles/Major.css";
import BigLogo from '../../../assets/major/BigLogo.png';
import { NavLink } from "react-router-dom";


export const Major = () => {

    return (
        <div className="Major">
            <div className="Major__Animated">
                <img src={BigLogo} className="Major__Animated__Logo" alt="" />
            </div>
            <div className="Major__Name">
                Business Roulette
            </div>
            <NavLink to={"/Login"} className="Major__Login">
                Вход
            </NavLink>
            <div className="Major__Description">
                Лучшая социальная сеть для молниеносного поиска и установления деловых контактов.
            </div>
            <div className="Major__BestFeatures">
                <div className="Major__BestFeatures__Item">
                    <div className="Major__BestFeatures__Item__Title">
                        Easily access apps and data from your iPhone on the web
                    </div>
                    <div className="Major__BestFeatures__Item__Description">
                        iCloud is essential for keeping personal information from your devices safe, up to date, and available wherever you are. At iCloud.com, you can access your photos, files, and more from any web browser. Changes you make will sync to your iPhone and other devices, so you’re always up to date.
                    </div>
                </div>
                <div className="Major__BestFeatures__Item">
                    <div className="Major__BestFeatures__Item__Title">
                        More storage plus additional features to protect your privacy
                    </div>
                    <div className="Major__BestFeatures__Item__Description">
                        Upgrade to iCloud+ to get more storage and additional features like iCloud Private Relay, Hide My Email, and HomeKit Secure Video. You can even share your subscription with your family. Learn more at apple.com/icloud.
                    </div>
                </div>
            </div>
        </div>
    );
};
