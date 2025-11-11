import React from "react";
import "./HighlightsRent.css";
import { Link } from "react-router-dom";
import banho from "./assets/banheira.png";
import area from "./assets/area.png";
import vagas from "./assets/carros.png";
import quartos from "./assets/quarto.png";
import fotoFrente4 from "./assets/L073.jpg";
import fotoFrente5 from "./assets/L065.jpg";
import fotoFrente6 from "./assets/L100.jpeg";
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
            <Link to={`imovel/L100`} className="linkImage">
              <img className="imFoto2" src={fotoFrente6} />
            </Link>
            <div className="boxPreco">
              <div className="tipoContrato">Locação - Residencial</div>
              <div className="precoImovel">R$ 2.200,00</div>
            </div>
          </div>
          <div className="imBairroCidade">São José - Santa Bárbara</div>
          <div className="imId">Código: L100</div>
          <div className="imAmenities">
            <div className="iconsAmenities">
              <img className="icon" src={area} />
              -
              <img className="icon" src={banho} />
              2
              <img className="icon" src={vagas} />
              3
              <img className="icon" src={quartos} />3
            </div>
          </div>
        </div>

        <div className="boxImovel">
          <div className="imFotoMainR">
            <Link to={`imovel/L065`} className="linkImage">
              <img className="imFoto2" src={fotoFrente5} />
            </Link>
            <div className="boxPreco">
              <div className="tipoContrato">Locação</div>
              <div className="precoImovel">R$ 1.500,00</div>
            </div>
          </div>
          <div className="imBairroCidade">Santo Antônio - Santa Bárbara</div>
          <div className="imId">Código: L065</div>
          <div className="imAmenities">
            <div className="iconsAmenities">
              <img className="icon" src={area} />
              100
              <img className="icon" src={banho} />
              2
              <img className="icon" src={vagas} />
              1
              <img className="icon" src={quartos} />2
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
              <div className="precoImovel">R$ 2.000,00</div>
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
