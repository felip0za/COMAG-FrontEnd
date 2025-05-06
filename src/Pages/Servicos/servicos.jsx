import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Formulario from "../../components/Formulario/Formulario";
import "./Servicos.css";

function Servicos() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(e);
    navigate("/produtos");
  };

  return (
    <div className="pagina-servico">
      <Navbar />

      <div className="conteiner-servico">
        <button onClick={handleClick} className="link-voltar">&lt; Voltar</button>

        <h1 className="titulo-servico">SERVIÇO</h1>
        <p className="texto-breve">Breve descrição</p>

        <div className="bloco-servico">
          <div className="imagem-servico" />

          <div className="info-servico">
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

        <div className="secao-relacionados">
          <h3 className="titulo-relacionados">Serviço Relacionado</h3>
          <div className="lista-relacionados">
            <div
              className="item-relacionado"
              style={{ cursor: "pointer" }}
            >
              <div
                className="imagem-relacionado"
                style={{
                  backgroundImage: `url("url_da_imagem_1.jpg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <p className="nome-relacionado">Produto 1</p>
              <p className="descricao-relacionado">Descrição do Produto 1</p>
            </div>
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