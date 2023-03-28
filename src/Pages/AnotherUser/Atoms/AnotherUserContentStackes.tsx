// import { useStore } from "effector-react";
import React from "react";
// import { Link } from "react-router-dom";
// import { $AnotheUserStackes } from "../../../../src/Common/hooksAnotherUser";

export interface IAnotherUserContentStackes {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
  setChangeCheck?: React.Dispatch<React.SetStateAction<boolean>>;
  changeCheck?:boolean
}
export const AnotherUserContentStackes = (params: IAnotherUserContentStackes) => {
  // const AnotheUserStackes = useStore($AnotheUserStackes);
  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>

  //   </Link>
  // };

  return (
    <div className="AnotherUserContentStackes" onClick={()=>{params.setChangeCheck(!params.changeCheck)}}>
        изменить
    </div>
  );
};
