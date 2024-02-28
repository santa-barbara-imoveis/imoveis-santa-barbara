import React from 'react';
import "./Financiar.css";
import "../../assets/style/brand.css";

function Financiar() {
  return (
      <main className='financiar'>
          <h1>FINANCIAMENTO IMOBILIÁRIO</h1>
        <div className='introducao'>
          <p>No Brasil, apesar de haver diversas linhas de crédito, a grande parte dos financiamentos imobiliários são feitos através do Sistema Financeiro da Habitação (SFH), criado em 1964 pelo Governo Federal com objetivo de reduzir o déficit habitacional brasileiro diante do cenário de rápida urbanização.</p>
          <br></br>
          <p>O SFH tem limites estabelecidos pelo governo federal, como valor máximo do imóvel que pode ser financiado, a taxa de juros e o comprometimento da renda do comprador.</p>
          <br></br>
          <p>Os recursos do SFH podem ser utilizados para três finalidades: compra, reforma ou construção de uma casa. Da mesma forma, as aquisições de bens enquadrados no programa Minha Casa Minha Vida, criado em 2009, também integram o SFH.</p>
          <br></br>
          <p>O financiamento (SFH) pode chegar no máximo a 80% do valor do imóvel, que não pode ultrapassar o preço de R$ 1,5 milhão na avaliação. Vale frisar que, para ter acesso ao subsídio, é realizada a análise financeira (crédito) do comprador, o qual deverá comprovar que os encargos mensais (prestação, seguros, juros) não ultrapassam 30% da sua renda mensal bruta.</p>
          <br></br>
          <p>O prazo do empréstimo pode chegar a até 35 anos e a taxa de juros anual é fixa, limitada em no máximo 12%, mais a Taxa Referencial (TR), que atualiza o saldo devedor. Quando o valor da TR é zero, o devedor paga, na prática, apenas o valor fixo. (taxa média de juros hoje é de entre 7% e 9% ao ano).</p>
          <br></br>
          <p>Para a contratação do financiamento existem despesas que podem representar cerca de 5% do valor do imóvel, quais sejam:</p>
          <ul>
            <li>Avaliação do imóvel;</li>
            <li>Emissão do contrato e certidões;</li>
            <li>Registro Cartorário;</li>
            <li>Imposto sobre Transmissão de Bens Imóveis – ITBI;</li>
          </ul>
          <br></br>
          <p>Para acessar o crédito, além do enquadramento do imóvel nas condições do referido sistema, é preciso que o interessado:</p>
          <ul>
            <li>Seja brasileiro, naturalizado ou que tenha visto permanente para estar no Brasil;</li>
            <li>Não tenha restrições em cadastros como Serasa, SPC, BACEN e Receita Federal;</li>
            <li>Tenha renda suficiente para pagar a prestação mensal;</li>
            <li>Tenha mais de 18 anos ou comprove ter sido emancipado após os 16 anos;</li>
          </ul>
          <br></br>
          <p>Como o sistema busca facilitar a aquisição da casa própria, o patrimônio também não pode ser utilizado para outro fim. Por exemplo, ele não pode ser alugado pelo mutuário ou funcionar como um estabelecimento comercial, dado o evidente desvirtuamento de finalidade que ocorreria. Além disso, para financiar um patrimônio no SFH, a legislação prevê:</p>
          <ul>
            <li>A contratação de seguros, cujos pagamentos são feitos mensalmente juntamente com as prestações do subsídio;</li>
            <li>Seguro por Morte e Invalidez (MIP): tem como objetivo garantir que a dívida será liquidada em caso de falecimento do comprador;</li>
            <li>Seguro Contra Danos Físicos do Imóvel (DFI): é calculado a partir do valor do bem e garante a indenização caso a moradia sofra danos como alagamento, incêndio e desmoronamento;</li>
          </ul>

        </div>
      </main>
  );
}
  
export { Financiar }
