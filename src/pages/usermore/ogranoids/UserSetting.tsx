import { UserMenu } from "../molecules/UserMenu";
import "../styles/UserSetting.css";

export const UserSetting = () => {

  return (
    <div className="UserMore">
      <UserMenu />
      <div className="UserSetting">
        <div className="UserSetting__Title">
          Персональная информация
        </div>
      </div>
    </div>
  );
};
