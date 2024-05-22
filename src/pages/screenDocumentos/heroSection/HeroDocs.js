import React from 'react';
import "./HeroDocs.css";
import hero from "./assets/hero-documents.jpg";

function HeroDocs() {
    return (
      <main className="MainDocs">
        <div className="heroDocs" style={{backgroundImage:`url(${hero})`}}>
          <h2>LISTA DE DOCUMENTOS</h2>
        </div>
      </main>
    )
  }
  
export { HeroDocs }
