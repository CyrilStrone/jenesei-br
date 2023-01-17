import React from "react";
import { Link } from "react-router-dom";

export interface IHeaderlogo {
  id?: string;
  class?: string;
  link?: string;
  indexlink?: string;
  img?: string
}
export const Headerlogo = (params: IHeaderlogo) => {
  return (
    <Link to={params.link} key={params.indexlink}>
      {
        <div className={`${params.class} Headerlogo`} >
          <img src={params.img} alt="Картинка" />
        </div>
      }
    </Link>
  );
};
