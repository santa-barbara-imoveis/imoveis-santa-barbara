import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import hero from "../../assets/images/wideHeroImage.jpg";
import "../../assets/style/brand.css";
import { imoveisDisp } from '../../data/dataImoveis';
import { contractType } from '../../dicts/contract-type';
import { filterSearchParams } from '../../dicts/filter-search-params';
import "./ListaImoveis.css";
import { Filtragem } from './components/Filtragem/Filtragem';
import Pagination from './components/Pagination/Pagination';
import RenderImoveis from "./listaDeImoveis";

function ListaImoveis2() {
  const [imoveis, setImoveis] = useState (imoveisDisp);
  const [imoveisPageAtual, setImoveisPageAtual] = useState (imoveisDisp.slice(0, 10));
  const TotalImoveis = imoveis.length;
  const [contrato, setContrato] = useState ("")
  // const [imoveis, setImoveis] = useState ([]);
  const [tipoImovel, setTipoImovel] = useState ("")
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(()=>{setImoveisPageAtual(imoveis.slice(0,10))}, [imoveis])

  let [searchParams, setSearchParams] = useSearchParams();

  const initialFilters = useMemo(() => {
    const iFilters = {

    }

    if(searchParams.get(filterSearchParams.type)) {
      const param = searchParams.get(filterSearchParams.type)

      const allowedKeys = Object.keys(contractType)

      if (allowedKeys.includes(param)) {
        iFilters.type = contractType[param]
      }
    }

    return iFilters
  }, [searchParams])


  return (
    <body>
      <main>
        <div className="hero" style={{ backgroundImage: `url(${hero})`}}>
          ENCONTRE SEU IMÓVEL
        </div>
        <article className='FormSearchMain'>
          <div className='MainBoxLista'>
          <Filtragem itens = {imoveis} mudarImoveisAtuais = {setImoveis} initialFilters={initialFilters}/>
            <div className='boxRenderOptions'>
              <div className='qtdEncontrado'>
                <div className='qtdImoveis'>
                  {TotalImoveis}
                </div>
                <h1>
                  Imóveis encontrados
                </h1>
              </div>
              <Pagination 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage} 
                imoveisListaCompleta = {imoveis} 
                imoveisPaginaAtual = {imoveisPageAtual} 
                mudarImoveisAtuais = {setImoveisPageAtual}
              />
              <RenderImoveis itens = {imoveisPageAtual}/>
              <Pagination 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage} 
                imoveisListaCompleta = {imoveis} 
                imoveisPaginaAtual = {imoveisPageAtual} 
                mudarImoveisAtuais = {setImoveisPageAtual}
              />
            </div>
          </div>
        </article>
      </main>
    </body>
  )
}

export { ListaImoveis2 };

