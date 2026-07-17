import React from "react";
import "./HighlightsRent.css";
import { Link } from "react-router-dom";
import banho from "./assets/banheira.png";
import area from "./assets/area.png";
import vagas from "./assets/carros.png";
import quartos from "./assets/quarto.png";
import fotoFrente4 from "./assets/L073.jpg";
import fotoFrente5 from "./assets/L119.jpeg";
import fotoFrente6 from "./assets/L115.jpg";
import setaE from "./assets/seta-esquerda.png";
import setaD from "./assets//seta-direita.png";

function HighlightsRent() {
  return (
    <article className="highlts">
      <div className="tituloBoxVenda">
        <h1>DESTAQUE LOCAÇÃO</h1>
      </div>
      <div className="opcaoImoveis">
        <div className="boxImovel">
          <div className="imFotoMainR">
            <Link to={`imovel/L115`} className="linkImage">
              <img className="imFoto2" src={fotoFrente6} />
            </Link>
            <div className="boxPreco">
              <div className="tipoContrato">Locação - Residencial</div>
              <div className="precoImovel">R$ 1.300,00</div>
            </div>
          </div>
          <div className="imBairroCidade">Sumidouro - Barão de Cocais</div>
          <div className="imId">Código: L115</div>
          <div className="imAmenities">
            <div className="iconsAmenities">
              <img className="icon" src={area} />
              48 m²
              <img className="icon" src={banho} />
              1
              <img className="icon" src={vagas} />
              1
              <img className="icon" src={quartos} />2
            </div>
          </div>
        </div>

        <div className="boxImovel">
          <div className="imFotoMainR">
            <Link to={`imovel/L119`} className="linkImage">
              <img className="imFoto2" src={fotoFrente5} />
            </Link>
            <div className="boxPreco">
              <div className="tipoContrato">Locação - Residencial</div>
              <div className="precoImovel">R$ 2.300,00</div>
            </div>
          </div>
          <div className="imBairroCidade">Centro - Santa Bárbara</div>
          <div className="imId">Código: L119</div>
          <div className="imAmenities">
            <div className="iconsAmenities">
              <img className="icon" src={area} />
              -
              <img className="icon" src={banho} />
              1
              <img className="icon" src={vagas} />
              1
              <img className="icon" src={quartos} />3
            </div>
          </div>
        </div>

        <div className="boxImovel">
          <div className="imFotoMainR">
            <Link to={`imovel/L073`} className="linkImage">
              <img className="imFoto2" src={fotoFrente4} />
            </Link>
            <div className="boxPreco">
              <div className="tipoContrato">Locação - Residencial</div>
              <div className="precoImovel">R$ 1.700,00</div>
            </div>
          </div>
          <div className="imBairroCidade">Centro - Santa Bárbara</div>
          <div className="imId">Código: L073</div>
          <div className="imAmenities">
            <div className="iconsAmenities">
              <img className="icon" src={area} />
              -
              <img className="icon" src={banho} />
              1
              <img className="icon" src={vagas} />
              0
              <img className="icon" src={quartos} />3
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export { HighlightsRent };
