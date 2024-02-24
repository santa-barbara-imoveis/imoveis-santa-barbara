import React from 'react';
import { Header } from './components/header/Header';
import { Hero } from './components/heroSection/Hero';
import { Highlights } from './components/highlights/highlights';
import { BoxContact } from './components/boxContact/BoxContact';
import { HighlightsRent } from './components/highlights rent/highlightsRent';
import { Footers } from './components/Footers/Footers';
import { FFooter } from './components/Footers/FFooter';

function LandingPage() {
  return (
    <>
      <Header/>
      <Hero/>
      <Highlights/>
      <BoxContact/>
      <HighlightsRent/>
      <Footers/>
      <FFooter/>
    </>
  )
}
  
export {
    LandingPage
}
