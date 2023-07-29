import "@fontsource/inter";
import "@fontsource/montserrat";
import "@fontsource/roboto";

import './ui/styles/app.css';
import './ui/styles/blocks.css';
import './ui/styles/font.css';
import './ui/styles/index.css';
import './ui/styles/variables.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from "./App";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter >
    <App />
  </BrowserRouter>,
)