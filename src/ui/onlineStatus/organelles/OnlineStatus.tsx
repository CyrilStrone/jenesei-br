import { useStore } from "effector-react";
import React from "react";

import { $userSocketInterlocutorStatus } from "../../functions/createSocketChat";

import "../styles/OnlineStatus.css";

interface IOnlineStatus {
  login: any
}
export const OnlineStatus = React.memo((params: IOnlineStatus) => {
  const userSocketInterlocutorStatus = useStore($userSocketInterlocutorStatus);
  return (
    userSocketInterlocutorStatus && userSocketInterlocutorStatus.includes(params.login) && <div className="OnlineStatus" ></div>
  );
});
