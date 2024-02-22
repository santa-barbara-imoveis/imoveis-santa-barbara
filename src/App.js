import React from 'react';
import './App.css';
// import { Header } from './pages/landing-page/components/header/Header';
// import { Hero } from './pages/landing-page/components/heroSection/Hero';
// import { Highlights } from './pages/landing-page/components/highlights/highlights';
// import { BoxContact } from './pages/landing-page/components/boxContact/BoxContact';
// import { HighlightsRent } from './pages/landing-page/components/highlights rent/highlightsRent';
// import { Footers } from './pages/landing-page/components/Footers/Footers';
// import { FFooter } from './pages/landing-page/components/Footers/FFooter';
// import { ListaImoveis2 } from './pages/landing-page/ListaImoveis2';
// import { LandingPage } from './pages/landing-page/LandingPage';
// import { ScreenDocumentos } from './pages/landing-page/ScreenDocumentos';
import { Filtragem } from './pages/landing-page/Filtragem';

function App() {
  
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <ScreenDocumentos/>  */}
      {/* <ListaImoveis2/> */}
      <Filtragem/>
      {/* <Hero/>
      <Highlights/>
      <BoxContact/>
      <HighlightsRent/>
      <Footers/>
      <FFooter/> */}
      {/* <LandingPage/>   */}
    </div>
  )
}

export default App;
