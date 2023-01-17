import React from "react";
import ReactDOM from "react-dom";
import { App } from "App";
import { BrowserRouter } from "react-router-dom";

const entryBlock = document.getElementById("root");
const renderFunction: ReactDOM.Renderer = entryBlock.hasChildNodes()
  ? ReactDOM.hydrate
  : ReactDOM.render;

renderFunction(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  entryBlock
);
