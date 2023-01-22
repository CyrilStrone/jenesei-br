import React from "react";
import { App } from "App";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
     <HashRouter>
    <App />
  </HashRouter>,
  </React.StrictMode>
);

