import { useStore } from "effector-react";
import React from "react";
import { $usersPastTop } from "../../../Common/hooksHome";
import { SearchPastBlock, ISearchPastBlock } from "../Atomes/SearchPastBlock";

export const SearchPast = () => {
  const usersPastTop = useStore($usersPastTop);
  let SearchPastArray: ISearchPastBlock[] = [];
  usersPastTop.map((e: any) => {
    SearchPastArray.push({ Picture: e.picture, Name: e.name, Job: e.job, Stackes: e.Stackes ,id:(e.id)},)
  })
  return (
    <div className="SearchPast">
      {
        SearchPastArray.map((e, i) => (
          <SearchPastBlock Picture={e.Picture} Name={e.Name} Job={e.Job} Stackes={e.Stackes} id={e.id}/>
        ))
      }
    </div>
  );
};
