import React from 'react';
import "./videoSection.css";
import video1 from "./videos/video1.mp4";
import video2 from "./videos/video2.mp4";
import video3 from "./videos/video3.mp4";
import poster1 from "./videos/capaVideo1.jpg";
import poster2 from "./videos/capaVideo2.jpg";
import poster3 from "./videos/capaVideo3.jpg";
import icon1 from "./videos/casa.png";
import icon2 from "./videos/chaves.png";

function VideoSection() {
    return (
      <article className='boxVideo'>
        <video className="" src={video1} controls width={200} poster={poster1}> 
        </video>
        <img className="iconVideos" src={icon1} />
        <video className="" src={video2} controls width={200} poster={poster2}> 
        </video>
        <img className="iconVideos" src={icon1} />
        <video className="" src={video3} controls width={200} poster={poster3}> 
        </video>
      </article>
    );
  }
  
export { VideoSection }
