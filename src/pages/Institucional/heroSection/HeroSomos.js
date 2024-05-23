import React from 'react';
import "./HeroSomos.css";
import hero from "./assets/inovacao.jpeg";

function HeroSomos() {
    return (
      <main className="MainSomos">
        <div className="heroSomos" style={{backgroundImage:`url(${hero})`}}>
          <h2>INOVAÇÃO EM NEGÓCIOS IMOBILIÁRIOS</h2>
        </div>
      </main>
    )
  }
  
export { HeroSomos }
