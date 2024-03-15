import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import "../../assets/style/global.css";
import { imoveisDisp } from '../../data/dataImoveis';
import "./style.css";

import area from "../../assets/icons/area.png";
import banho from "../../assets/icons/banheira.png";
import vagas from "../../assets/icons/carros.png";
import iconContrato from "../../assets/icons/contrato.png";
import iconMoeda from "../../assets/icons/moedas.png";
import quartos from "../../assets/icons/quarto.png";
import tpImovel from "../../assets/icons/tipoImovel.png";
import iconTotal from "../../assets/icons/total.png";

function PropertyDetails() {
    let { propertyId } = useParams();

    const property = useMemo(() => imoveisDisp.find(({cod}) => String(cod).toLowerCase() === String(propertyId).toLowerCase()), [propertyId]) 

    const {titulo, fotoCapa} = property

    return (
        <div className="fullOfParent">
            <h1 style={{color: 'black', textAlign: "center", margin: "15px 0px"}}>{titulo}</h1>
            <img className="photoProperty" src={fotoCapa} />
            <div className="boxDataImovel">
            <div className="boxTitulo"> {property.bairro} | {property.cidade} | {property.cod} </div>
            <div className="boxAmenitiesData">
              <div className='ltBoxData'> <img className="iconS" src={iconContrato}/> {property.contrato} </div>
              <div className='ltBoxData'> <img className="iconS" src={tpImovel}/> {property.tipoImovel} </div>
              <div className='ltBoxData'>                      
                <img className="iconS" src={iconMoeda}/> {property.valor} </div>
              <div className='ltBoxData'>                    
                <img className="iconS" src={iconTotal}/>Área total: {property.areaTotal} </div>
              <div className='ltBoxData'> <img className="iconS" src={area}/> Área construida: {property.areaConstruida} </div>
              <div className='ltBoxData'> <img className="iconS" src={banho}/> {property.banheiros} banheiro/s </div>
              <div className='ltBoxData'> <img className="iconS" src={quartos}/> {property.quartos} quartos </div>
              <div className='ltBoxData'> <img className="iconS" src={vagas}/> {property.vagas} vagas </div>
            </div>
          </div>
        </div>
  )
}
  
export {
    PropertyDetails
};

