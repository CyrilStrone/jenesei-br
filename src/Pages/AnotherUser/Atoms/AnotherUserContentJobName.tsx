import { useStore } from "effector-react";
import React from "react";
import { $anotheUserValue } from "../../../Common/hooksAnotherUser";
// import { Link } from "react-router-dom";

export interface IAnotherUserContentJobName {
  id?: string
  class?: string
  authorization?: boolean
  typeBlock?: string
  setChangeCheck?: React.Dispatch<React.SetStateAction<boolean>>;
  changeCheck?:boolean
}
export const AnotherUserContentJobName = (params: IAnotherUserContentJobName) => {
  const anotheUserValue = useStore($anotheUserValue);


  return (
    
    <div className="AnotherUserContentJobName_NameAndJob">
      <div className="AnotherUserContentJobName_Name">{anotheUserValue.firstName} {anotheUserValue.lastName}</div>
    </div>
    
  );
};
