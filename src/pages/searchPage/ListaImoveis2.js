import React, { useEffect, useState } from 'react';
import "./ListaImoveis.css";
import "../../assets/style/brand.css";
import hero from "../../assets/images/wideHeroImage.jpg";
import RenderImoveis from "./listaDeImoveis";
import { imoveisDisp } from '../../data/dataImoveis';
import Pagination from './components/Pagination/Pagination';
import { Filtragem } from './components/Filtragem/Filtragem';

function ListaImoveis2() {
  const [imoveis, setImoveis] = useState (imoveisDisp.slice(0, 10));
  const TotalImoveis = imoveisDisp.length;
  const [contrato, setContrato] = useState ("")
  // const [imoveis, setImoveis] = useState ([]);
  const [tipoImovel, setTipoImovel] = useState ("")

  return (
    <body>
      <main>
        <div className="hero" style={{ backgroundImage: `url(${hero})`}}>
          ENCONTRE SEU IMÓVEL
        </div>
        <article className='FormSearchMain'>
          <div className='MainBox'>
          <Filtragem itens = {imoveis} mudarImoveisAtuais = {setImoveis}/>
            <div className='boxRenderOptions'>
              <div className='qtdEncontrado'>
                <div className='qtdImoveis'>
                  {TotalImoveis}
                </div>
                <h1>
                  Imóveis encontrados
                </h1>
              </div>
              <Pagination itens = {imoveis} mudarImoveisAtuais = {setImoveis}/>
              <RenderImoveis itens = {imoveis}/>
              <Pagination itens = {imoveis} mudarImoveisAtuais = {setImoveis}/>
            </div>
          </div>
        </article>
      </main>
    </body>
  )
}

export { ListaImoveis2 }
