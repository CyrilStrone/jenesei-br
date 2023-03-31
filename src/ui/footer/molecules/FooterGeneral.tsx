import logo from "../../../common/assets/logo/LogoMin.png";

import { useStore } from "effector-react";
import { Link } from "react-router-dom";
import { $userAuthorization } from "../../../scommon/UserHooks";
import { FooterNav, IFooterNav } from "../atomes/FooterrNav";
import { Pages, PagesUser } from "../../../pages/Routes";

export const FooterGeneral = () => {
  const userAuthorization = useStore($userAuthorization);

  let FooterNavArray: IFooterNav[] = [];
  let FooterNavUserArray: IFooterNav[] = [];

  Pages.map((page: any, index: any) => [
    FooterNavArray.push({
      link: page.link,
      indexlink: index,
      class: "HeaderNav_Elem",
      authorization: userAuthorization,
      text: page.title,
    }),
  ]);
  PagesUser.map((page: any, index: any) => [
    FooterNavUserArray.push({
      link: page.link,
      indexlink: index,
      class: "HeaderNav_Elem",
      authorization: userAuthorization,
      text: page.title,
    }),
  ]);

  return (
    <div className={`FooterGeneral`}>
      <div className={`FooterGeneral_Logo`}>
        <Link to={`Home`} className={`FooterGeneral_Logo_Title_Style-BLue`}>
          Business
        </Link>
        <Link to={`Home`} className={`FooterGeneral_Logo_Title_Style-Black`}>
          Roulette
        </Link>
      </div>
      <div className={`FooterGeneral_Logo_Pictures`}>
        <Link to={`Home`} className={`FooterGeneral_Logo_Pictures_img`}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className={`FooterGeneral_Navs`}>
        {FooterNavArray.map((e, i) => (
          <FooterNav
            key={e.indexlink}
            link={e.link}
            indexlink={e.indexlink}
            class={e.class}
            authorization={e.authorization}
            text={e.text}
          />
        ))}
      </div>
      <div className={`FooterGeneral_User_Navs`}>
        {FooterNavUserArray.map((e, i) => (
          <FooterNav
            key={e.indexlink}
            link={e.link}
            indexlink={e.indexlink}
            class={e.class}
            authorization={e.authorization}
            text={e.text}
          />
        ))}
      </div>
      <div className="FooterGeneral_About">
        <div className="FooterGeneral_About_mail">business@roulette.com</div>
        <div className="FooterGeneral_About_mail">business@roulette.ru</div>
        <div className="FooterGeneral_About_phone">+79504291970</div>
      </div>
    </div>
  );
};
