import "./App.css";
import "./Font.css";
import "./ui/generalstyles/Blocks.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { $accessToken, setAccessToken } from "./ui/functions/AccessToken";
import { accessTokenName } from "./ui/functions/AxiosInstance";
import { Header } from "./ui/header/organoids/Header";
import { Footer } from "./ui/footer/organoids/Footer";
import { Major } from "./pages/major/ogranoids/Major";
import { Registration } from "./pages/registration/organoids/Registration";
import { Login } from "./pages/login/organoids/Login";
import { Forgot } from "./pages/forgot/organoids/Forgot";
import { Chat } from "./pages/chat/ogranoids/Chat";
import { Search } from "./pages/search/ogranoids/Search";
import { HomeTop } from "./pages/home/ogranoids/HomeTop";
import { HomeRecommendation } from "./pages/home/ogranoids/HomeRecommendation";
import { HomeSubscription } from "./pages/home/ogranoids/HomeSubscription";
import { User } from "./pages/user/ogranoids/User";
import { useStore } from "effector-react";
import { UserSubscription } from "./pages/usermore/ogranoids/UserSubscription";
import { UserSubscribers } from "./pages/usermore/ogranoids/UserSubscribers";
import { UserSetting } from "./pages/usermore/ogranoids/UserSetting";
import { UserPublicationWrite } from "./pages/usermore/ogranoids/UserPublicationWrite";
import { UserPublicationList } from "./pages/usermore/ogranoids/UserPublicationList";
import { CustomValidity } from "./ui/customvalidity/organoids/CustomValidity";
import { InUser } from "./ui/functions/InUser";
import { setUserValue } from "./ui/functions/Hooks";

export async function requestUser()  {
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
    } else {

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
          {accessToken ?
            <>
              <Route path="/Home/Recommendations" element={<HomeRecommendation />} />
              <Route path="/Home/Top" element={<HomeTop />} />
              <Route path="/Home/Subscription" element={<HomeSubscription />} />
              <Route path="/Chat" element={<Chat />} />
              <Route path="/Search" element={<Search />} />
              <Route path="/User/:UserLogin" element={<User />} />
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
