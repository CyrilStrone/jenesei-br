import './Index.css';
// import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import "@fontsource/inter";
import "@fontsource/montserrat";
import "@fontsource/roboto";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>
);

reportWebVitals();
