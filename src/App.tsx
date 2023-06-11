import "./App.css";
import "./Font.css";
import "./ui/generalStyles/Blocks.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "effector-react";
import { $accessToken, UserLogout, setAccessToken, setRememberCheck } from "./ui/functions/AccessToken";
import { RememberRefreshName, accessTokenName } from "./ui/functions/AxiosInstance";
import { Header } from "./ui/header/organelles/Header";
import { Footer } from "./ui/footer/organelles/Footer";
import { Major } from "./pages/major/organelles/Major";
import { Registration } from "./pages/registration/organelles/Registration";
import { Login } from "./pages/login/organelles/Login";
import { Forgot } from "./pages/forgot/organelles/Forgot";
import { Chat } from "./pages/chat/organelles/Chat";
import { Search } from "./pages/search/organelles/Search";
import { CustomValidity } from "./ui/customValidity/organelles/CustomValidity";
import { InUser } from "./ui/functions/InUser";
import { $userValue, setUserValue } from "./ui/functions/Hooks";
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

export async function requestUser() {
  try {
    let result = await InUser();
    if (result) {
      setUserValue(result)
    }
  } catch {

  }
}

export function App() {
  const accessToken = useStore($accessToken);
  const userValue = useStore($userValue);
  useEffect(() => {
    if (localStorage.getItem(accessTokenName)?.length) {
      setAccessToken(localStorage.getItem(accessTokenName) || "")
    } else {
      UserLogout()
    }
    if (localStorage.getItem(RememberRefreshName)?.length) {
      setRememberCheck((localStorage.getItem(RememberRefreshName)?.length && localStorage.getItem(RememberRefreshName) || "false"))
    }
  }, [])
  return (
    <div className="App">
      <div className="App__PhoneWallpaper"></div>
      <Header />
      <div className="App_Actual">
        <CustomValidity />
        <Routes>
          {/* <Route path="/" element={<Major />}></Route> */}
          {(accessToken && userValue) ?
            <>
              <Route path="/">
                <Route path="chat" element={<Chat />} />
                <Route path="search" element={<Search />} />
                <Route path="user" element={<UserMore />}>
                  <Route path=":login" element={<UserLogin />} />
                  <Route path="subscription" element={<UserSubscription />} />
                  <Route path="subscribers" element={<UserSubscribers />} />
                  <Route path="setting" element={<UserSetting />} />
                  <Route path="publication">
                    <Route path="write" element={<UserPublicationWrite />} />
                    <Route path="list" element={<UserPublicationList />} />
                  </Route>
                </Route>
                <Route path="home" element={<HomeMore />}>
                  <Route path="recommendations" element={<HomeRecommendation />} />
                  <Route path="top" element={<HomeTop />} />
                  <Route path="subscription" element={<HomeSubscription />} />
                </Route>
              </Route>

              {/* <Route path="*" element={<Navigate to={`/user/${userValue?.user?.login}`} replace />} /> */}
            </> :
            <>
              <Route path="/authorization" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="*" element={<Navigate to="/authorization" />} />
            </>
          }
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
