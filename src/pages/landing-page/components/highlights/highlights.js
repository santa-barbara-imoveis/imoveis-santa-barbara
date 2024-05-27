import React from 'react';
import { Link } from 'react-router-dom';
import "./Highlights.css";
import fotoFrente2 from "./assets/002_fachada.jpeg";
import fotoFrente3 from "./assets/V109.1.jpg";
import fotoFrente from "./assets/V124.jpeg";
import area from "./assets/area.png";
import banho from "./assets/banheira.png";
import vagas from "./assets/carros.png";
import quartos from "./assets/quarto.png";

function Highlights() {
    return (
      <article className='highlts'>
        <div className="tituloBoxVenda"><h1>DESTAQUE VENDA</h1></div>
        <div className="opcaoImoveis">
            <div className="boxImovel">
              <div className="imFotoMainV">
                <Link to={`imovel/V124`} className='linkImage'>
                  <img className="imFotoV" src={fotoFrente} />
                </Link>
                <div className="boxPreco">
                  <div className="tipoContrato">Venda</div>
                  <div className="precoImovel">R$ 490.000,00</div>
                </div>
              </div>
              <p className="imBairroCidade"> Resid. Santo Antônio - Santa Bárbara </p>
              <p className="imId">Código: V124</p>
              <div className="imAmenities">
                <div className="iconsAmenities">
                  <img className="icon" src={area} />
                  <p>360</p>
                  <img className="icon" src={banho} />
                  <p>2</p>
                  <img className="icon" src={vagas} />
                  <p>2</p>
                  <img className="icon" src={quartos} />
                  <p>3</p>
                </div>
              </div>
            </div>
          
          <div className="boxImovel">
            <div className="imFotoMainV">
              <Link to={`imovel/V134`} className='linkImage'>
                <img className="imFotoV" src={fotoFrente2} />
              </Link>
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
            <div className="imFotoMainV">
              <Link to={`imovel/V109a1`} className='linkImage'>
                <img className="imFotoV" src={fotoFrente3} />
              </Link>
              <div className="boxPreco">
                <div className="tipoContrato">Venda</div>
                <div className="precoImovel">R$ 500.000,00</div>
              </div>
            </div>
            <div className="imBairroCidade">Barra Feliz - Santa Bárbara</div>
            <div className="imId">Código: V109a1</div>
            <div className="imAmenities">
              <div className="iconsAmenities">
                <img className="icon" src={area} />
                200
                <img className="icon" src={banho} />
                2
                <img className="icon" src={vagas} />
                3
                <img className="icon" src={quartos} />2
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
  
export { Highlights };

