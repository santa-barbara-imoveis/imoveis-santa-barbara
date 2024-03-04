import React, { useEffect, useState } from 'react';
import "./ListaImoveis.css";
import "../../assets/style/brand.css";
import hero from "../../assets/images/wideHeroImage.jpg";
import RenderImoveis from "./listaDeImoveis";
import { imoveisDisp } from '../../data/dataImoveis';
import Pagination from './components/Pagination/Pagination';
import { Filtragem } from './components/Filtragem/Filtragem';

function ListaImoveis2() {
  const [imoveis, setImoveis] = useState (imoveisDisp);
  const [imoveisPageAtual, setImoveisPageAtual] = useState (imoveisDisp.slice(0, 10));
  const TotalImoveis = imoveis.length;
  const [contrato, setContrato] = useState ("")
  // const [imoveis, setImoveis] = useState ([]);
  const [tipoImovel, setTipoImovel] = useState ("")

  useEffect(()=>{setImoveisPageAtual(imoveis.slice(0,10))}, [imoveis])

  return (
    <body>
      <main>
        <div className="hero" style={{ backgroundImage: `url(${hero})`}}>
          ENCONTRE SEU IMÓVEL
        </div>
        <article className='FormSearchMain'>
          <div className='MainBoxLista'>
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
              <Pagination imoveisListaCompleta = {imoveis} imoveisPaginaAtual = {imoveisPageAtual} mudarImoveisAtuais = {setImoveisPageAtual}/>
              <RenderImoveis itens = {imoveisPageAtual}/>
              <Pagination imoveisListaCompleta = {imoveis} imoveisPaginaAtual = {imoveisPageAtual} mudarImoveisAtuais = {setImoveisPageAtual}/>
            </div>
          </div>
        </article>
      </main>
    </body>
  )
}

export { ListaImoveis2 }
