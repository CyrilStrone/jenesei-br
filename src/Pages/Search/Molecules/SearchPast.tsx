import React from "react";
import { SearchPastBlock } from "../Atomes/SearchPastBlock";

interface ISearchPast{
  userList:any
}

export const SearchPast = (params:ISearchPast) => {
 
  return (
    <div className="SearchPast">
      {params.userList && 
        params.userList.map((e:any, i:any) => (
          <SearchPastBlock firstName={e.firstName} lastName={e.lastName} email={e.email} id={e.id}/>
        ))
      }
    </div>
  );
};
