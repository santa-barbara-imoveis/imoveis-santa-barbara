import React from 'react';
import "./HeroSomos.css";
import hero from "./assets/inovacao.jpeg";

function HeroSomos() {
    return (
      <main className="MainSomos">
        <div className="heroSomos" style={{backgroundImage:`url(${hero})`}}>
          <h1>INOVAÇÃO EM NEGÓCIOS IMOBILIÁRIOS</h1>
        </div>
      </main>
    )
  }
  
export { HeroSomos }
