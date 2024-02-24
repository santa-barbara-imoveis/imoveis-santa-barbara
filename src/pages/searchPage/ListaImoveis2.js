import React, { useEffect, useState } from 'react';
import "./ListaImoveis.css";
import "../../assets/style/brand.css";
import hero from "../../assets/images/wideHeroImage.jpg";
import RenderImoveis from "./listaDeImoveis";
import { imoveisDisp } from '../../data/dataImoveis';
import Pagination from './components/Pagination/Pagination';
import iconContrato from "../../assets/icons/contrato.png";
import iconMoeda from "../../assets/icons/moedas.png";
import iconTotal from "../../assets/icons/total.png";
import iconCod from "../../assets/icons/codigo.png";
import banho from "../../assets/icons/banheira.png";
import vagas from "../../assets/icons/carros.png";
import quartos from "../../assets/icons/quarto.png";
import tpImovel from "../../assets/icons/tipoImovel.png";
import area from "../../assets/icons/area.png";
import { Filtragem } from './components/Filtragem/Filtragem';

function ListaImoveis2() {
  const [imoveis, setImoveis] = useState (imoveisDisp.slice(0, 10));
  const TotalImoveis = imoveisDisp.length;
  const [contrato, setContrato] = useState ("")
  // const [imoveis, setImoveis] = useState ([]);
  const [tipoImovel, setTipoImovel] = useState ("")

  return (
    <body>
      <main>
        <div className="hero" style={{ backgroundImage: `url(${hero})`}}>
          ENCONTRE SEU IMÓVEL
        </div>
        <article className='FormSearchMain'>
          <div className='MainBox'>
          <Filtragem itens = {imoveis} mudarImoveisAtuais = {setImoveis}/>
            {/* <div className='boxFilter'> */}
              {/* <div> */}
                {/* <h1>
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
                <select className="sltMode" name="sltTipoImovel">
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
                <select className="sltMode" name="sltTipoCidade">
                  <option value="Santa Bárbara" label="Santa Bárbara"> </option>
                  <option value="Barão de Cocais" label="Barão de Cocais"> </option>
                </select>
              </div>
              <div className="mSltFilter">
                <label className="lbBairro"> Bairro </label>
                <select className="sltMode" name="sltTipoBairro">
                  <option value="Centro" label="Centro"> </option>
                  <option value="São Francisco" label="São Francisco"> </option>
                </select>
              </div>
              <div className="mSltFilter">
                <label className="lbQuartos"> Quartos </label>
                <select className="sltMode" name="selectQuartos">
                  <option value="1 quarto" label="1 quarto"> </option>
                  <option value="2 quartos" label="2 quartos"> </option>
                  <option value="3 quartos" label="3 quartos"> </option>
                  <option value="4 quartos" label="4 quartos"> </option>
                  <option value="5 quartos ou +" label="5 quartos ou +"> </option>
                </select>
              </div>
              <div className="mSltFilter">
                <label className="lbBanheiros"> Banheiros </label>
                <select className="sltMode" name="sltBanhos">
                  <option value="1 banheiro" label="1 banheiro"> </option>
                  <option value="2 banheiros" label="2 banheiros"> </option>
                  <option value="3 banheiros" label="3 banheiros"> </option>
                  <option value="4 banheiros" label="4 banheiros"> </option>
                  <option value="5 banheiros ou +" label="5 banheiros ou +"> </option>
                </select>
              </div>
              <div className="mSltFilter">
                <label className="lbVagas"> Vagas de garagem </label>
                <select className="sltMode" name="sltVagas">
                  <option value="1 vaga" label="1 vaga"> </option>
                  <option value="2 vagas" label="2 vagas"> </option>
                  <option value="3 vagas" label="3 vagas"> </option>
                  <option value="4 vagas" label="4 vagas"> </option>
                  <option value="5 vagas ou +" label="5 vagas ou +"> </option>
                </select>
              </div>
              <div className="mSltPrice">
                <div className="ipPrice">
                  <label className="lbValor"> Valor Mínimo </label>
                  <input className="inputValor" type="text" name="name" />
                </div>
                <div className="ipPrice">
                  <label className="lbValor"> Valor Máximo </label>
                  <input className="inputValor" type="text" name="name" />
                </div>
              </div>
              <div className='btSearchAd'>
                <button className="btSearchAvance" type="submit"> Buscar </button>
              </div>
            </div> */}

            <div className='boxRenderOptions'>
              <div className='qtdEncontrado'>
                <div className='qtdImoveis'>
                  {TotalImoveis}
                </div>
                <h1>
                  Imóveis encontrados
                </h1>
              </div>
              <Pagination itens = {imoveis} mudarImoveisAtuais = {setImoveis}/>
              <RenderImoveis itens = {imoveis}/>

              <Pagination itens = {imoveis} mudarImoveisAtuais = {setImoveis}/>
            </div>
          </div>
        </article>
      </main>
    </body>
  )
}

export { ListaImoveis2 }
