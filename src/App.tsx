import "./App.css";
import "./Font.css";
import "./ui/generalStyles/Blocks.css";
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
import { AnotherUser } from "./pages/useranother/ogranoids/AnotherUser";
import { ChangeUser } from "./pages/userchange/organoids/ChangeUser";
import { HomeTop } from "./pages/home/ogranoids/HomeTop";
import { HomeRecommendation } from "./pages/home/ogranoids/HomeRecommendation";
import { HomeSubscription } from "./pages/home/ogranoids/HomeSubscription";
import useWindowDimensions from "./ui/functions/UseWindowDimensions";
import { User } from "./pages/user/ogranoids/User";
import { useStore } from "effector-react";

import Wallpaper from './assets/general/Wallpaper.png'
import WallpaperPhone from './assets/general/WallpaperPhone.png'

export function App() {
  const { height, width } = useWindowDimensions();
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
        <Routes>
          <Route path="/" element={<Major />}></Route>
          <Route
            element={<AnotherUser />}
            path="/AnotherUser/:UserAnotherName"
          />
          {accessToken ?
            <>
              <Route path="/Home/Recommendations" element={<HomeRecommendation />} />
              <Route path="/Home/Top" element={<HomeTop />} />
              <Route path="/Home/Subscriptions" element={<HomeSubscription />} />
              <Route path="/Chat" element={<Chat />} />
              <Route path="/Search" element={<Search />} />
              <Route path="/User/:UserLogin" element={<User />} />
              <Route path="/ChangeUser/:UserLogin" element={<ChangeUser />} />
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
