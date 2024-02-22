import React from 'react';
import "./ScreenDocumentos.css";
import "../../assets/style/brand.css";

function ScreenDocumentos() {
  return (
      <main className='documentos'>
        <div className='documentosCompraVenda'>
          <h1>COMPRA E VENDA</h1>
          <h2>Documentos do comprador:</h2>
          <ul>
            <li>RG e CPF, de preferência CNH;</li>
            <li>RG e CPF do cônjuge, de preferência CNH; (caso seja casado);</li>
            <li>Certidão de Casamento, Óbito ou Divórcio;</li>
            <li>Comprovante de endereço (Cemig ou Copasa ou Telefone);</li>
            <li>Informar profissão.</li>
          </ul>
          <p>Obs.: O cadastro completo com referências pessoais e bancárias, bem como o contrato e demais etapas do negócio, serão realizados na imobiliária.</p>
          <h2>Documentos do vendedor:</h2>
          <p>Inicialmente, para fins de assinatura do contrato de representação e corretagem, será necessário a apresentação dos seguintes documentos: </p>
          <ul>
            <li>RG e CPF, de preferência CNH;</li>
            <li>RG e CPF do cônjuge, de preferência CNH; caso seja casado;</li>
            <li>Contrato de Compra e Venda e/ou Matrícula atualizada no imóvel - 90 dias;</li>
            <li>Informar estado civil, profissão e endereço atual.</li>
          </ul>
          <p>Posteriormente, no momento da venda, será necessário apresentar:</p>
          <ul>
            <li>Comprovante de quitação do Imposto sobre Propriedade Territorial Urbano – IPTU</li>
            <li>Certidão de Casamento, Óbito ou Divórcio;</li>
            <li>Cópias de contas de água e energia atualizadas e devidamente quitadas;</li>
          </ul>
          <p>Obs.: O cadastro completo com referências pessoais e bancárias, bem como o contrato e demais etapas do negócio, serão realizados na imobiliária. Para a divulgação e propaganda do imóvel é necessário a assinatura do contrato de corretagem junto a imobiliária.</p>
        </div>

        <div className='documentosLocatario'>
          <h1>LOCAÇÃO</h1>
          <h2>Documentos do locatário:</h2>
          <ul>
            <li>RG e CPF, de preferência CNH;</li>
            <li>Informar e-mail, estado civil e profissão;</li>
            <li>Comprovante de endereço de referência - Cemig ou Copasa ou Telefone;</li>
            <li>Comprovante de Renda / IR detalhado e/ou Carteira de trabalho + último contracheques ou decore eletrônico;</li>
            <li>Documentos complementares de garantia contratual.</li>
          </ul>
          <p>Obs.: O cadastro completo com referências pessoais e bancárias, bem como o contrato e demais etapas do negócio, serão realizados na imobiliária.</p>
          <h2>Documentos do locador:</h2>
          <p>Inicialmente, para fins de assinatura do contrato de administração do imóvel, será necessário a apresentação dos seguintes documentos:</p>
          <ul>
            <li>RG e CPF, de preferência CNH;</li>
            <li>RG e CPF do cônjuge, de preferência CNH; (caso seja casado);</li>
            <li>Documento do Imóvel (Contrato de Compra e Venda e/ou Matrícula atualizada);</li>
            <li>Informar e-mail, estado civil, profissão e endereço atual que reside;</li>
            <li>Cópias de contas de água e energia atualizadas.</li>
          </ul>
          <p>Obs.: O cadastro completo com referências pessoais e bancárias, bem como o contrato e demais etapas do negócio, serão realizados na imobiliária.</p>
          <h2>Documentos dos fiadores com renda:</h2>
          <ul>
            <li>RG e CPF, de preferência CNH;</li>
            <li>Informar e-mail, estado civil e profissão;</li>
            <li>Comprovante de endereço de referência - Cemig ou Copasa ou Telefone;</li>
            <li>Comprovante de Renda (IR detalhado e/ou Carteira de trabalho + último contracheque ou decore eletrônico);</li>
            <li>Telefone e e-mail dos fiadores.</li>
          </ul>
          <p>Obs.: O cadastro completo com referências pessoais e bancárias, bem como o contrato e demais etapas do negócio, serão realizados na imobiliária.</p>
          <h2>Documentos do fiador com imóvel quitado e registrado:</h2>
          <ul>
            <li>RG e CPF, de preferência CNH;</li>
            <li>RG e CPF do cônjuge, de preferência CNH; (caso seja casado);</li>
            <li>Informar estado civil e profissão;</li>
            <li>Comprovante de endereço (Cemig ou Copasa ou Telefone);</li>
            <li>Documento do imóvel (Matrícula atualizada junto ao Cartório de Registro de Imóveis);</li>
            <li>Telefone e e-mail do fiador.</li>
          </ul>
          <p>Obs.: O cadastro completo com referências pessoais e bancárias, bem como o contrato e demais etapas do negócio, serão realizados na imobiliária.</p>
          <h2>Documentos do fiador pessoas jurídica:</h2>
          <ul>
            <li>Cadastro Nacional de Pessoa Jurídica - CNPJ;</li>
            <li>Contrato Social atualizado;</li>
            <li>Comprovante de Renda (IR detalhado e/ou carteira de trabalho + contracheque) dos sócios;</li>
            <li>RG, CPF e Comprovante de Endereço dos Sócios, ou de quem assina pela empresa;</li>
            <li>Telefone e e-mail do fiador.</li>
          </ul>
          <p>Obs.: O cadastro completo com referências pessoais e bancárias, bem como o contrato e demais etapas do negócio, serão realizados na imobiliária.</p>
        </div>
      </main>
  );
}
  
export { ScreenDocumentos }
