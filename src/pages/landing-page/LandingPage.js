import React from 'react';
import { Hero } from './components/heroSection/Hero';
import { Highlights } from './components/highlights/highlights';
import { BoxContact } from './components/boxContact/BoxContact';
import { HighlightsRent } from './components/highlights rent/highlightsRent';
import { VideoSection } from './components/videoSection/videoSection';

function LandingPage() {
  return (
    <>
      <Hero/>
      <Highlights/>
      <BoxContact/>
      <VideoSection/>
      <HighlightsRent/>
    </>
  )
}
  
export {
    LandingPage
}
