import React from 'react';
import "./Empresa.css";
import juliano from "./assets/juliano2.jpg";
import rodolpho from "./assets/rodolpho2.jpg";
import "../../assets/style/brand.css";
import {HeroSomos} from './heroSection/HeroSomos';

function Empresa() {
  return (
      <main className='aEmpresa'>
        <HeroSomos/>
        <div className='valores'>
          <h1>MISSÃO</h1>
          <br></br>
          <p>Realizar negócios imobiliários com inovação.</p>
          <h1>VISÃO</h1>
          <br></br>
          <p>Ser a Imobiliária referência em Santa Bárbara e região, reconhecida como a melhor opção por clientes, colaboradores, comunidade, fornecedores e investidores, pela qualidade de nossos produtos, serviços e relacionamento.</p>
          <h1>VALORES</h1>
          <br></br>      
          <ul>
            <li>Ética</li>
            <li>Inovação</li>
            <li>Transparência</li>
            <li>Valorização das pessoas</li>
            <li>Bom relacionamento interpessoal</li>
            <li>Responsabilidade Social</li>
            <li>Inovação na forma de realização dos negócios</li>
          </ul>
          <div className='nossaEquipe'>
          <h1>QUEM SOMOS</h1>
            <div className='curriculo'>
              <div className='curriculoTexto1'>
                <h2>Juliano Xavier, sócio-fundador</h2>
                <p>"O mercado imobiliário em Santa Bárbara é mais do que apenas transações, é a realização de sonhos, a construção de lares e o encontro de pessoas com lugares que refletem suas vidas e aspirações."</p>
                <p>Com uma formação em Engenharia de Minas pela UFOP e pós-graduação em Gestão de Negócios pela Fundação Dom Cabral, acumulei oito anos de experiência na AngloGold, onde atuei como engenheiro e coordenador de mina.</p>
              </div>
              <img className='imgJuliano' src={juliano} />
            </div>
            <div className='curriculo'>
              <img className='imgRodolpho' src={rodolpho} />
              <div className='curriculoTexto2'>
                <h2>Rodolpho Sanches, sócio-fundador</h2>  
                <p>"Em Santa Bárbara, o mercado imobiliário brilha com oportunidades promissoras, onde cada venda representa um novo capítulo de prosperidade e realização para compradores e vendedores."</p>
                <p>Sou um advogado e corretor de imóveis com experiência tanto nas áreas de direito público quanto privado. Possuo especialização em Direito Civil e Processo Civil, além de um MBA em Gestão Estratégica de Pessoas. Meu perfil é dinâmico e objetivo, com habilidades de comunicação escrita e verbal bem desenvolvidas.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
  
export { Empresa }
