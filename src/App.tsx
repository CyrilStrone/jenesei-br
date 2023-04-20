import "./index.css";
import "./App.css";
import "./font.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "effector-react";
import { $userName } from "./common/Hooks";
import { $userAnotherName } from "./common/UserAnotherHooks";
import { $accessToken, setAccessToken } from "./common/AccessToken";
import { accessTokenName } from "./common/AxiosInstance";
import { Header } from "./ui/header/organoids/Header";
import { Footer } from "./ui/footer/organoids/Footer";
import { Major } from "./pages/major/ogranoids/Major";
import { Registration } from "./pages/registration/organoids/Registration";
import { Login } from "./pages/login/organoids/Login";
import { Forgot } from "./pages/forgot/organoids/Forgot";
import { Chat } from "./pages/chat/ogranoids/Chat";
import { User } from "./pages/user/ogranoids/user";
import { Search } from "./pages/search/ogranoids/Search";
import { AnotherUser } from "./pages/useranother/ogranoids/AnotherUser";
import { ChangeUser } from "./pages/userchange/organoids/ChangeUser";
import { HomeTop } from "./pages/home/ogranoids/HomeTop";
import { HomeRecommendation } from "./pages/home/ogranoids/HomeRecommendation";
import { HomeSubscription } from "./pages/home/ogranoids/HomeSubscription";
import Wallpaper from './common/assets/home/wallpaper.svg'

export function App() {
  const navigate = useNavigate();
  const userName = useStore($userName);
  const UserAnotherName = useStore($userAnotherName);
  const accessToken = useStore($accessToken);

  useEffect(()=>{
    if (!localStorage.getItem(accessTokenName)?.length) {
    }else{
      const item = JSON.parse(localStorage.getItem(accessTokenName) || "");
      setAccessToken(item)
    }
  },[])

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
    <div className="App" style={{backgroundImage:`url(${Wallpaper})`}}>
      <Header />
      <div className="App_Actual">
        <Routes>
          <Route path="/" element={<Major />}></Route>
          <Route path="/Home" element={<HomeTop />}></Route>
          <Route path="/Home/Recommendations" element={<HomeRecommendation />}/>
          <Route path="/Home/Top" element={<HomeTop />}/>
          <Route path="/Home/Subscriptions" element={<HomeSubscription />}/>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Registration" element={<Registration />}></Route>
          <Route path="/Forgot" element={<Forgot />}></Route>
          <Route path="/Chat" element={<Chat />}></Route>
          <Route path="/Search" element={<Search />}></Route>
          <Route
            element={<User />}
            path="/User/:userName"
            loader={async ({ params }) => {
              return userName;
            }}
            action={async ({ request }) => {
              return userName;
            }}
            errorElement={<Major />}
          />
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
