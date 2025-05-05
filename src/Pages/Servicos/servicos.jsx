import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Servicos.css";
import Formulario from "../../components/Formulario/Formulario";

function Servicos() {
  return (
    <div className="servico-page">
      <Navbar />

      <div className="container">
        <div className="back-link">&lt; Voltar</div>

        <h1 className="titulo-principal">SERVIÇO</h1>
        <p className="descricao-breve">Breve descrição</p>

        <div className="conteudo-servico">
          <div className="imagem-servico" />

          <div className="detalhes-servico">
            <h2 className="nome-servico">NOME COMPLETO DO SERVIÇO</h2>
            <p className="texto-preco">A partir de:</p>
            <p className="valor-servico">R$700</p>
            <p className="descricao-servico">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="botao-orcamento">Solicitar orçamento</button>
          </div>
        </div>

        <div className="relacionados">
          <h3 className="titulo-relacionados">Serviços Relacionados</h3>
          <div className="lista-relacionados">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="item-relacionado">
                <div className="imagem-relacionado" />
                <p className="nome-relacionado">Serviço {index + 2}</p>
                <p className="descricao-relacionado">Descrição</p>
              </div>
            ))}
          </div>
        </div>

        <Formulario />
      </div>

      <footer className="rodape">
        COPYRIGHTS COMAB.COM. TODOS OS DIREITOS RESERVADOS
      </footer>
    </div>
  );
}

export default Servicos;
