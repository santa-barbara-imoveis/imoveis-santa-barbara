import React from 'react';
import "./boxContact.css";
import logo from "./assets/logo.png";

function BoxContact() {
    return (
      <article className='boxContato'>
        <div className="logo"> 
          <img className="logoImage2" src={logo}/>
        </div>
        <div className="sloganMedio"> 
          Inovação em Negócios Imobiliários!
        </div>
        <div className="botaoContato"> 
          Fale conosco
        </div>
      </article>
    );
  }
  
export { BoxContact }
