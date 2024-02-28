import React from 'react';
import { Hero } from './components/heroSection/Hero';
import { Highlights } from './components/highlights/highlights';
import { BoxContact } from './components/boxContact/BoxContact';
import { HighlightsRent } from './components/highlights rent/highlightsRent';

function LandingPage() {
  return (
    <>
      <Hero/>
      <Highlights/>
      <BoxContact/>
      <HighlightsRent/>
    </>
  )
}
  
export {
    LandingPage
}
