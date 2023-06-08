import "../styles/Major.css";
import { NavLink } from "react-router-dom";
import BigLogo from '../../../assets/major/BigLogo.png';

export const Major = () => {
    return (
        <div className="Major">
            <div className="Major__Animated">
                <img src={BigLogo} className="Major__Animated__Logo" alt="" />
            </div>
            <div className="Major__Name">
                Business Roulette
            </div>
            <NavLink to={"/authorization"} className="Major__Login">
                Вход
            </NavLink>
            <div className="Major__Description">
                Лучшая социальная сеть для молниеносного поиска и установления деловых контактов.
            </div>
            <div className="Major__BestFeatures">
                <div className="Major__BestFeatures__Item">
                    <div className="Major__BestFeatures__Item__Title">
                        Business Roulette — это круто
                    </div>
                    <div className="Major__BestFeatures__Item__Description">
                        Business Roulette — это инновационное веб-приложение, предназначенное для установления профессиональных контактов и расширения деловой сети пользователей. Приложение разработано с учетом потребностей предпринимателей, бизнесменов, сотрудников маркетинга, фрилансеров и всех, кто стремится к развитию своего бизнеса или карьеры.
                    </div>
                </div>
                <div className="Major__BestFeatures__Item">
                    <div className="Major__BestFeatures__Item__Title">
                        Business Roulette — это современно
                    </div>
                    <div className="Major__BestFeatures__Item__Description">
                        Пользуйся Business Roulette, будь современным, молодым, крутым, офигенным, шикарным, красивым, умным, клевым!
                    </div>
                </div>
            </div>
        </div>
    );
};
