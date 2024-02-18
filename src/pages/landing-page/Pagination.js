import React from 'react';
import { useEffect,useState } from 'react';
import "./Pagination.css";

function Pagination () {
  const [itens, setItens] = useState([])
  const [itensPerPage, setItensItensPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(itens.length / itensPerPage)
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex)

  return (
    <div className='Pagination'>
      <div>
        {Array.from(Array(pages), (item, index) => {
          return <button value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
        })}
      </div>
      {currentItens.map(item => {
        return <div className='item'> 
        <span>{item.cod}</span>
        <span>{item.contrato}</span>
        <span>{item.tipoImovel}</span>
        </div>
      })}
    </div>
  );
}

export default Pagination;