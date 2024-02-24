import React from 'react';
import "./header.css";
import logo from "./assets/logo.png";
import iconTel from "./assets/telefone.png";
import iconEmail from "./assets/email.png";
import iconFace from "./assets/facebook.png";
import iconInsta from "./assets/instagram.png";
import iconZap from "./assets/zapPB.png";
import iconCreci from "./assets/garantia.png";

function Header() {
  return (
    <div>
          <div className="quickInfos">
      <div className="qkCreci">
        <img className="qkIcon" src={iconCreci} />
        CRECI:MGJ0007201
      </div>
      <div className="qkTelef">
        <img className="qkIcon" src={iconTel} />
        31 3832-1674
      </div>
      <div className="qkTelef">
        <img className="qkIcon" src={iconTel} />
        31 97186-1985
      </div>
      <div className="qkEmail">
        <img className="qkIcon" src={iconEmail} />
        contato@santabarbaraimoveis.com.br
      </div>
      <div className="qkNetwork">
        <div className="qkFace">
          <img className="qkIcon" src={iconFace} />
        </div>
        <div className="qkInsta">
          <img className="qkIcon" src={iconInsta} />
        </div>
        <div className="qkZap">
          <img className="qkIcon" src={iconZap} />
        </div>
      </div>
    </div>
    <header className="head">
      <div className="logo"> 
        <img className="logoImage" src={logo}/>
      </div>
      <nav className="navHead" >
        <a className="headMain"href=""> Home </a>
        <a className="headMain"href=""> Alugar </a>
        <a className="headMain"href=""> Comprar </a>
        <a className="headMain"href=""> Documentos </a>
        <a className="headMain"href=""> Contato </a>
        <a className="headMain"href=""> Instituicional </a>
        <a href="" className='entrar'> Entrar </a>
      </nav>
    </header>
    </div>
  )
}
  
export { Header }
