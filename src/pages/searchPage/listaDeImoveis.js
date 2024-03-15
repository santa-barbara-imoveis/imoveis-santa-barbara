import React from 'react';
import { Link } from 'react-router-dom';
import area from "../../assets/icons/area.png";
import banho from "../../assets/icons/banheira.png";
import vagas from "../../assets/icons/carros.png";
import iconContrato from "../../assets/icons/contrato.png";
import iconMoeda from "../../assets/icons/moedas.png";
import quartos from "../../assets/icons/quarto.png";
import tpImovel from "../../assets/icons/tipoImovel.png";
import iconTotal from "../../assets/icons/total.png";
import "./ListaImoveis.css";

function RenderImoveis({itens}) 
{
    return (
      <div className="carrosel">
        {itens.map((item) => (
        <Link to={`imovel/${item.cod}`}>

        <div className="BoxImovel">
          <div className="boxPicture">
            <img className="imFoto" src={item.fotoCapa}/>
          </div>
          <div className="boxDataImovel">
            <div className="boxTitulo"> {item.bairro} | {item.cidade} | {item.cod} </div>
            <div className="boxAmenitiesData">
              <div className='ltBoxData'> <img className="iconS" src={iconContrato}/> {item.contrato} </div>
              <div className='ltBoxData'> <img className="iconS" src={tpImovel}/> {item.tipoImovel} </div>
              <div className='ltBoxData'>                      
                <img className="iconS" src={iconMoeda}/> {item.valor} </div>
              <div className='ltBoxData'>                    
                <img className="iconS" src={iconTotal}/>Área total: {item.areaTotal} </div>
              <div className='ltBoxData'> <img className="iconS" src={area}/> Área construida: {item.areaConstruida} </div>
              <div className='ltBoxData'> <img className="iconS" src={banho}/> {item.banheiros} banheiro/s </div>
              <div className='ltBoxData'> <img className="iconS" src={quartos}/> {item.quartos} quartos </div>
              <div className='ltBoxData'> <img className="iconS" src={vagas}/> {item.vagas} vagas </div>
            </div>
          </div>
        </div>
        </Link>

        ))}
      </div>
    );
};

export default RenderImoveis
