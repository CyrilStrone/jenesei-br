import { useStore } from "effector-react";
import { $userName } from "../../../common/UserHooks";
// import { Link } from "react-router-dom";

export interface IUserContentJobName {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const UserContentJobName = (params: IUserContentJobName) => {
  const userName = useStore($userName);

  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>

  //   </Link>
  // };

  return (
    <div className="UserContentJobName_NameAndJob">
      <div className="UserContentJobName_Name">{userName}</div>
    </div>
  );
};
