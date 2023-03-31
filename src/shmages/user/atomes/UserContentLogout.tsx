import { useStore } from "effector-react";
import { UserLogout } from "../../../scommon/AccessToken";
import { $userAuthorization } from "../../../scommon/UserHooks";
export interface IUserContentLogout {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const UserContentLogout = (params: IUserContentLogout) => {
  const userAuthorization = useStore($userAuthorization);

  return (
    <button className={`UserContentLogout_Buttom`} >
      {userAuthorization ? <div onClick={UserLogout}>Выход</div> : <div>Вход</div>}
    </button>
  );
};
