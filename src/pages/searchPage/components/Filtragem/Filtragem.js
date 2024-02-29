import React, { useEffect, useState } from 'react';
import "./Filtragem.css";
import "../../../../assets/style/brand.css";
import { imoveisDisp } from '../../../../data/dataImoveis';

function Filtragem ({mudarImoveisAtuais, itens}) {
  const [contrato, setContrato] = useState ("todos")
  const [tipoImovel, setTipoImovel] = useState ("todos")
  const [cidade, setCidade] = useState ("todos")
  const [quartos, setQuartos] = useState ("todos")

  function filtrarImoveisPorSelecao (){
    let lista = []

    const filtrosDeContratoAplicar = contrato=="todos"? ["Locação", "Venda"]: [contrato]
    const filtrosDeImovelAplicar = tipoImovel=="todos"? ["Apartamento","Casa","Kitnet","Lote/Casa","Galpão","Chácara","Ponto Comercial","Terreno","Sítio","Fazenda","Lote" ]: [tipoImovel]
    const filtrosDeCidade = cidade=="todos"? ["Santa Bárbara","Barão de Cocais", "Catas Altas" ]: [cidade]
    const filtrosQuartos = quartos=="todos"? ["1","2", "3", "4", "5"]: [quartos]

    imoveisDisp.forEach((imovel)=>{
      if(filtrosDeContratoAplicar.includes(imovel.contrato)&&
      filtrosDeImovelAplicar.includes(imovel.tipoImovel)&&
      filtrosDeCidade.includes(imovel.cidade)&&
      filtrosQuartos.includes(imovel.quartos)){
        lista.push(imovel)
      }
    })
    mudarImoveisAtuais(lista);
  }

  function alterarTipoContrato (tpContrato){
    setContrato(tpContrato)
  }

  function alterarTipoImovel (tpImovel){
    setTipoImovel(tpImovel)
  }

  function alterarCidade (tpCidade){
    setCidade(tpCidade)
  }

  function alterarQuartos (tpQuartos){
    setQuartos(tpQuartos)
  }

  useEffect(() => {
      filtrarImoveisPorSelecao()
    }, [contrato, tipoImovel, cidade, quartos])

  return (
    <body>
      <main>
        <article className='FormSearchMain'>
          <div className='MainBox'>
            <div className='boxFilter'>
              <div>
                <h1>
                  Busca avançada
                </h1>
              </div>
              <div className='mSltFilter'>
                <label className="lbTipoContrato"> Contrato </label>
                <select defaultValue="todos" placeholder="todos" value={contrato} onChange={(e)=>{alterarTipoContrato(e.target.value)}} className="sltMode" name="selectInteresse">
                  <option value="todos" label="todos" selected> </option>
                  <option value="Locação" label="Locação"> </option>
                  <option value="Venda" label="Venda"> </option>
                </select>
              </div>
              <div className="mSltFilter">
                <label className="lbTipoImovel"> Tipo de imóvel </label>
                <select defaultValue="todos" placeholder="todos" value={tipoImovel} onChange={(e)=>{alterarTipoImovel(e.target.value)}} className="sltMode" name="sltTipoImovel">
                <option value="todos" label="todos" selected> </option>
                  <option value="Apartamento" label="Apartamento"> </option>
                  <option value="Casa" label="Casa"> </option>
                  <option value="Kitnet" label="Kitnet"> </option>
                  <option value="Chácara" label="Chácara"> </option>
                  <option value="Sítio" label="Sítio"> </option>
                  <option value="Fazenda" label="Fazenda"> </option>
                  <option value="Lote" label="Lote"> </option>
                  <option value="Terreno" label="Terreno"> </option>
                  <option value="Ponto Comercial" label="Ponto Comercial"> </option>
                  <option value="Galpão" label="Galpão"> </option>
                  <option value="Lote/Casa" label="Lote/Casa"> </option>
                </select>
              </div>
              <div className="mSltFilter">
                <label className="lbCidade"> Cidade </label>
                <select defaultValue="todos" placeholder="todos" value={cidade} onChange={(e)=>{alterarCidade(e.target.value)}} className="sltMode" name="sltCidade">
                <option value="todos" label="todos" selected> </option>
                  <option value="Santa Bárbara" label="Santa Bárbara"> </option>
                  <option value="Barão de Cocais" label="Barão de Cocais"> </option>
                  <option value="Catas Altas" label="Catas Altas"> </option>
                </select>
              </div>
              <div className="mSltFilter">
                <label className="lbQuartos"> Quartos </label>
                <select defaultValue="todos" placeholder="todos" value={quartos} onChange={(e)=>{alterarQuartos(e.target.value)}} className="sltMode" name="sltQuartos">
                <option value="todos" label="todos" selected> </option>
                  <option value="1" label="1 quarto"> </option>
                  <option value="2" label="2 quartos"> </option>
                  <option value="3" label="3 quartos"> </option>
                  <option value="4" label="4 quartos"> </option>
                  <option value="5" label="5 quartos"> </option>
                </select>
              </div>
            </div>
          </div>
        </article>
      </main>
    </body>
  )
}

export { Filtragem }
