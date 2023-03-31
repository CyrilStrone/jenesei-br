import { useStore } from "effector-react";
// import { Link } from "react-router-dom";

export interface IUserContentPicture {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const UserContentPicture = (params: IUserContentPicture) => {
  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>
  
  //   </Link>
  // };
 

  return (
     <div className="UserContentPicture_Picture">
     </div>
  );
};
