import React from "react";
import { Link } from "react-router-dom";
import "./Highlights.css";
import fotoFrente2 from "./assets/V192.jpg";
import fotoFrente3 from "./assets/V176.jpg";
import fotoFrente from "./assets/V184.jpg";
import area from "./assets/area.png";
import banho from "./assets/banheira.png";
import vagas from "./assets/carros.png";
import quartos from "./assets/quarto.png";

function Highlights() {
  return (
    <article className="highlts">
      <div className="tituloBoxVenda">
        <h1>DESTAQUE VENDA</h1>
      </div>
      <div className="opcaoImoveis">
        <div className="boxImovel">
          <div className="imFotoMainV">
            <Link to={`imovel/V184`} className="linkImage">
              <img className="imFotoV" src={fotoFrente} />
            </Link>
            <div className="boxPreco">
              <div className="tipoContrato">Venda</div>
              <div className="precoImovel">R$ 900.000,00</div>
            </div>
          </div>
          <p className="imBairroCidade"> Sol Nascente - Catas Altas </p>
          <p className="imId">Código: V184</p>
          <div className="imAmenities">
            <div className="iconsAmenities">
              <img className="icon" src={area} />
              <p>5.850</p>
              <img className="icon" src={banho} />
              <p>0</p>
              <img className="icon" src={vagas} />
              <p>0</p>
              <img className="icon" src={quartos} />
              <p>0</p>
            </div>
          </div>
        </div>

        <div className="boxImovel">
          <div className="imFotoMainV">
            <Link to={`imovel/V192`} className="linkImage">
              <img className="imFotoV" src={fotoFrente2} />
            </Link>
            <div className="boxPreco">
              <div className="tipoContrato">Venda</div>
              <div className="precoImovel">R$ 520.000,00</div>
            </div>
          </div>
          <div className="imBairroCidade">Lagoa - Barão de Cocais</div>
          <div className="imId">Código: V192</div>
          <div className="imAmenities">
            <div className="iconsAmenities">
              <img className="icon" src={area} />
              -
              <img className="icon" src={banho} />
              2
              <img className="icon" src={vagas} />
              4
              <img className="icon" src={quartos} />3
            </div>
          </div>
        </div>

        <div className="boxImovel">
          <div className="imFotoMainV">
            <Link to={`imovel/V176`} className="linkImage">
              <img className="imFotoV" src={fotoFrente3} />
            </Link>
            <div className="boxPreco">
              <div className="tipoContrato">Venda</div>
              <div className="precoImovel">R$ 900.000,00</div>
            </div>
          </div>
          <div className="imBairroCidade">Lagoa - Barão de Cocais</div>
          <div className="imId">Código: V176</div>
          <div className="imAmenities">
            <div className="iconsAmenities">
              <img className="icon" src={area} />
              110
              <img className="icon" src={banho} />
              3
              <img className="icon" src={vagas} />
              3
              <img className="icon" src={quartos} />3
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export { Highlights };
