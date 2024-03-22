import React, { useMemo } from 'react';
import ImageGallery from "react-image-gallery";
import { useParams } from 'react-router-dom';
import area from "./iconX/area.png";
import banho from "./iconX/banheira.png";
import vagas from "./iconX/carros.png";
import iconContrato from "./iconX/contrato.png";
import iconMoeda from "./iconX/moedas.png";
import quartos from "./iconX/quarto.png";
import tpImovel from "./iconX/tipoImovel.png";
import iconTotal from "./iconX/total.png";
import "../../assets/style/global.css";
import { imoveisDisp } from '../../data/dataImoveis';
import "./style.css";

function PropertyDetails() {
    let { propertyId } = useParams();

    const property = useMemo(() => imoveisDisp.find(({cod}) => String(cod).toLowerCase() === String(propertyId).toLowerCase()), [propertyId]) 

    const {titulo, fotoCapa, fotos, ruaNum, bairro, cidade, Estado, descricao} = property

    console.log({fotos})

    const photos = useMemo(() => (
        Boolean(fotos.length) 
            ? fotos?.map((p) => (
                {
                    original: p,
                    thumbnail: p,
                }))
            : [fotoCapa]
    ), [fotos])

    return (
        <div className="fullOfParent singlePropertyDetail">
            {titulo && <h1 style={{color: 'black', textAlign: "center", margin: "15px 0px"}}>{titulo}</h1>}
            <ImageGallery  className="imageGallery" items={photos} />;
            {/* <img className="photoProperty" src={fotoCapa} /> */}
            <div className="boxDataImovel boxDataImovelPropertyDetails">
                <div className="boxTituloNovo"> {property.bairro} | {property.cidade} | {property.cod} </div>
                <div className="boxAmenitiesData boxAmenitiesDataPropertyDetails">
                {property.contrato && <div className='ltBoxDataN'> <img className="iconX" src={iconContrato}/> {property.contrato} </div>}
                {property.tipoImovel && <div className='ltBoxDataN'> <img className="iconX" src={tpImovel}/> {property.tipoImovel} </div>}
                {property.valor && (
                    <div className='ltBoxDataN'>                      
                        <img className="iconX" src={iconMoeda}/> {property.valor}
                    </div>
                )}
                {property.areaTotal && (
                    <div className='ltBoxDataN'>                 
                        <img className="iconX" src={iconTotal}/>Área total: {property.areaTotal} 
                    </div>
                )}
                {property.areaConstruida && <div className='ltBoxDataN'> <img className="iconX" src={area}/> Área construida: {property.areaConstruida} </div>}
                {property.banheiros && <div className='ltBoxDataN'> <img className="iconX" src={banho}/> {property.banheiros} banheiro/s </div>}
                {property.quartos && <div className='ltBoxDataN'> <img className="iconX" src={quartos}/> {property.quartos} quartos </div>}
                {property.vagas && <div className='ltBoxDataN'> <img className="iconX" src={vagas}/> {property.vagas} vagas </div>}
                </div>
                {descricao && <div className="boxTituloNovo" style={{fontSize: "18px"}}> {descricao} </div>}
                <h1 className="address">{ruaNum && ruaNum.length > 2 ? `${ruaNum}, ` : ""}{bairro ? `${bairro} - ` : ""}{cidade ? `${cidade}, ` : ""}{Estado ? `${Estado}` : ""}</h1>
            </div>
        </div>
  )
}
  
export {
    PropertyDetails
};

