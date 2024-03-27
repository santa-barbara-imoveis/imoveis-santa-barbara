import React, { useEffect, useState } from 'react';
import "../../../../assets/style/brand.css";
import { imoveisDisp } from '../../../../data/dataImoveis';
import { amenitiesQuantities } from '../../../../dicts/amenities-quantity';
import { cities } from '../../../../dicts/cities';
import { contractType, contractTypes } from '../../../../dicts/contract-type';
import { propertyTypes } from '../../../../dicts/property-type';
import "./Filtragem.css";



function Filtragem ({mudarImoveisAtuais, itens, initialFilters}) {
  const [contrato, setContrato] = useState ("todos")
  const [tipoImovel, setTipoImovel] = useState ("todos")
  const [cidade, setCidade] = useState ("todos")
  const [quartos, setQuartos] = useState ("todos")
  const [vagas, setVagas] = useState ("todos")
  const [banhos, setBanhos] = useState ("todos")

  console.log({imoveisDisp, len: imoveisDisp.length})
  useEffect(() => {
    if (initialFilters?.type) {
      setContrato(initialFilters?.type)
      filtrarImoveisPorSelecao({contratoOverride: initialFilters?.type})
    }
  }, [initialFilters])


  function filtrarImoveisPorSelecao ({contratoOverride} = {}){
    let lista = []

    const contract = contratoOverride || contrato


    const filtrosDeContratoAplicar = contract=="todos"? contractTypes: [contract]
    const filtrosDeImovelAplicar = tipoImovel=="todos"? propertyTypes: [tipoImovel]
    const filtrosDeCidade = cidade=="todos"? cities: [cidade]
    const filtrosQuartos = quartos=="todos"? amenitiesQuantities: [quartos]
    const filtrosVagas = vagas=="todos"? amenitiesQuantities: [vagas]
    const filtrosBanhos = banhos=="todos"? amenitiesQuantities: [banhos]

    imoveisDisp.forEach((imovel)=>{
      if(filtrosDeContratoAplicar.includes(imovel.contrato)&&
      filtrosDeImovelAplicar.includes(imovel.tipoImovel)&&
      filtrosDeCidade.includes(imovel.cidade)&&
      filtrosQuartos.includes(imovel.quartos)&&
      filtrosVagas.includes(imovel.vagas)&&
      filtrosBanhos.includes(imovel.banheiros)){
        lista.push(imovel)
      }
      else{
        console.log({imovel})
      }
    })

    console.log({lista})
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

  function alterarVagas (tpVagas){
    setVagas(tpVagas)
  }

  function alterarBanhos (tpBanhos){
    setBanhos(tpBanhos)
  }

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
                  <option value={contractType.rent} label={contractType.rent}> </option>
                  <option value={contractType.buy} label={contractType.buy}> </option>
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
                  <option value="Ponto comercial" label="Ponto comercial"> </option>
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
                  <option value={0} label="0 quarto"> </option>
                  <option value={1} label="1 quarto"> </option>
                  <option value={2} label="2 quartos"> </option>
                  <option value={3} label="3 quartos"> </option>
                  <option value={4} label="4 quartos"> </option>
                  <option value={5} label="5 quartos"> </option>
                </select>
              </div>
              <div className="mSltFilter">
                <label className="lbVagas"> Vagas </label>
                <select defaultValue="todos" placeholder="todos" value={vagas} onChange={(e)=>{alterarVagas(e.target.value)}} className="sltMode" name="sltVagas">
                <option value="todos" label="todos" selected> </option>
                  <option value={0} label="0 vaga"> </option>
                  <option value={1} label="1 vaga"> </option>
                  <option value={2} label="2 Vagas"> </option>
                  <option value={3} label="3 Vagas"> </option>
                  <option value={4} label="4 Vagas"> </option>
                  <option value={5} label="5 Vagas"> </option>
                </select>
              </div>
              <div className="mSltFilter">
                <label className="lbBanhos"> Banheiros </label>
                <select defaultValue="todos" placeholder="todos" value={banhos} onChange={(e)=>{alterarBanhos(e.target.value)}} className="sltMode" name="sltBanhos">
                <option value="todos" label="todos" selected> </option>
                  <option value={0} label="0 banheiro"> </option>
                  <option value={1} label="1 banheiro"> </option>
                  <option value={2} label="2 banheiros"> </option>
                  <option value={3} label="3 banheiros"> </option>
                  <option value={4} label="4 banheiros"> </option>
                  <option value={5} label="5 banheiros"> </option>
                </select>
              </div>
              <div className="divBt">
                <button onClick={(e)=>filtrarImoveisPorSelecao()} className="btBuscarIm" name="btBuscarIm"> Buscar </button>
              </div>
            </div>
          </div>
        </article>
      </main>
    </body>
  )
}

export { Filtragem };

