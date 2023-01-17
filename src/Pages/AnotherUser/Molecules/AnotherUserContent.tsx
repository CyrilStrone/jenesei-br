import React from "react";

export interface IAnotherUserContent {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
  Component?: JSX.Element;
}
export const AnotherUserContent = (params: IAnotherUserContent) => {
  

  return (
      <div className={`${params.class} AnotherUserContent`}>{params.Component}</div>
  );
};
