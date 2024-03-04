import React from 'react';
import "./Empresa.css";
import "../../assets/style/brand.css";

function Empresa() {
  return (
      <main className='aEmpresa'>
        <div className='valores'>
          <h1>MISSÃO</h1>
          <br></br>
          <p>Realizar negócios imobiliários (locação e venda) com ética, segurança e transparência, por meio de equipe capacitada e atendimento de excelência, buscando constante evolução e inovação.</p>
          <h1>VISÃO</h1>
          <br></br>
          <p>Ser a Imobiliária referência em Santa Bárbara e região, reconhecida como a melhor opção por clientes, colaboradores, comunidade, fornecedores e investidores, pela qualidade de nossos produtos, serviços e relacionamento.</p>
          <h1>VALORES</h1>
          <br></br>      
          <ul>
            <li>Ética</li>
            <li>Transparência</li>
            <li>Valorização das pessoas</li>
            <li>Bom relacionamento interpessoal</li>
            <li>Responsabilidade Social</li>
            <li>Inovação na forma de realização dos negócios</li>
          </ul>
          <div className='nossaEquipe'>
            <div className='curriculo'>
              <h1>NOSSA EQUIPE</h1>
              <h2>Juliano Xavier</h2>
                <br></br>      
                <ul>
                  <li>Graduação em Engenharia de Minas (UFOP)</li>
                  <li>Pós graduação em Gestão de Negócios (Fundação Dom Cabral)</li>
                  <li>8 anos de atuação na AngloGold como engenheiro e coordenador de mina</li>
                </ul>
            </div>
            <div className='curriculo'>
              <h2>Rodolpho Sanches</h2>
                <br></br>      
                <ul>
                  <li>Graduação em Engenharia de Minas (UFOP)</li>
                  <li>Pós graduação em Gestão de Negócios (Fundação Dom Cabral)</li>
                  <li>8 anos de atuação na AngloGold como engenheiro e coordenador de mina</li>
                </ul>
            </div>
          </div>
        </div>
      </main>
  );
}
  
export { Empresa }
