import React from 'react';
import { Link } from "react-router-dom";
import { contractTypeParamKey } from '../../../../dicts/contract-type';
import { filterSearchParams } from '../../../../dicts/filter-search-params';
import iconEmail from "./assets/email.png";
import iconFace from "./assets/facebook.png";
import iconCreci from "./assets/garantia.png";
import iconInsta from "./assets/instagram.png";
import logo from "./assets/logo.png";
import bgMenu from "./assets/cardapio.png";
import bgFecha from "./assets/fechar.png";
import iconTel from "./assets/telefone.png";
import iconZap from "./assets/zapPB.png";
import "./header.css";

function menuShow(){
  let menuMobile = document.querySelector(".mobile-menu");
  let bgMenu = document.querySelector(".mobile-menu-icon button");
  if (menuMobile.classList.contains("open")){
    menuMobile.classList.remove("open")
    bgMenu.classList.remove("alt")
    // document.querySelector(".bg-menu").src="assets/cardapio.png"
  }
  else{
    menuMobile.classList.add("open")
    bgMenu.classList.add("alt")
    // document.querySelector(".bg-menu").src="assets/fechar.png"
  }
}

function Header() {
  return (
  <div className='BoxQkInfos'>
    <div className="logoHead"> 
      <img className="logoImageHead" src={logo}/>
    </div>
    <div className="BxQuickInfos">
      <div className="qkCreci qkBox">
        <img className="qkIcon" src={iconCreci} />
        <p>CRECI:MGJ0007201</p>
      </div>
      <div className="qkTelef qkBox">
        <img className="qkIcon" src={iconTel} />
        <p>31 97186-1985</p>
      </div>
      <div className="qkTelef qkBox">
        <img className="qkIcon" src={iconTel} />
        <p>31 97186-1985</p>
      </div>
      <div className="qkEmail qkBox">
        <img className="qkIcon" src={iconEmail} />
        <p>contato@santabarbaraimoveis.com.br</p>
      </div>
      <div className="qkNetwork qkBox">
        <div className="qkFace">
          <a href="https://m.facebook.com/SantaBarbaraImoveisImobiliaria/" target="_blank" rel="noreferrer"><img className="qkIcon" src={iconFace}/></a>
        </div>
        <div className="qkInsta">
          <a href="https://www.instagram.com/santabarbaraimoveis/" target="_blank" rel="noreferrer"><img className="qkIcon" src={iconInsta} /></a>
        </div>
        <div className="qkZap">
          <a href="https://wa.me//5531971861985?text=Acessei%20o%20site%20de%20vocês%20e%20gostaria%20de%20visitar%20um%20dos%20imóveis." target="_blank" rel="noreferrer"><img className="qkIcon" src={iconZap} /></a>
        </div>
      </div>
    </div>

    <header className="head">
      <div className="logo"> 
        <img className="logoImage" src={logo}/>
      </div>
      
      <nav className="navHead" >
        <Link className="headMain" to="/"> <p>Home</p> </Link> 
        <Link to={`imoveis?${filterSearchParams.contractType}=${contractTypeParamKey.rent}`} className="headMain"> <p>Alugar</p> </Link>
        <Link to={`imoveis?${filterSearchParams.contractType}=${contractTypeParamKey.buy}`} className="headMain"> <p>Comprar</p> </Link>
        <Link to="documentos" className="headMain"> <p>Documentos</p> </Link>
        <Link to="financiar" className="headMain"> <p>Financiar</p> </Link>
        <Link to="quem-somos" className="headMain"> <p>Institucional</p> </Link>
        <a href="" className='entrar'>Entrar</a>
      </nav>

      <div className="mobile-menu-icon"> 
        <button onClick={menuShow}><img className="bg-menu" src={bgMenu}/></button>
      </div>

      <nav className="mobile-menu" >
        <Link className="mob-mn-itens" to="/"> <p>Home</p> </Link> 
        <Link to={`imoveis?${filterSearchParams.contractType}=${contractTypeParamKey.rent}`} className="mob-mn-itens"> <p>Alugar</p> </Link>
        <Link to={`imoveis?${filterSearchParams.contractType}=${contractTypeParamKey.buy}`} className="mob-mn-itens"> <p>Comprar</p> </Link>
        <Link to="documentos" className="mob-mn-itens"> <p>Documentos</p> </Link>
        <Link to="financiar" className="mob-mn-itens"> <p>Financiar</p> </Link>
        <Link to="quem-somos" className="mob-mn-itens"> <p>Institucional</p> </Link>
        <a href="" className='entrar'>Entrar</a>
      </nav>
    </header>
    </div>
  )
}

export { Header };

