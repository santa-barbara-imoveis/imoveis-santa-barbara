import React from 'react';
import "./boxContact.css";
import logo from "./assets/logo2.png";

function BoxContact() {
    return (
      <article className='boxContato'>
        <div className="logo2"> 
          <img className="logoImage2" src={logo}/>
        </div>
        <p className="sloganMedio"> 
          Inovação em Negócios Imobiliários!
        </p>
        <div className="botaoContato"> 
          <a href="https://wa.me//553198131403?text=Acessei%20o%20site%20de%20vocês%20e%20gostaria%20de%20visitar%20um%20dos%20imóveis." target="_blank">Fale conosco</a>
        </div>
      </article>
    );
  }
  
export { BoxContact }
