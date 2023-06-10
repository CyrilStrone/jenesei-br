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
import { HomeTop } from "./pages/home/organelles/HomeTop";
import { HomeRecommendation } from "./pages/home/organelles/HomeRecommendation";
import { HomeSubscription } from "./pages/home/organelles/HomeSubscription";
import { User } from "./pages/user/organelles/User";
import { UserSubscription } from "./pages/userSubscription/organelles/UserSubscription";
import { UserSubscribers } from "./pages/userSubscribers/organelles/UserSubscribers";
import { UserPublicationList } from "./pages/userPublicationList/organelles/UserPublicationList";
import { CustomValidity } from "./ui/customValidity/organelles/CustomValidity";
import { InUser } from "./ui/functions/InUser";
import { $userValue, setUserValue } from "./ui/functions/Hooks";
import { UserSetting } from "./pages/userSetting/organelles/UserSetting";
import { UserPublicationWrite } from "./pages/userPublicationWrite/organelles/UserPublicationWrite";

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
          <Route path="/" element={<Major />}></Route>
          <Route path="/user/:login" element={<User />}></Route>
          {(accessToken && userValue) ?
            <>
              <Route path="/home/recommendations" element={<HomeRecommendation />} />
              <Route path="/home/top" element={<HomeTop />} />
              <Route path="/home/subscription" element={<HomeSubscription />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/search" element={<Search />} />
              <Route path="/user/subscription" element={<UserSubscription />} />
              <Route path="/user/subscribers" element={<UserSubscribers />} />
              <Route path="/user/setting" element={<UserSetting />} />
              <Route path="/user/publication/write" element={<UserPublicationWrite />} />
              <Route path="/user/publication/list" element={<UserPublicationList />} />
              <Route path="*" element={<Navigate to={`/user/${userValue?.user?.login}`} replace />} />
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
