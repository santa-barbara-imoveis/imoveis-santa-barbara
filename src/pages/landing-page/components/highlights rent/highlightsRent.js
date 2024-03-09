import React from 'react';
import "./HighlightsRent.css";
import banho from "./assets/banheira.png";
import area from "./assets/area.png";
import vagas from "./assets/carros.png";
import quartos from "./assets/quarto.png";
import fotoFrente4 from "./assets/L036.jpg";
import fotoFrente5 from "./assets/L038.jpg";
import fotoFrente6 from "./assets/L063.jpeg";
import setaE from "./assets/seta-esquerda.png";
import setaD from "./assets//seta-direita.png";

function HighlightsRent() {
  return (
    <article className='highlts'>
      <div className="tituloBoxVenda">DESTAQUE LOCAÇÃO</div>
      <div className="iconSetaPai">
        {/* <img className="iconSeta" src={setaE} />
        <img className="iconSeta" src={setaD} /> */}
      </div>
      <div className="opcaoImoveis">
        <div className='boxImovel'>
          <div className='imFotoMainR'>
            <img className="imFoto2" src={fotoFrente6} />
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
            <img className="imFoto2" src={fotoFrente5} />
            <div className='boxPreco'>
              <div className='tipoContrato'>
                Locação
              </div>
              <div className='precoImovel'>
                R$ 1.000,00
              </div>
            </div>
          </div>
          <div className='imBairroCidade'>
            Centro - Santa Bárbara
          </div>
          <div className='imId'>
            Código: L038
          </div>
          <div className='imAmenities'>
            <div className='iconsAmenities'>
              <img className="icon" src={area} />
              90
              <img className="icon" src={banho} />
              1
              <img className="icon" src={vagas} />
              0
              <img className="icon" src={quartos} />
              3
            </div>
          </div>
        </div>

        <div className='boxImovel'>
          <div className='imFotoMainR'>
            <img className="imFoto2" src={fotoFrente4} />
            <div className='boxPreco'>
              <div className='tipoContrato'>
                Locação
              </div>
              <div className='precoImovel'>
                R$ 1.250,00
              </div>
            </div>
          </div>
          <div className='imBairroCidade'>
            Ana Margarida - Santa Bárbara
          </div>
          <div className='imId'>
            Código: L036
          </div>
          <div className='imAmenities'>
            <div className='iconsAmenities'>
              <img className="icon" src={area} />
              60
              <img className="icon" src={banho} />
              1
              <img className="icon" src={vagas} />
              1
              <img className="icon" src={quartos} />
              2
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export { HighlightsRent }
