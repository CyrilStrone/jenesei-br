import { useStore } from "effector-react";
// import { Link } from "react-router-dom";

export interface IUserContentStackes {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const UserContentStackes = (params: IUserContentStackes) => {
  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>

  //   </Link>
  // };

  return (
    <>
      <div className="UserContent_StackesUser_Title">
        Стэк
      </div>
      <div className="UserContent_StackesUser_Stackes">

      </div>
    </>
  );
};
