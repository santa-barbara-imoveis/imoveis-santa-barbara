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
        <div className="tituloBoxVenda">DESTAQUE VENDA</div>
        <div className="iconSetaPai">
          {/* <img className="iconSeta" src={setaE} />
          <img className="iconSeta" src={setaD} /> */}
        </div>
        <div className="opcaoImoveis">
          <Link to={`imovel/V124`}>
            <div className="boxImovel">
              <div className="imFotoMainV">
                <img className="imFotoV" src={fotoFrente} />
                <div className="boxPreco">
                  <div className="tipoContrato">Venda</div>
                  <div className="precoImovel">R$ 490.000,00</div>
                </div>
              </div>
              <div className="imBairroCidade">
                Resid. Santo Antônio - Santa Bárbara
              </div>
              <div className="imId">Código: V124</div>
              <div className="imAmenities">
                <div className="iconsAmenities">
                  <img className="icon" src={area} />
                  360
                  <img className="icon" src={banho} />
                  2
                  <img className="icon" src={vagas} />
                  2
                  <img className="icon" src={quartos} />
                  3
                </div>
              </div>
            </div>
          </Link>


          <div className="boxImovel">
            <div className="imFotoMainV">
              <img className="imFotoV" src={fotoFrente2} />
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
              <img className="imFotoV" src={fotoFrente3} />
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

