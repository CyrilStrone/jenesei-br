// import { useStore } from "effector-react";
// import { Link } from "react-router-dom";
// import { $userAnotherStackes } from "../../../../src/Common/hooksAnotherUser";

export interface IAnotherUserContentStackes {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
  setChangeCheck: React.Dispatch<React.SetStateAction<boolean>>;
  changeCheck?:boolean
}
export const AnotherUserContentStackes = (params: IAnotherUserContentStackes) => {
  // const UserAnotherStackes = useStore($userAnotherStackes);
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
