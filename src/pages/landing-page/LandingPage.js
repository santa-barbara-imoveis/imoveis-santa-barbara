import React from 'react';
import { BoxContact } from './components/boxContact/BoxContact';
import { Hero } from './components/heroSection/Hero';
import { HighlightsRent } from './components/highlights rent/highlightsRent';
import { Highlights } from './components/highlights/highlights';
import { VideoSection } from './components/videoSection/videoSection';

// testtes
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
};

