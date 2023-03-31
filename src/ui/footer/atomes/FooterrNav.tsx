import { useStore } from "effector-react";
import { Link } from "react-router-dom";
import { $userAuthorization, $userName } from "../../../scommon/UserHooks";

export interface IFooterNav {
  id?: string;
  text?: string;
  value?: string;
  class?: string;
  authorization?: boolean;
  link?: string;
  indexlink?: string;
}

export const FooterNav = (params: IFooterNav) => {
  const userAuthorization = useStore($userAuthorization);
  const userName = useStore($userName);
  return (
    <>
      {params.link == "User" ? (
        userAuthorization ? (
          <Link
            className={`${params.class} FooterNav`}
            to={`${params.link}/${userName}`}
            key={params.indexlink}
            style={params.authorization == false ? { display: "none" } : {}}
          >
            {params.text}
          </Link>
        ) : null
      ) : params.link == "Login" ? (
        userAuthorization ? null : (
          <Link
            className={`${params.class} FooterNav`}
            to={params.link}
            key={params.indexlink}
          >
            {params.text}
          </Link>
        )
      ) : params.link == "Registration" ? (
        userAuthorization ? null : (
          <Link
            className={`${params.class} FooterNav`}
            to={params.link}
            key={params.indexlink}
          >
            {params.text}
          </Link>
        )
      ) : (
        <Link
          className={`${params.class} FooterNav`}
          to={params.link || ""}
          key={params.indexlink}
        >
          {params.text}
        </Link>
      )}
    </>
  );
};
