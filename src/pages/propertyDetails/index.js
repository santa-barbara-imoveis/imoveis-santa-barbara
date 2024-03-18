import React, { useMemo } from 'react';
import ImageGallery from "react-image-gallery";
import { useParams } from 'react-router-dom';
import area from "../../assets/icons/area.png";
import banho from "../../assets/icons/banheira.png";
import vagas from "../../assets/icons/carros.png";
import iconContrato from "../../assets/icons/contrato.png";
import iconMoeda from "../../assets/icons/moedas.png";
import quartos from "../../assets/icons/quarto.png";
import tpImovel from "../../assets/icons/tipoImovel.png";
import iconTotal from "../../assets/icons/total.png";
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
                <div className="boxTitulo"> {property.bairro} | {property.cidade} | {property.cod} </div>
                <div className="boxAmenitiesData boxAmenitiesDataPropertyDetails">
                {property.contrato && <div className='ltBoxData'> <img className="iconS" src={iconContrato}/> {property.contrato} </div>}
                {property.tipoImovel && <div className='ltBoxData'> <img className="iconS" src={tpImovel}/> {property.tipoImovel} </div>}
                {property.valor && (
                    <div className='ltBoxData'>                      
                        <img className="iconS" src={iconMoeda}/> {property.valor}
                    </div>
                )}
                {property.areaTotal && (
                    <div className='ltBoxData'>                    
                        <img className="iconS" src={iconTotal}/>Área total: {property.areaTotal} 
                    </div>
                )}
                {property.areaConstruida && <div className='ltBoxData'> <img className="iconS" src={area}/> Área construida: {property.areaConstruida} </div>}
                {property.banheiros && <div className='ltBoxData'> <img className="iconS" src={banho}/> {property.banheiros} banheiro/s </div>}
                {property.quartos && <div className='ltBoxData'> <img className="iconS" src={quartos}/> {property.quartos} quartos </div>}
                {property.vagas && <div className='ltBoxData'> <img className="iconS" src={vagas}/> {property.vagas} vagas </div>}
                </div>
                {descricao && <div className="boxTitulo" style={{fontSize: "14px"}}> {descricao} </div>}
                <h1 className="address">{ruaNum && ruaNum.length > 2 ? `${ruaNum}, ` : ""}{bairro ? `${bairro} - ` : ""}{cidade ? `${cidade}, ` : ""}{Estado ? `${Estado}` : ""}</h1>
            </div>
        </div>
  )
}
  
export {
    PropertyDetails
};

