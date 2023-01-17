import { useStore } from "effector-react";
import React from "react";
import { Link } from "react-router-dom";
import { $userAuthorization, $userName } from "../../../../Common/hooks";

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
  var newuserName = userName.replace(/ /g, "-");
  return (
    <>
      {params.link == "User" ? (
        userAuthorization ? (
          <Link
            className={`${params.class} FooterNav`}
            to={`${params.link}/${newuserName}`}
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
          to={params.link}
          key={params.indexlink}
        >
          {params.text}
        </Link>
      )}
    </>
  );
};
