import "./index.css";
import "./App.css";
import "./font.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "effector-react";
import { $userName } from "./common/UserHooks";
import { $userAnotherName } from "./common/UserAnotherHooks";
import { $accessToken } from "./common/AccessToken";
import { accessTokenName } from "./common/AxiosInstance";
import { Header } from "./ui/header/organoids/Header";
import { Footer } from "./ui/footer/organoids/Footer";
import { Major } from "./pages/major/ogranoids/Major";
import { Home } from "./pages/home/ogranoids/Home";
import { Registration } from "./pages/registration/organoids/Registration";
import { Login } from "./pages/login/organoids/Login";
import { Forgot } from "./pages/forgot/organoids/Forgot";
import { Chat } from "./pages/chat/ogranoids/Chat";
import { User } from "./pages/user/ogranoids/user";
import { Search } from "./pages/search/ogranoids/Search";
import { AnotherUser } from "./pages/useranother/ogranoids/AnotherUser";
import { ChangeUser } from "./pages/userchange/organoids/ChangeUser";
export interface IRoute {
  link: string;
  title: string;
  component: JSX.Element;
}

export function App() {
  const navigate = useNavigate();
  const userName = useStore($userName);
  const UserAnotherName = useStore($userAnotherName);
  const accessToken = useStore($accessToken);

  useEffect(()=>{
    if (!localStorage.getItem(accessTokenName)?.length) {
    }else{
      // setAccessToken(localStorage.getItem(accessTokenName))
    }
  },[])

  useEffect(()=>{
    if(userName && accessToken){
      navigate(`/User/${userName}`);
    }
  },[accessToken, userName])

  useEffect(()=>{
    if(UserAnotherName){
      navigate(`/AnotherUser/${UserAnotherName}`);
    }
  },[UserAnotherName])

  return (
    <div className="App">
      <Header />
      <div className="App_Actual">
        <Routes>
          <Route path="/" element={<Major />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Home/Recommendations" element={<Home />}/>
          <Route path="/Home/Top" element={<Home />}/>
          <Route path="/Home/Subscriptions" element={<Home />}/>
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
