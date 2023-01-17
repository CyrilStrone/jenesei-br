import { Route, Routes } from "react-router-dom";

// import { Pages, PagesAnotherUser } from "Pages/Routes";
// import { PagesLogin } from "Pages/Routes";

import React from "react";
import { Header } from "../Common/UI/Header/Organoids/Header";
import "./index.css";
import "./font.css";
import { Footer } from "../Common/UI/Footer/Organoids/Footer";
export interface IRoute {
  link: string;
  title: string;
  component: JSX.Element;
}

import "../Common/Assets/Logo/LogoMin.png";
import "../Common/Assets/Logo/LogoMin.jpg";
import { Major } from "Pages/Major/Ogranoids/Major";
import { Home } from "Pages/Home/Ogranoids/home";
import { Registration } from "Pages/Registration/Organoids/Registration";
import { Login } from "Pages/Login/Organoids/Login";
import { AnotherUser } from "Pages/AnotherUser/Ogranoids/AnotherUser";
import { Forgot } from "Pages/Forgot/Organoids/Forgot";
import { User } from "Pages/User/Ogranoids/User";
import { Search } from "Pages/Search/Ogranoids/Search";
import { $userName } from "../Common/hooks";
import { useStore } from "effector-react";
import { $AnotheUserName } from "../Common/hooksAnotherUser";
import { Chat } from "Pages/Chat/Ogranoids/Chat";

export function App() {
  // require('./index.styl')
  const userName = useStore($userName);
  const AnotheUserName = useStore($AnotheUserName);

  
  return (
    <div className="App">
      <Header />
      <div className="App_Actual">
        <Routes>
          <Route path="/" element={<Major />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Registration" element={<Registration />}></Route>
          {/* <Route path="/User" element={<User />}></Route> */}
          <Route path="/Forgot" element={<Forgot />}></Route>
          {/* <Route path="/AnotherUser" element={<AnotherUser />}></Route> */}
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
            path="/AnotherUser/:userName"
            loader={async ({ params }) => {
              return AnotheUserName;
            }}
            action={async ({ request }) => {
              return AnotheUserName;
            }}
            errorElement={<Major />}
          />
        </Routes>
       
      </div>
      <Footer />
    </div>
  );
}
