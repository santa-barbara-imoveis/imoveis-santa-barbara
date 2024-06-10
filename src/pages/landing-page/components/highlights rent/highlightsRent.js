import React from 'react';
import "./HighlightsRent.css";
import { Link } from 'react-router-dom';
import banho from "./assets/banheira.png";
import area from "./assets/area.png";
import vagas from "./assets/carros.png";
import quartos from "./assets/quarto.png";
import fotoFrente4 from "./assets/L048a1.jpeg";
import fotoFrente5 from "./assets/L077.jpeg";
import fotoFrente6 from "./assets/L063.jpeg";
import setaE from "./assets/seta-esquerda.png";
import setaD from "./assets//seta-direita.png";

function HighlightsRent() {
  return (
    <article className='highlts'>
      <div className="tituloBoxVenda"><h1>DESTAQUE LOCAÇÃO</h1></div>
      <div className="opcaoImoveis">
        <div className='boxImovel'>
          <div className='imFotoMainR'>
            <Link to={`imovel/L063a2`} className='linkImage'>
              <img className="imFoto2" src={fotoFrente6} />
            </Link>
            <div className='boxPreco'>
              <div className='tipoContrato'>
                Locação - Comercial
              </div>
              <div className='precoImovel'>
                R$ 1.100,00
              </div>
            </div>
          </div>
          <div className='imBairroCidade'>
            Centro - Santa Bárbara
          </div>
          <div className='imId'>
            Código: L063.2
          </div>
          <div className='imAmenities'>
            <div className='iconsAmenities'>
              <img className="icon" src={area} />
              14
              <img className="icon" src={banho} />
              1
              <img className="icon" src={vagas} />
              0
              <img className="icon" src={quartos} />
              0
            </div>
          </div>
        </div>

        <div className='boxImovel'>
          <div className='imFotoMainR'>
            <Link to={`imovel/L077`} className='linkImage'>
              <img className="imFoto2" src={fotoFrente5} />
            </Link>
            <div className='boxPreco'>
              <div className='tipoContrato'>
                Locação
              </div>
              <div className='precoImovel'>
                R$ 5.000,00
              </div>
            </div>
          </div>
          <div className='imBairroCidade'>
            Santa Mônica - Santa Bárbara
          </div>
          <div className='imId'>
            Código: L077
          </div>
          <div className='imAmenities'>
            <div className='iconsAmenities'>
              <img className="icon" src={area} />
              180
              <img className="icon" src={banho} />
              3
              <img className="icon" src={vagas} />
              3
              <img className="icon" src={quartos} />
              3
            </div>
          </div>
        </div>

        <div className='boxImovel'>
          <div className='imFotoMainR'>
            <Link to={`imovel/L048.1`} className='linkImage'>
              <img className="imFoto2" src={fotoFrente4} />
            </Link>
            <div className='boxPreco'>
              <div className='tipoContrato'>
                Locação
              </div>
              <div className='precoImovel'>
                R$ 3.500,00
              </div>
            </div>
          </div>
          <div className='imBairroCidade'>
            Centro - Santa Bárbara
          </div>
          <div className='imId'>
            Código: L048.1
          </div>
          <div className='imAmenities'>
            <div className='iconsAmenities'>
              <img className="icon" src={area} />
              1.000
              <img className="icon" src={banho} />
              3
              <img className="icon" src={vagas} />
              5
              <img className="icon" src={quartos} />
              3
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export { HighlightsRent }
