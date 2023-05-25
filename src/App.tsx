import "./App.css";
import "./Font.css";
import "./ui/generalStyles/Blocks.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "effector-react";
import { $accessToken, setAccessToken } from "./ui/functions/AccessToken";
import { accessTokenName } from "./ui/functions/AxiosInstance";
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
import { setUserValue } from "./ui/functions/Hooks";
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
  useEffect(() => {
    if (localStorage.getItem(accessTokenName)?.length) {
      setAccessToken(localStorage.getItem(accessTokenName) || "")
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
          <Route path="/:id" element={<User />}></Route>
          {accessToken ?
            <>
              <Route path="/Home/Recommendations" element={<HomeRecommendation />} />
              <Route path="/Home/Top" element={<HomeTop />} />
              <Route path="/Home/Subscription" element={<HomeSubscription />} />
              <Route path="/Chat" element={<Chat />} />
              <Route path="/Search" element={<Search />} />
              <Route path="/UserSubscription" element={<UserSubscription />} />
              <Route path="/UserSubscribers" element={<UserSubscribers />} />
              <Route path="/UserSetting" element={<UserSetting />} />
              <Route path="/UserPublicationWrite" element={<UserPublicationWrite />} />
              <Route path="/UserPublicationList" element={<UserPublicationList />} />
              <Route path='*' element={<User />}></Route>
            </> :
            <>
              <Route path="/Login" element={<Login />} />
              <Route path="/Registration" element={<Registration />} />
              <Route path="/Forgot" element={<Forgot />} />
              <Route path='*' element={<Login />} />
            </>
          }
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
