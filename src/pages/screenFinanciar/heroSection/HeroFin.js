import React from 'react';
import "./HeroFin.css";
import hero from "./assets/hero-fin.jpg";

function HeroFin() {
    return (
      <main className="MainFin">
        <div className="heroFin" style={{backgroundImage:`url(${hero})`}}>
          <h2>FINANCIAMENTO IMOBILIÁRIO</h2>
        </div>
      </main>
    )
  }
  
export { HeroFin }
