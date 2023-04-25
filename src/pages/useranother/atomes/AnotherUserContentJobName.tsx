import { useStore } from "effector-react";
import { $userAnotherValue } from "../../../ui/functions/UserAnotherHooks";
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
  const UserAnotherValue = useStore($userAnotherValue);


  return (
    
    <div className="AnotherUserContentJobName_NameAndJob">
      <div className="AnotherUserContentJobName_Name">{UserAnotherValue.firstName} {UserAnotherValue.lastName}</div>
    </div>
    
  );
};
