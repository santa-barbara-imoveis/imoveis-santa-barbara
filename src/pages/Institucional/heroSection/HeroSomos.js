import React from 'react';
import "./HeroSomos.css";
import hero from "./assets/inovacao.jpeg";

function HeroSomos() {
    return (
      <main className="MainSomos">
        <div className="heroSomos" style={{backgroundImage:`url(${hero})`}}>
          INOVAÇÃO EM NEGÓCIOS IMOBILIÁRIOS
        </div>
      </main>
    )
  }
  
export { HeroSomos }
