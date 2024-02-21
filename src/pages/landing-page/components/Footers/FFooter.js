import React from 'react';
import "./Footers.css";
import iconFace from "./assets/facebook.png";
import iconInsta from "./assets/instagram.png";

function FFooter () {
  return (
    <footer className='footExtra'>
        <footer className='footExtra'>
        &copy; Copyright 2024 Desenvolvido por DevMind
        <div className='qkLinks'>
          <div className="qkFace">
            <img className="qkIcon" src={iconFace} />
          </div>
          <div className="qkInsta">
            <img className="qkIcon" src={iconInsta} />
          </div>
        </div>
        </footer>
    </footer>
    
  );
}

export { FFooter }
