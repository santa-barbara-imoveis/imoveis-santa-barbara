import React from 'react';
import "./ListaImoveis.css";
import "../../assets/style/brand.css";
import hero from "../../assets/images/wideHeroImage.jpg";
import logo from "../../assets/logo/logo.png";
import banho from "../../assets/icons/banheira.png";
import area from "../../assets/icons/area.png";
import vagas from "../../assets/icons/carros.png";
import quartos from "../../assets/icons/quarto.png";
import fotoFrente from "../../assets/images/001_fachada.jpg";
import fotoFrente2 from "../../assets/images/002_fachada.jpeg";
import fotoFrente3 from "../../assets/images/003_fachada.jpg";
import fotoFrente4 from "../../assets/images/L072.jpeg";
import fotoFrente5 from "../../assets/images/L071.jpg";
import fotoFrente6 from "../../assets/images/L063.jpeg";
import setaE from "../../assets/icons/seta-esquerda.png";
import setaD from "../../assets/icons/seta-direita.png";
import iconTel from "../../assets/icons/telefone.png";
import iconEmail from "../../assets/icons/email.png";
import iconFace from "../../assets/icons/facebook.png";
import iconInsta from "../../assets/icons/instagram.png";
import iconZap from "../../assets/icons/zapPB.png";
import iconCreci from "../../assets/icons/garantia.png";
import iconEndereco from "../../assets/icons/local.png";
import { useEffect, useState } from 'react';

function LandingPage() {
  return (
    <body>
      <div className="quickInfos">
        <div className="qkCreci">
          <img className="qkIcon" src={iconCreci} />
          CRECI:MGJ0007201
        </div>
        <div className="qkTelef">
          <img className="qkIcon" src={iconTel} />
          31 3832-1674
        </div>
        <div className="qkTelef">
          <img className="qkIcon" src={iconTel} />
          31 97186-1985
        </div>
        <div className="qkEmail">
          <img className="qkIcon" src={iconEmail} />
          contato@santabarbaraimoveis.com.br
        </div>
        <div className='qkNetwork'>
          <div className="qkFace">
            <img className="qkIcon" src={iconFace} />
          </div>
          <div className="qkInsta">
            <img className="qkIcon" src={iconInsta} />
          </div>
          <div className="qkZap">
            <img className="qkIcon" src={iconZap} />
          </div>
        </div>
      </div>
      <header className="head">
        <div className="logo">
          <img className="logoImage" src={logo} />
        </div>
        <nav className="navHead" >
          <a href=""> Home </a>
          <a href=""> Alugar </a>
          <a href=""> Comprar </a>
          <a href=""> Contato </a>
          <a href=""> Instituicional </a>
          <a href="" className='entrar'> Entrar </a>
        </nav>
      </header>
      <main>
        <div className="hero" style={{ backgroundImage: `url(${hero})` }}>
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
              <div className="BoxImovel">
                  <div className="boxPicture">
                    <img className="imFoto" src={fotoFrente3}/>
                  </div>
                  <div className="boxDataImovel">
                      <div className="boxTitulo">
                        Casa de alto padrão à venda | Residencial Santo Antônio | Código: V035
                      </div>
                      <div className="boxAmenitiesData">
                        <div className='ltBoxData'>                      
                          <img className="iconS" src={area}/>
                          R$ 920.000,00
                        </div>
                        <div className='ltBoxData'>                    
                          <img className="iconS" src={area}/>
                          Área total: 1080 m2
                        </div>
                        <div className='ltBoxData'>                    
                          <img className="iconS" src={area}/>
                          Área construida: 301 m2
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </article>

        <footer className='boxFooter'>

          <div className='boxConta'>
            <p className='boxFootTitulo'>CONTATO</p>
            <p className='boxFootLinha'>
              <img className="qkIconLocal" src={iconEndereco} />
              Rua X de Novembro, 129, Centro, Santa Bárbara
            </p>
            <p className='boxFootLinha'>
              <img className="qkIconLocal" src={iconTel} />
              31 97189-1985
            </p>
            <p>
              <img className="qkIconLocal" src={iconEmail} />
              contato@santabarbaraimoveis.com.br
            </p>
          </div>

          <div className='boxMapa'>
            <p className='boxFootTitulo'>MAPA</p>
            <p>Home</p>
            <p>Alugar</p>
            <p>Comprar</p>
            <p>Institucional</p>
          </div>

          <div className='boxConta'>
            <p className='boxFootTitulo'>ENTRAMOS EM CONTATO</p>
            <div className='textDif'>Digite o seu email que entraremos em contato.</div>
            <div className='textDif'>Ao informar meus dados, eu concordo com a Política de Privacidade.</div>
            <div className='boxEmailMsg'>
              <input className="inputEmail" type="text" name="email" />
            </div>
            <div className='boxBotao'>
              <button className="btEnviar" type="submit">
                Enviar
              </button>
            </div>
          </div>

        </footer>
        <footer className='footExtra'>
          Copyright 2024 Desenvolvido por DevMind
          <div className="qkFace">
            <img className="qkIcon" src={iconFace} />
          </div>
          <div className="qkInsta">
            <img className="qkIcon" src={iconInsta} />
          </div>
        </footer>
      </main>
    </body>
  )
}

export {
  LandingPage
}
