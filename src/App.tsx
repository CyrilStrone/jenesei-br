import "./index.css";
import "./App.css";
import "./font.css";
import "./ui/generalStyles/blocks.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStore } from "effector-react";
import { $userName } from "./ui/functions/Hooks";
import { $userAnotherName } from "./ui/functions/UserAnotherHooks";
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
import Wallpaper from './assets/general/Wallpaper.png'
import WallpaperPhone from './assets/general/WallpaperPhone.png'
import useWindowDimensions from "./ui/functions/UseWindowDimensions";
import { User } from "./pages/user/ogranoids/User";

export function App() {
  const navigate = useNavigate();
  const userName = useStore($userName);
  const UserAnotherName = useStore($userAnotherName);
  const accessToken = useStore($accessToken);
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    if (!localStorage.getItem(accessTokenName)?.length) {
    } else {
      const item = JSON.parse(localStorage.getItem(accessTokenName) || "");
      setAccessToken(item)
    }
  }, [])

  // useEffect(()=>{
  //   if(userName && accessToken){
  //     navigate(`/User/${userName}`);
  //   }
  // },[accessToken, userName])

  // useEffect(()=>{
  //   if(UserAnotherName){
  //     navigate(`/AnotherUser/${UserAnotherName}`);
  //   }
  // },[UserAnotherName])

  return (
    <div className="App" style={{ backgroundImage: width > height ? `url(${Wallpaper})` : `url(${WallpaperPhone})` }}>
      <Header />
      <div className="App_Actual">
        <Routes>
          <Route path="/" element={<Major />}></Route>
          <Route path="/Home" element={<HomeTop />}></Route>
          <Route path="/Home/Recommendations" element={<HomeRecommendation />} />
          <Route path="/Home/Top" element={<HomeTop />} />
          <Route path="/Home/Subscriptions" element={<HomeSubscription />} />
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Registration" element={<Registration />}></Route>
          <Route path="/Forgot" element={<Forgot />}></Route>
          <Route path="/Chat" element={<Chat />}></Route>
          <Route path="/Search" element={<Search />}></Route>
          <Route path="/User" element={<User />}></Route>
          <Route
            element={<AnotherUser />}
            path="/AnotherUser/:UserAnotherName"
            loader={async ({ params }) => {
              return UserAnotherName;
            }}
            action={async ({ request }) => {
              return UserAnotherName;
            }}
            errorElement={<Major />}
          />
          <Route
            element={<ChangeUser />}
            path="/ChangeUser/:UserAnotherName"
            loader={async ({ params }) => {
              return UserAnotherName;
            }}
            action={async ({ request }) => {
              return UserAnotherName;
            }}
            errorElement={<Major />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
