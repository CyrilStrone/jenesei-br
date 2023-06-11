import { Outlet, useParams } from "react-router-dom";
import { UserMenu } from "../../../../ui/userMenu/molecules/UserMenu";

export const UserMore = () => {
  const { login } = useParams();
  return (
    login ?
      <Outlet />
      :
      <div className="UserMore">
        <UserMenu />
        <Outlet />
      </div>
  );
};
