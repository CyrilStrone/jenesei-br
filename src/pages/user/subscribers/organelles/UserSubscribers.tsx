import { UserSubscribersChildren } from "../molecules/UserSubscribersChildren";
import "../styles/UserSubscribers.css";

export const UserSubscribers = () => {

  return (
    <div className="UserSubscribers UserSetting__Blocks">
      <div className="UserSetting__Blocks__Title">
        Мои подписчики
      </div>
      <UserSubscribersChildren />
    </div>
  );
};
