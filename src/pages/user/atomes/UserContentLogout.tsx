import { useStore } from "effector-react";
import { UserLogout } from "../../../ui/functions/AccessToken";
import { $userAuthorization } from "../../../ui/functions/Hooks";
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
