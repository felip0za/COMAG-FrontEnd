import Navbar from "../../components/Navbar/Navbar";
import Formulario from "../../components/Formulario/Formulario";
import { useNavigate } from 'react-router-dom';
import "./Produto.css";

function Produto() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1); // Voltar uma página no histórico
  };
  return (
    <div className="produto-page">
      <Navbar />

      <div className="container-produto">
      <button onClick={handleClick} className="voltar">&lt; Voltar</button>

        <h1 className="titulo-produto">PRODUTO 1</h1>
        <p className="descricao-breve">Breve descrição</p>

        <div className="detalhes-produto">
          <div className="imagem-produto"></div>

          <div className="info-produto">
            <h2 className="nome-produto">NOME COMPLETO DO PRODUTO 1</h2>
            <div className="precos">
              <span className="preco-atual">R$260</span>
              <span className="preco-antigo">R$300</span>
              <span className="desconto">-15%</span>
            </div>
            <p className="descricao-completa">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <hr />
            <p className="estoque">
              <strong>Quantidade em estoque:</strong> 00 unidades
            </p>
            <button className="botao-comprar">Pedir agora</button>
          </div>
        </div>

        <h3 className="titulo-relacionados">Produtos Relacionados</h3>
        <div className="produtos-relacionados">
          {[...Array(6)].map((_, index) => (
            <div className="item-relacionado" key={index}>
              <div className="imagem-relacionada"></div>
              <p>Produto {index + 2}</p>
              <span>Descrição</span>
            </div>
          ))}
        </div>

        <Formulario />
      </div>
    </div>
  );
}

export default Produto;
