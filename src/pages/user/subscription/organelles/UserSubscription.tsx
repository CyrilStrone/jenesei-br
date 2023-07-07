import { useStore } from "effector-react";
import { $userValue } from "../../../../ui/functions/hooks";
import "../styles/UserSubscription.css";

export const UserSubscription = () => {
  const userValue = useStore($userValue);
  return (
    <div className="UserSubscription UserSetting__Blocks">
      <div className="UserSetting__Blocks__Title">
        Мои подписки
      </div>
    </div>
  );
};
