import React from "react";
import { setAnotheUserId, setAnotheUserName } from "../../../Common/hooksAnotherUser";
import { GetDeleteUser } from "../Logics/DeleteUser";

export interface ISearchPastBlock {
  Name?: string;
  Job?: string;
  Link?: string;
  Picture?: string;
  Stackes?: any;
  onClick?: () => void;

  id: number;
  firstName: string
  lastName: string
  email: string
}

export const SearchPastBlock = (params: ISearchPastBlock) => {
  let handleClick = () => {
    setAnotheUserId(params.id)
    setAnotheUserName(params.firstName + " " + (params.lastName))
  };
  const requestDeleteUser= async (id:number) => {
    await GetDeleteUser({id:id});
}
  return (
    <div
      className="SearchPastBlock"
    >
      <div className="SearchPastBlock__Name" onClick={() => handleClick()}>
        <div className="SearchPastBlock__Name__firstName">
          {params.firstName}
        </div>
        <div className="SearchPastBlock__Name__lastName">
          {params.lastName}
        </div>
      </div>
      <div className="SearchPastBlock__id">
        id:{params.id}
      </div>
      <div className="SearchPastBlock__id" onClick={()=>requestDeleteUser(params.id)}>
      Удалить
      </div>
    </div>
  );
};
