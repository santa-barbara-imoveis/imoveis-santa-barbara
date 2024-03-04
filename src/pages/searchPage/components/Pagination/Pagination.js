import React from 'react';
import { useEffect, useState } from 'react';
import "./Pagination.css";
import { imoveisDisp } from '../../../../data/dataImoveis';

function Pagination ({imoveisListaCompleta, imoveisPaginaAtual, mudarImoveisAtuais}) {

  const [itensPerPage, setItensItensPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)
  const pages = Math.ceil(imoveisListaCompleta.length / itensPerPage)

  //esta atualizacao dos estados causou um looping infinito
  //ao chamar mudarImoveisAtuais, o estado do pai mudou
  //assim q o estado do pai mudou, o pai foi rendirizado novamente e o filho foi renderizado novamente também
  //assim q o filho renderiza novamente, o q acontece?
  //como o useeffect previne este problema?
  //responsividade / midiaquery

  useEffect(() => {
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = imoveisListaCompleta.slice(startIndex, endIndex)
  mudarImoveisAtuais (currentItens);
  }, [currentPage])

  useEffect(() => {setCurrentPage(0)}, [imoveisListaCompleta]);

  return (
    <div className='Pagination'>
      <div className='numPagesNav'>
        {
        currentPage == 0? null : <button className='prev' value={currentPage-1} onClick={(e) => setCurrentPage(Number(e.target.value))}>&lt;</button>
        }
        {Array.from(Array(pages), (item, index) => {
          return <button className={index == currentPage? "currentPage" : ""} value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
        })}
        {
        currentPage+1 >= pages? null : <button className='next' value={currentPage+1} onClick={(e) => setCurrentPage(Number(e.target.value))}>&gt;</button>
        }
      </div>
    </div>
  );
}

export default Pagination;