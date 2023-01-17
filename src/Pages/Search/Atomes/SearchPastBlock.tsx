import React from "react";
import { useNavigate } from "react-router-dom";
import { setAnotheUserId } from "../../../Common/hooksAnotherUser";

export interface ISearchPastBlock {
  id?: number;
  Name?: string;
  Job?: string;
  Link?: string;
  Picture?: string;
  Stackes?: any;
  onClick?: () => void;
}

export const SearchPastBlock = (params: ISearchPastBlock) => {
  let navigate = useNavigate();
  let handleClick = (e:any,b:any) => {
    var newuserName = e.replace(/ /g, "-");
    setAnotheUserId(Number(b))
      navigate(`/AnotherUser/${newuserName}`);
  };
  return (
    <div
      className="SearchPastBlock"
      id={params.id.toString()}
      onClick={() => handleClick(params.Name,params.id)}
    >
      <div className="SearchPastBlock_Picture-Job">
        <div className="SearchPastBlock_Picture">
          <img src={params.Picture} alt="Картинка" />
        </div>
        <div className="SearchPastBlock_Job">{params.Job}</div>
      </div>
      <div className="SearchPastBlock_Name">{params.Name}</div>
      <div className="SearchPastBlock_Stackes">
        {params.Stackes.map((e: any) => (
          <div className="SearchPastBlock_Stackes-Stacke">{e}</div>
        ))}
      </div>
    </div>
  );
};
