import React, { useEffect, useState } from 'react';
import "./ListaImoveis.css";
import "../../assets/style/brand.css";
import hero from "../../assets/images/wideHeroImage.jpg";
import RenderImoveis from "./listaDeImoveis";
import { imoveisDisp } from '../../data/dataImoveis';
import Pagination from './Pagination';

// function setarEstadosSeletores (){
//   const [demanda, setDemanda] = useState (["Venda", "Aluguel"])
//   const [demandaSlt, setDemandaSlt] = useState ([])
//   const [tipoImovel, setImovel] = useState ("Apartamento", "Casa", "Kitnet", "Chácara", "Sítio", "Fazenda", "Lote", "Terreno", "Ponto Comercial", "Galpão", "Lote/Casa")
//   const [tipoImovelSlt, setTipoImovelSlt] = useState ([])
//   const [cidade, setCidade] = useState ("Santa Bárbara", "Barão de Cocais")
//   const [cidadeSlt, setCidadeSlt] = useState ([])
//   const [bairro, setBairro] = useState ("Centro", "São Francisco")
//   const [bairroSlt, setBairroSlt] = useState ([])
//   const [quartos, setQuartos] = useState ("1 quarto", "2 quartos", "3 quartos", "4 quartos", "5 quartos")
//   const [quartosSlt, setQuartosSlt] = useState ([])
//   const [banheiros, setBanheiros] = useState ("1 banheiro", "2 banheiros", "3 banheiros", "4 banheiros", "5 banheiros")
//   const [banheirosSlt, setBanheirosSlt] = useState ([])
//   const [vagas, setVagas] = useState ("1 vaga", "2 vagas", "3 vagas", "4 vagas", "5 vagas")
//   const [vagasSlt, setVagasSlt] = useState ([])

//   // const [imoveis, setImoveis] = useState (imoveisDisp.slice(0, 10));
//   // const TotalImoveis = imoveisDisp.length;

//     return (
//       <div className="carrosel">
//         {itens.map((item) => (
//         <div className="BoxImovel">
//           <div className="boxPicture">
//             <img className="imFoto" src={item.fotoCapa}/>
//           </div>
//           <div className="boxDataImovel">
//             <div className="boxTitulo"> {item.bairro} | {item.cidade} | {item.cod} </div>
//             <div className="boxAmenitiesData">
//               <div className='ltBoxData'> <img className="iconS" src={iconContrato}/> {item.contrato} </div>
//               <div className='ltBoxData'> <img className="iconS" src={tpImovel}/> {item.tipoImovel} </div>
//               <div className='ltBoxData'>                      
//                 <img className="iconS" src={iconMoeda}/> {item.valor} </div>
//               <div className='ltBoxData'>                    
//                 <img className="iconS" src={iconTotal}/>Área total: {item.areaTotal} </div>
//               <div className='ltBoxData'> <img className="iconS" src={area}/> Área construida: {item.areaConstruida} </div>
//               <div className='ltBoxData'> <img className="iconS" src={banho}/> {item.banheiros} banheiro/s </div>
//               <div className='ltBoxData'> <img className="iconS" src={quartos}/> {item.quartos} quartos </div>
//               <div className='ltBoxData'> <img className="iconS" src={vagas}/> {item.vagas} vagas </div>
//             </div>
//           </div>
//         </div>
//         ))}
//       </div>
//     );
// }

function ListaImoveis2() {
  const [imoveis, setImoveis] = useState (imoveisDisp.slice(0, 10));
  const TotalImoveis = imoveisDisp.length;
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
                <select className="sltMode" name="selectInteresse">
                  <option value="Alugar" label="Alugar"> </option>
                  <option value="Comprar" label="Comprar"> </option>
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
            </div>

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
