import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './pages/landing-page/components/header/Header';
import { Footers } from './pages/landing-page/components/Footers/Footers';
import { FFooter } from './pages/landing-page/components/Footers/FFooter';

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
