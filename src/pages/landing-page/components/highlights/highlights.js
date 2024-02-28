import React from 'react';
import "./Highlights.css";
import banho from "./assets/banheira.png";
import area from "./assets/area.png";
import vagas from "./assets/carros.png";
import quartos from "./assets/quarto.png";
import fotoFrente from "./assets/001_fachada.jpg";
import fotoFrente2 from "./assets/002_fachada.jpeg";
import fotoFrente3 from "./assets/003_fachada.jpg";
import setaE from "./assets/seta-esquerda.png";
import setaD from "./assets//seta-direita.png";

function Highlights() {
    return (
      <article className='highlts'>
        <div className="tituloBoxVenda">DESTAQUE VENDA</div>
        <div className="iconSetaPai">
          <img className="iconSeta" src={setaE} />
          <img className="iconSeta" src={setaD} />
        </div>
        <div className="opcaoImoveis">
          <div className="boxImovel">
            <div className="imFotoMain">
              <img className="imFoto" src={fotoFrente} />
              <div className="boxPreco">
                <div className="tipoContrato">Venda</div>
                <div className="precoImovel">R$ 2.000.000,00</div>
              </div>
            </div>
            <div className="imBairroCidade">
              Capim Cheiroso - Barão de Cocais
            </div>
            <div className="imId">Código: 001</div>
            <div className="imAmenities">
              <div className="iconsAmenities">
                <img className="icon" src={area} />
                300
                <img className="icon" src={banho} />
                2
                <img className="icon" src={vagas} />
                2
                <img className="icon" src={quartos} />3
              </div>
            </div>
          </div>

          <div className="boxImovel">
            <div className="imFotoMain">
              <img className="imFoto" src={fotoFrente2} />
              <div className="boxPreco">
                <div className="tipoContrato">Venda</div>
                <div className="precoImovel">R$ 490.000,00</div>
              </div>
            </div>
            <div className="imBairroCidade">Serra Vila - Barão de Cocais</div>
            <div className="imId">Código: V134</div>
            <div className="imAmenities">
              <div className="iconsAmenities">
                <img className="icon" src={area} />
                200
                <img className="icon" src={banho} />
                2
                <img className="icon" src={vagas} />
                3
                <img className="icon" src={quartos} />4
              </div>
            </div>
          </div>

          <div className="boxImovel">
            <div className="imFotoMain">
              <img className="imFoto" src={fotoFrente3} />
              <div className="boxPreco">
                <div className="tipoContrato">Venda</div>
                <div className="precoImovel">R$ 320.000,00</div>
              </div>
            </div>
            <div className="imBairroCidade">Ana Margarida - Santa Bárbara</div>
            <div className="imId">Código: V118</div>
            <div className="imAmenities">
              <div className="iconsAmenities">
                <img className="icon" src={area} />
                60
                <img className="icon" src={banho} />
                2
                <img className="icon" src={vagas} />
                1
                <img className="icon" src={quartos} />2
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
  
export { Highlights }