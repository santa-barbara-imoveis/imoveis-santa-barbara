import React from 'react';
import { useEffect, useState } from 'react';
import "./Pagination.css";
import { imoveisDisp } from '../../../../data/dataImoveis';

function Pagination ({itens, mudarImoveisAtuais}) {

  const [itensPerPage, setItensItensPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)
  const pages = Math.ceil(imoveisDisp.length / itensPerPage)

  //esta atualizacao dos estados causou um looping infinito
  //ao chamar mudarImoveisAtuais, o estado do pai mudou
  //assim q o estado do pai mudou, o pai foi rendirizado novamente e o filho foi renderizado novamente também
  //assim q o filho renderiza novamente, o q acontece?
  //como o useeffect previne este problema?
  //responsividade / midiaquery

  useEffect(() => {
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = imoveisDisp.slice(startIndex, endIndex)
  mudarImoveisAtuais (currentItens);
  }, [currentPage])

  return (
    <div className='Pagination'>
      <div className='numPagesNav'>
        <button className='prev' value={currentPage-1} onClick={(e) => setCurrentPage(Number(e.target.value))}>&lt;</button>
        {Array.from(Array(pages), (item, index) => {
          return <button value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
        })}
        <button className='next' value={currentPage+1} onClick={(e) => setCurrentPage(Number(e.target.value))}>&gt;</button>
      </div>
    </div>
  );
}

export default Pagination;