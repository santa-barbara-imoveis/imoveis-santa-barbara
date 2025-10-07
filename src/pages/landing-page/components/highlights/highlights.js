import React from "react";
import { Link } from "react-router-dom";
import "./Highlights.css";
import fotoFrente2 from "./assets/V178.jpg";
import fotoFrente3 from "./assets/V183.jpg";
import fotoFrente from "./assets/V151.jpeg";
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
            <Link to={`imovel/V151`} className="linkImage">
              <img className="imFotoV" src={fotoFrente} />
            </Link>
            <div className="boxPreco">
              <div className="tipoContrato">Venda</div>
              <div className="precoImovel">R$ 165.000,00</div>
            </div>
          </div>
          <p className="imBairroCidade"> Santa Quitéria - Catas Altas </p>
          <p className="imId">Código: V151</p>
          <div className="imAmenities">
            <div className="iconsAmenities">
              <img className="icon" src={area} />
              <p>360</p>
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
            <Link to={`imovel/V178`} className="linkImage">
              <img className="imFotoV" src={fotoFrente2} />
            </Link>
            <div className="boxPreco">
              <div className="tipoContrato">Venda</div>
              <div className="precoImovel">R$ 850.000,00</div>
            </div>
          </div>
          <div className="imBairroCidade">Mãe Catarina - Santa Bárbara</div>
          <div className="imId">Código: V178</div>
          <div className="imAmenities">
            <div className="iconsAmenities">
              <img className="icon" src={area} />
              -
              <img className="icon" src={banho} />
              2
              <img className="icon" src={vagas} />
              2
              <img className="icon" src={quartos} />3
            </div>
          </div>
        </div>

        <div className="boxImovel">
          <div className="imFotoMainV">
            <Link to={`imovel/V183`} className="linkImage">
              <img className="imFotoV" src={fotoFrente3} />
            </Link>
            <div className="boxPreco">
              <div className="tipoContrato">Venda</div>
              <div className="precoImovel">R$ 240.000,00</div>
            </div>
          </div>
          <div className="imBairroCidade">Bairro Caminhos de Minas - Santa Bárbara</div>
          <div className="imId">Código: V183</div>
          <div className="imAmenities">
            <div className="iconsAmenities">
              <img className="icon" src={area} />
              48
              <img className="icon" src={banho} />
              1
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

export { Highlights };
