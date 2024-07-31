import React from 'react';
import "./videoSection.css";

function VideoSection() {
    return (
      <article className='boxVideo'>
        <div className="imVideo"> 
          <iframe width="300" height="200" src="https://www.youtube.com/embed/eRpPNIqzvO0?si=CDRAUEXv7pyCAJaS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="imVideo"> 
          <iframe width="300" height="200" src="https://www.youtube.com/embed/eRpPNIqzvO0?si=CDRAUEXv7pyCAJaS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </article>
    );
  }
  
export { VideoSection }
