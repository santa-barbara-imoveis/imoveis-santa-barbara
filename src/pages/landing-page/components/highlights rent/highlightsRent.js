import React from "react";
import "./HighlightsRent.css";
import { Link } from "react-router-dom";
import banho from "./assets/banheira.png";
import area from "./assets/area.png";
import vagas from "./assets/carros.png";
import quartos from "./assets/quarto.png";
import fotoFrente4 from "./assets/L073.jpg";
import fotoFrente5 from "./assets/L063a1.jpeg";
import fotoFrente6 from "./assets/L093.jpg";
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
            <Link to={`imovel/L093`} className="linkImage">
              <img className="imFoto2" src={fotoFrente6} />
            </Link>
            <div className="boxPreco">
              <div className="tipoContrato">Locação - Residencial</div>
              <div className="precoImovel">R$ 1.800,00</div>
            </div>
          </div>
          <div className="imBairroCidade">Serra Vila - Barão de Cocais</div>
          <div className="imId">Código: L093</div>
          <div className="imAmenities">
            <div className="iconsAmenities">
              <img className="icon" src={area} />
              166 m²
              <img className="icon" src={banho} />
              2
              <img className="icon" src={vagas} />
              1
              <img className="icon" src={quartos} />3
            </div>
          </div>
        </div>

        <div className="boxImovel">
          <div className="imFotoMainR">
            <Link to={`imovel/L063a1`} className="linkImage">
              <img className="imFoto2" src={fotoFrente5} />
            </Link>
            <div className="boxPreco">
              <div className="tipoContrato">Locação</div>
              <div className="precoImovel">R$ 2.200,00</div>
            </div>
          </div>
          <div className="imBairroCidade">Centro - Santa Bárbara</div>
          <div className="imId">Código: L063a1</div>
          <div className="imAmenities">
            <div className="iconsAmenities">
              <img className="icon" src={area} />
              -
              <img className="icon" src={banho} />
              1
              <img className="icon" src={vagas} />
              0
              <img className="icon" src={quartos} />0
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
