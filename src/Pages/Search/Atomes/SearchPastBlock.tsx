import React from "react";

export interface ISearchPastBlock {
  id?: number;
  Name?: string;
  Job?: string;
  Link?: string;
  Picture?: string;
  Stackes?: any;
  onClick?: () => void;

  firstName:string
  lastName:string
  email:string
}

export const SearchPastBlock = (params: ISearchPastBlock) => {
  let handleClick = (e:any,b:any) => {
   
    
  };
  return (
    <div
      className="SearchPastBlock"
      onClick={() => handleClick(params.firstName,params.lastName)}
    >
      <div className="SearchPastBlock_Picture-Job">
        <div className="SearchPastBlock_Picture">
          {/* <img src={params.Picture} alt="Картинка" /> */}
        </div>
        {/* <div className="SearchPastBlock_Job">{params.Job}</div> */}
      </div>
      <div className="SearchPastBlock_Name">{params.firstName}</div>
      <div className="SearchPastBlock_Stackes">
      {params.lastName}
        {/* {params.Stackes.map((e: any,i:any) => (
          <div key={i} className="SearchPastBlock_Stackes-Stacke">{e}</div>
        ))} */}
      </div>
    </div>
  );
};
