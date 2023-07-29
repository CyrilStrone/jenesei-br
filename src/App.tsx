import { Navigate, Route, Routes } from "react-router-dom";
import { useStore } from "effector-react";

import { $accessToken, setAccessToken, setRememberCheck } from "./ui/functions/accessToken";
import { RememberRefreshName, accessTokenName } from "./ui/functions/axiosInstance";
import { AppGeneral } from "./ui/appGeneral/organelles/AppGeneral";

import Notifications from "react-push-notification/dist/notifications/Notifications";

import { Major } from "./pages/major/organelles/Major";
import { Registration } from "./pages/registration/organelles/Registration";
import { Login } from "./pages/login/organelles/Login";
import { Forgot } from "./pages/forgot/organelles/Forgot";
import { Chat } from "./pages/chat/organelles/Chat";
import { Search } from "./pages/search/organelles/Search";
import { $userValue } from "./ui/functions/hooks";
import { UserMore } from "./pages/user/index/organelles/userMore";
import { UserLogin } from "./pages/user/login/organelles/User";
import { UserSubscription } from "./pages/user/subscription/organelles/UserSubscription";
import { UserSubscribers } from "./pages/user/subscribers/organelles/UserSubscribers";
import { UserSetting } from "./pages/user/setting/organelles/UserSetting";
import { UserPublicationWrite } from "./pages/user/publication/write/organelles/UserPublicationWrite";
import { UserPublicationList } from "./pages/user/publication/list/organelles/UserPublicationList";
import { HomeMore } from "./pages/home/index/organelles/HomeMore";
import { HomeRecommendation } from "./pages/home/recommendation/organelles/HomeRecommendation";
import { HomeTop } from "./pages/home/top/organelles/HomeTop";
import { HomeSubscription } from "./pages/home/subscription/organelles/HomeSubscription";
import { UserSecurity } from "./pages/user/security/organelles/UserSecurity";

export function App() {
  const accessToken = useStore($accessToken);
  const userValue = useStore($userValue);
  if (localStorage.getItem(accessTokenName)?.length) {
    setAccessToken(localStorage.getItem(accessTokenName) || "")
  }
  if (localStorage.getItem(RememberRefreshName)?.length) {
    setRememberCheck((localStorage.getItem(RememberRefreshName)?.length && localStorage.getItem(RememberRefreshName) || "false"))
  }
  return (
    <div className="App">
      <Notifications />
      <Routes>
        <Route path="/" element={<AppGeneral />}>
          {(accessToken && userValue) ?
            <>
              <Route index element={<Navigate to="/home/top" />} />
              <Route path="*" element={<Navigate to="/home/top" />} />
              <Route path="chat">
                <Route index element={<Chat />} />
                <Route path=":id" element={<Chat />} />
              </Route>
              <Route path="search" element={<Search />} />
              <Route path="user" element={<UserMore />}>
                <Route index element={<Navigate to="/user/login/" />} />
                <Route path="*" element={<Navigate to="/user/login/" />} />
                <Route path="subscription" element={<UserSubscription />} />
                <Route path="subscribers" element={<UserSubscribers />} />
                <Route path="setting" element={<UserSetting />} />
                <Route path="security" element={<UserSecurity />} />
                <Route path="publication">
                  <Route path="*" element={<Navigate to="/user/publication/write" />} />
                  <Route path="write" element={<UserPublicationWrite />} />
                  <Route path="list" element={<UserPublicationList />} />
                </Route>
                <Route path="login">
                  <Route path=":login" element={<UserLogin />} />
                </Route>
              </Route>
              <Route path="home" element={<HomeMore />}>
                <Route path="*" element={<Navigate to="/home/top" />} />
                <Route path="recommendations" element={<HomeRecommendation />} />
                <Route path="top" element={<HomeTop />} />
                <Route path="subscription" element={<HomeSubscription />} />
              </Route>
            </> :
            <>
              <Route index element={<Major />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="authorization" element={<Login />} />
              <Route path="registration" element={<Registration />} />
              <Route path="forgot" element={<Forgot />} />
              <Route path="user" element={<UserMore />}>
                <Route path="login">
                  <Route path=":login" element={<UserLogin />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
              </Route>
            </>
          }
        </Route>
      </Routes>
    </div>
  );
}
