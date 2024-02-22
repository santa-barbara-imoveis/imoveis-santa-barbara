import React, { useEffect, useState } from 'react';
import "./Filtragem.css";
import "../../assets/style/brand.css";
import hero from "../../assets/images/wideHeroImage.jpg";
import { imoveisDisp } from '../../data/dataImoveis';
import iconContrato from "../../assets/icons/contrato.png";
import iconMoeda from "../../assets/icons/moedas.png";
import iconTotal from "../../assets/icons/total.png";
import banho from "../../assets/icons/banheira.png";
import vagas from "../../assets/icons/carros.png";
import quartos from "../../assets/icons/quarto.png";
import tpImovel from "../../assets/icons/tipoImovel.png";
import area from "../../assets/icons/area.png";

function Filtragem () {
  const TotalImoveis = imoveisDisp.length;
  const [contrato, setContrato] = useState ("")
  const [imoveis, setImoveis] = useState ([]);

  function renderImoveisFiltrados (tpContrato){
    setContrato(tpContrato)
    let lista = []
    imoveisDisp.forEach((contra)=>{
      if(contra.contrato==tpContrato){
        lista.push(
            <div className="BoxImovel" key={contra.cod}>
              <div className="boxPicture">
                <img className="imFoto" src={contra.fotoCapa}/>
              </div>
              <div className="boxDataImovel">
                <div className="boxTitulo"> {contra.bairro} | {contra.cidade} | {contra.cod} </div>
                <div className="boxAmenitiesData">
                  <div className='ltBoxData'> <img className="iconS" src={iconContrato}/> {contra.contrato} </div>
                  <div className='ltBoxData'> <img className="iconS" src={tpImovel}/> {contra.tipoImovel} </div>
                  <div className='ltBoxData'>                      
                    <img className="iconS" src={iconMoeda}/> {contra.valor} </div>
                  <div className='ltBoxData'>                    
                    <img className="iconS" src={iconTotal}/>Área total: {contra.areaTotal} </div>
                  <div className='ltBoxData'> <img className="iconS" src={area}/> Área construida: {contra.areaConstruida} </div>
                  <div className='ltBoxData'> <img className="iconS" src={banho}/> {contra.banheiros} banheiro/s </div>
                  <div className='ltBoxData'> <img className="iconS" src={quartos}/> {contra.quartos} quartos </div>
                  <div className='ltBoxData'> <img className="iconS" src={vagas}/> {contra.vagas} vagas </div>
                </div>
              </div>
            </div>
        )
      }
    })
    setImoveis(lista)
  }

  return (
    <body>
      <main>
        <div className="hero" style={{ backgroundImage: `url(${hero})`}}>
          ENCONTRE SEU IMÓVEL
        </div>
        <article className='FormSearchMain'>
          <div className='MainBox'>
            <div className='boxFilter'>
              <div>
                <h1>
                  Busca avançada
                </h1>
              </div>
              <div className='mSltFilter'>
                <label className="lbTipoContrato"> Demanda </label>
                <select value={contrato} onChange={(e)=>{renderImoveisFiltrados(e.target.value)}} className="sltMode" name="selectInteresse">
                  <option value="Locação" label="Locação"> </option>
                  <option value="Venda" label="Venda"> </option>
                </select>
              </div>
            </div>
            <div className="carrosel">
                {imoveis}
            </div>
          </div>
        </article>
      </main>
    </body>
  )
}

export { Filtragem }
