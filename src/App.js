import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import "./assets/style/reset.css";
import ReactGA from "./react-ga4";
import { FFooter } from './pages/landing-page/components/Footers/FFooter';
import { Footers } from './pages/landing-page/components/Footers/Footers';
import { Header } from './pages/landing-page/components/header/Header';

const TRACKING_ID = "G-FND0LWMLWY";
ReactGA.initialize(TRACKING_ID);

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
})

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footers/>
      <FFooter/>
    </div>
  )
}

export default App;
