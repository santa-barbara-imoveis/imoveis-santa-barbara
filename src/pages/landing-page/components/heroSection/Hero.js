import React from 'react';
import "./Hero.css";
import hero from "./assets/largo.jpg";

function Hero() {
    return (
      <main className="Main">
        <div className="hero" style={{backgroundImage:`url(${hero})`}}>
          BEM VINDO À SANTA BÁRBARA IMÓVEIS
          <a className="botaoHero" href="">
            <button type="submit">
                Saiba mais
            </button>
          </a>
        </div>
        <article className='FormSearch'>
          <form>
            <div className='linha1select'>
              <div>
                  <select className="sltMode" name="selectInteresse">
                      <option value="Alugar" label="Alugar"> </option>
                      <option value="Comprar" label="Comprar"> </option>
                  </select>
              </div>
              <div className="sltTipoImovel">
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
              <div className="sltCidade">
                  <select className="sltMode" name="sltTipoCidade">
                      <option value="Santa Bárbara" label="Santa Bárbara"> </option>
                      <option value="Barão de Cocais" label="Barão de Cocais"> </option>
                  </select>
              </div>
              <div className="sltBairro">
                  <select className="sltMode" name="sltTipoBairro">
                      <option value="Centro" label="Centro"> </option>
                      <option value="São Francisco" label="São Francisco"> </option>
                  </select>
              </div>
            </div>
            <div className='linha2select'>
              <div>
                  <select className="sltMode" name="selectQuartos">
                      <option value="1 quarto" label="1 quarto"> </option>
                      <option value="2 quartos" label="2 quartos"> </option>
                      <option value="3 quartos" label="3 quartos"> </option>
                      <option value="4 quartos" label="4 quartos"> </option>
                      <option value="5 quartos ou +" label="5 quartos ou +"> </option>
                  </select>
              </div>
              <div>
                  <select className="sltMode" name="sltVagas">
                      <option value="1 vaga" label="1 vaga"> </option>
                      <option value="2 vagas" label="2 vagas"> </option>
                      <option value="3 vagas" label="3 vagas"> </option>
                      <option value="4 vagas" label="4 vagas"> </option>
                      <option value="5 vagas ou +" label="5 vagas ou +"> </option>
                  </select>
              </div>
              <div>
                <input  className="inputValor" type="text" name="name" />
              </div>
              <div>
                <input  className="inputValor" type="text" name="name" />
              </div>
              <button className="botaoBuscar" type="submit"> Buscar </button>
            </div>
          </form>
        </article>
      </main>
    )
  }
  
export { Hero }
