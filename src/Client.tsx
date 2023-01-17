import React from "react";
import ReactDOM from "react-dom";
import { App } from "App";
import { HashRouter } from "react-router-dom";

const entryBlock = document.getElementById("root");
const renderFunction: ReactDOM.Renderer = entryBlock.hasChildNodes()
  ? ReactDOM.hydrate
  : ReactDOM.render;

renderFunction(
  <HashRouter>
    <App />
  </HashRouter>,
  entryBlock
);
