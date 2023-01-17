import React from "react";

export interface IUserContent {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
  Component?: JSX.Element;
}
export const UserContent = (params: IUserContent) => {
  

  return (
      <div className={`${params.class} UserContent`}>{params.Component}</div>
  );
};
