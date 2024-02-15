import React from 'react';
import "./ListaImoveis.css";
import "../../assets/style/brand.css";
import hero from "../../assets/images/wideHeroImage.jpg";
import RenderImoveis from "./listaDeImoveis";
import ffV003 from "../../assets/images/V003.jpeg";
import ffV004 from "../../assets/images/V004.jpg";
import ffV006 from "../../assets/images/V006.jpg";
import ffV021 from "../../assets/images/V021.jpg";
import ffV023 from "../../assets/images/V023.jpg";
import ffV035 from "../../assets/images/V035.jpeg";
import ffV047 from "../../assets/images/V047.jpg";
import ffV052 from "../../assets/images/V052.jpg";
import ffV055 from "../../assets/images/V055.jpg";
import ffV058 from "../../assets/images/V058.jpeg";
import ffV060 from "../../assets/images/V060.jpg";
import ffV062 from "../../assets/images/V062.jpg";

const imoveisDisp = [
  {
      fotoCapa: ffV003,
      cod: "V003",
      contrato: "Venda",
      tipoImovel:"Casa/Lote",
      ruaNum: "Domingos Pena, s/n",
      bairro:"Centro",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:2,
      vagas:1,
      valor: "R$ 900.000,00",
      areaTotal: "1.116,40 m²",
      areaConstruida: "260 m²",
      titulo:"Oportunidade para compra no centro de Santa Bárbara",
      descricao:"Sala de TV, sala de jantar, cozinha estilo americana, despensa, área de serviço, quintal, garagem ampla"
  },
  {
      fotoCapa: ffV004,
      cod: "V004",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "Rua Nossa Senhora das Mercês, nº 182 (próximo ao Hospital)",
      bairro:"Centro",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:2,
      vagas:0,
      valor:"R$ 270.000,00",
      areaTotal:"119,2 m²",
      areaConstruida: "120 m²",
      titulo:"Ótima oportunidade para compra no centro de Santa Bárbara",
      descricao:"Casa em área residencial, localizada no centro da cidade (próximo ao Hospital e a Igreja Nossa Senhora das Mercês). Local possui infraestrutura completa (rua calçada, água, energia, esgoto e passeio)"
  },
  {
      fotoCapa: ffV006,
      cod: "V006",
      contrato: "Venda",
      tipoImovel:"Lote/Casa",
      ruaNum: "Rua Conselheiro Afonso Pena, 204 e 210",
      bairro:"Centro",
      cidade:"Santa_Bárbara",
      Estado:"Minas_Gerais",
      quartos:2,
      banheiros:1,
      vagas:1,
      valor:"R$ 550.000,00",
      areaTotal:"736,10 m²",
      areaConstruida: "247 m²",
      titulo:"Ótima oportunidade para compra no centro de Santa Bárbara",
      descricao:"Imóvel com área total de 736,10 m² no centro (em frente ao Posto Shell). Localização privilegiada. Infraestrutura completa (acesso a rua calçada, água, energia, esgoto e passeio). Espaço pode ser utilizado para fim comercial e residencial. Lote todo murado."
  },
  {
      fotoCapa: ffV021,
      cod: "V021",
      contrato: "Venda",
      tipoImovel:"Lote",
      ruaNum: "Retiro Córrego do Sena, s/n",
      bairro:"Trevo de Santa Bárbara",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 570.000,00",
      areaTotal:"949 m²",
      areaConstruida: "0 m²",
      titulo:"Lote à venda próximo ao trevo de Santa Bárbara",
      descricao:"Lote plano com excelente localização; 949 m². De frente para a rodovia MG129 (sentido Catas Altas)"
},
{
    fotoCapa: ffV023,
    cod: "V023",
    contrato: "Venda",
    tipoImovel:"Lote/Casa",
    ruaNum: "Rua Presidente Costa e Silva, 129",
    bairro:"Santa Terezinha",
    cidade:"Santa Bárbara",
    Estado:"Minas Gerais",
    quartos:0,
    banheiros:0,
    vagas:0,
    valor:"R$ 310.000,00",
    areaTotal:"401 m²",
    areaConstruida: "45,90 m²",
    titulo:"Oportunidade para investimento no bairro Santa Terezinha",
    descricao:"Localização privilegiada (próximo ao centro da cidade). Infraestrutura completa (acesso a rua calçada, água, energia, esgoto e passeio). Lote todo murado."
},
{
    fotoCapa: ffV035,
    cod: "V035",
    contrato: "Venda",
    tipoImovel:"Casa",
    ruaNum: "Rua Presidente Costa e Silva, 129",
    bairro:"Residencial Santo Antônio",
    cidade:"Santa Bárbara",
    Estado:"Minas Gerais",
    quartos:3,
    banheiros:2,
    vagas:5,
    valor:"R$ 920.000,00",
    areaTotal:"1080 m²",
    areaConstruida: "301 m²",
    titulo:"Casa de alto padrão à venda - Residencial Santo Antônio",
    descricao:"03 quartos / 02 banheiros (01 suíte). Sala de TV / Sala de jantar. Cozinha estilo americana. Despensa / área de serviço. Quintal / Garagem ampla."
},
{
    fotoCapa: ffV047,
    cod: "V047",
    contrato: "Venda",
    tipoImovel:"Lote/Casa",
    ruaNum: "Rua João Mota, 524",
    bairro:"Centro",
    cidade:"Santa Bárbara",
    Estado:"Minas Gerais",
    quartos:0,
    banheiros:0,
    vagas:0,
    valor:"R$ 550.000,00",
    areaTotal:"520 m²",
    areaConstruida: "520 m²",
    titulo:"Ótima oportunidade de compra, imóvel no centro de Santa Bárbara",
    descricao:"Localizado na João Mota (rua de altíssima movimentação). Ideal para fim comercial. 13m de frente. Infraestrutura completa (acesso a rua calçada, água, energia, esgoto e passeio)."
},
{
    fotoCapa: ffV052,
    cod: "V052",
    contrato: "Venda",
    tipoImovel:"Chácara",
    ruaNum: "Rua João Mota, 524",
    bairro:"Centro",
    cidade:"São Gonçalo do Rio Abaixo",
    Estado:"Minas_Gerais",
    quartos:0,
    banheiros:0,
    vagas:0,
    valor:"R$ 130.000,00",
    areaTotal:"3.000 m²",
    areaConstruida: "0 m²",
    titulo:"Vende-se chácaras em frente a represa do Peti",
    descricao:"Excelente opção para quem busca tranquilidade e qualidade de vida. Chácaras de 3.000m² (ao lado do Retiro dos Chalés). 11 km de Santa Bárbara. 10km de São Gonçalo. 25km de João Monlevade. Infraestrutura completa e fácil acesso!"
},
{
    fotoCapa: ffV055,
    cod: "V055",
    contrato: "Venda",
    tipoImovel:"Casa",
    ruaNum: "Rua José Carlos dos Santos, 161",
    bairro:"São Vicente",
    cidade:"Santa Bárbara",
    Estado:"Minas Gerais",
    quartos:2,
    banheiros:1,
    vagas:1,
    valor:"R$ 216.000,00",
    areaTotal:"70 m²",
    areaConstruida: "150 m²",
    titulo:"Vende-se casa no bairro São Vicente",
    descricao:"- Sala / copa / cozinha. Sala TV / Lavanderia. Garagem para 01 carro. Imóvel de 3 andares e com bom acabamento."
},
{
  fotoCapa: ffV058,
  cod: "V058",
  contrato: "Venda",
  tipoImovel:"Casa",
  ruaNum: "Avenida Petrina de Castro Chaves, 92",
  bairro:"Centro",
  cidade:"Santa Bárbara",
  Estado:"Minas Gerais",
  quartos:"-",
  banheiros:"-",
  vagas:"-",
  valor:"R$ 1.600.000,00",
  areaTotal:"1008 m²",
  areaConstruida: "- m²",
  titulo:"Imóvel  à venda no centro de Santa Bárbara",
  descricao:"Imóvel em lote de 1008m² próximo à Igreja Nossa Senhora do Rosário.Imóvel possui 03 casas e 01 kitnet. Área comum com jardim, churrasqueira, sinuca. Infraestrutura completa (acesso a rua calçada, água, energia, esgoto)."
},
{
  fotoCapa: ffV060,
  cod: "V060",
  contrato: "Venda",
  tipoImovel:"Lote",
  ruaNum: "Avenida Petrina de Castro Chaves, 92",
  bairro:"Cidade Nova",
  cidade:"Barão de Cocais",
  Estado:"Minas Gerais",
  quartos:"-",
  banheiros:"-",
  vagas:"-",
  valor:"R$ 100.000,00",
  areaTotal:"300 m²",
  areaConstruida: "- m²",
  titulo:"Vende-se lote em Barão de Cocais",
  descricao:"Não financia. Infraestrutura completa."
},
{
  fotoCapa: ffV062,
  cod: "V062",
  contrato: "Venda",
  tipoImovel:"Fazenda",
  ruaNum: "-",
  bairro:"Represa de Peti",
  cidade:"Santa Bárbara",
  Estado:"Minas Gerais",
  quartos:"-",
  banheiros:"-",
  vagas:"-",
  valor:"R$ 4.500.000,00",
  areaTotal:"32 ha",
  areaConstruida: "- m²",
  titulo:"Vende-se linda propriedade de 32ha, à margem do lago da represa do Peti",
  descricao:"Excelente opção para quem busca tranquilidade e qualidade de vida. Casa sede de 200m².Casa de hóspede de 200m².Área de lazer de 276m². 02 casas de caseiro. 5 hectares de cana. Produção integrada de cachaça. Curral. Infraestrutura completa e fácil acesso."
}
]

function LandingPage() {
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
              <h1>
                Imóveis encontrados
              </h1>
              <RenderImoveis itens = {imoveisDisp}/>
            </div>

          </div>
        </article>
      </main>
    </body>
  )
}

export {
  LandingPage
}
