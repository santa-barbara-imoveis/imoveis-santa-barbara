import React, { useEffect, useState } from 'react';
import "./Filtragem.css";
import "../../assets/style/brand.css";
import hero from "../../assets/images/wideHeroImage.jpg";
import { imoveisDisp } from '../../../../data/dataImoveis';
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
  const [tipoImovel, setTipoImovel] = useState ("")

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

  function renderImoveisFiltrados2 (tpImovel){
    setTipoImovel(tpImovel)
    let lista = []
    imoveisDisp.forEach((im)=>{
      if(im.tipoImovel==tpImovel){
        lista.push(
            <div className="BoxImovel" key={im.cod}>
              <div className="boxPicture">
                <img className="imFoto" src={im.fotoCapa}/>
              </div>
              <div className="boxDataImovel">
                <div className="boxTitulo"> {im.bairro} | {im.cidade} | {im.cod} </div>
                <div className="boxAmenitiesData">
                  <div className='ltBoxData'> <img className="iconS" src={iconContrato}/> {im.contrato} </div>
                  <div className='ltBoxData'> <img className="iconS" src={tpImovel}/> {im.tipoImovel} </div>
                  <div className='ltBoxData'>                      
                    <img className="iconS" src={iconMoeda}/> {im.valor} </div>
                  <div className='ltBoxData'>                    
                    <img className="iconS" src={iconTotal}/>Área total: {im.areaTotal} </div>
                  <div className='ltBoxData'> <img className="iconS" src={area}/> Área construida: {im.areaConstruida} </div>
                  <div className='ltBoxData'> <img className="iconS" src={banho}/> {im.banheiros} banheiro/s </div>
                  <div className='ltBoxData'> <img className="iconS" src={quartos}/> {im.quartos} quartos </div>
                  <div className='ltBoxData'> <img className="iconS" src={vagas}/> {im.vagas} vagas </div>
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
              <div className="mSltFilter">
                <label className="lbTipoImovel"> Tipo de imóvel </label>
                <select value={tipoImovel} onChange={(e)=>{renderImoveisFiltrados2(e.target.value)}} className="sltMode" name="sltTipoImovel">
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
