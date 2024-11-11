import React from 'react';
import "./Footers.css";
import iconTel from "./assets/telefone.png";
import iconEmail from "./assets/email.png";
import iconEndereco from "./assets/local.png";
import iconCreci from "./assets/garantia.png";
import iconCNPJ from "./assets/cnpj.png";
import { Link } from "react-router-dom";

function Footers() {
  return (
    <footer className='boxFooter'>
      <div className='boxContaFoo'>
        <p className='boxFootTituloF'>CONTATO</p>
        <p className='boxFootLinha'>
          <img className="qkIconLocal" src={iconEndereco} />
          X de Novembro, 129, Centro, Santa Bárbara
        </p>
        <p className='boxFootLinha'>
          <img className="qkIconLocal" src={iconTel} />
          31 97186-1985
        </p>
        <p>
          <img className="qkIconLocal" src={iconEmail} />
          imoveissantabarbara@gmail.com
        </p>
        <p>
          <img className="qkIconLocal" src={iconCNPJ} />
          CNPJ: 43.491.093/0001-07
        </p>
        <p>
          <img className="qkIconLocal" src={iconCreci} />
          CRECI: MGJ0007201
        </p>
      </div>
      <div className='boxContaF'>
        <p className='boxFootTituloF'>ENTRAMOS EM CONTATO</p>
        <div className='textDifContato'>Digite o seu email que entraremos em contato.</div>
        <div className='textDifContato'>Ao informar meus dados, eu concordo com a Política de Privacidade.</div>
        <div className='boxEmailMsg'>
          <input className="inputEmail" type="text" name="email" />
        </div>
        <div className='boxBotao'>
          <button className="btEnviar" type="submit">
            Enviar
          </button>
        </div>
      </div>
    </footer>
    
  );
}

export { Footers }
