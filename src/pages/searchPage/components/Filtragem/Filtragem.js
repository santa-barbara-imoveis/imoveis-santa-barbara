import React, { useEffect, useState } from 'react';
import "./Filtragem.css";
import "../../../../assets/style/brand.css";
import hero from "../../../../assets/images/wideHeroImage.jpg";
import { imoveisDisp } from '../../../../data/dataImoveis';

function Filtragem ({mudarImoveisAtuais, itens}) {
  const [contrato, setContrato] = useState ("todos")
  const [tipoImovel, setTipoImovel] = useState ("todos")


  function filtrarImoveisPorSelecao (){
    let lista = []

    const filtrosDeContratoAplicar = contrato=="todos"? ["Locação", "Venda"]: [contrato]
    const filtrosDeImovelAplicar = tipoImovel=="todos"? ["Apartamento","Casa","Kitnet","Lote/Casa","Galpão","Chácara","Ponto Comercial","Terreno","Sítio","Fazenda","Lote" ]: [tipoImovel]

    imoveisDisp.forEach((imovel)=>{
      if(filtrosDeContratoAplicar.includes(imovel.contrato)&&filtrosDeImovelAplicar.includes(imovel.tipoImovel)){
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

  useEffect(() => {
      filtrarImoveisPorSelecao()
    }, [contrato, tipoImovel])

  return (
    <body>
      <main>
        {/* <div className="hero" style={{ backgroundImage: `url(${hero})`}}>
          ENCONTRE SEU IMÓVEL
        </div> */}
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
            </div>
          </div>
        </article>
      </main>
    </body>
  )
}

export { Filtragem }
