import Navbar from "../../components/Navbar/Navbar";
import Formulario from "../../components/Formulario/Formulario";
import { useNavigate, useParams } from 'react-router-dom';
import api from "../../API/API";
import { useEffect, useState } from "react";
import "./Produto.css";

function Produto() {
  const navigate = useNavigate();
  const { id } = useParams(); // ID vindo da URL
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoSelecionado = produtos.find((p) => p.id.toString() === id);
    setProduto(produtoSelecionado);
  }, [id]);

  const handleClick = () => {
    navigate(-1);
  };

  if (!produto) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="produto-page">
      <Navbar />

      <div className="container-produto">
        <button onClick={handleClick} className="voltar">&lt; Voltar</button>

        <h1 className="titulo-produto">{produto.titulo}</h1>
        <p className="descricao-breve">{produto.descricaoBreve}</p>

        <div className="detalhes-produto">
          <div className="imagem-produto">
            <img src={produto.imagemUrl} alt={produto.titulo} />
          </div>

          <div className="info-produto">
            <h2 className="nome-produto">{produto.nome}</h2>
            <div className="precos">
              <span className="preco-atual">R${produto.precoAtual}</span>
              <span className="preco-antigo">R${produto.precoAntigo}</span>
              <span className="desconto">{produto.desconto}</span>
            </div>
            <p className="descricao-completa">{produto.descricaoCompleta}</p>
            <hr />
            <p className="estoque">
              <strong>Quantidade em estoque:</strong> {produto.estoque} unidades
            </p>
            <button className="botao-comprar">Pedir agora</button>
          </div>
        </div>

        <h3 className="titulo-relacionados">Produtos Relacionados</h3>
        <div className="produtos-relacionados">
          {produto.relacionados.map((item, index) => (
            <div className="item-relacionado" key={index}>
              <div className="imagem-relacionada">
                <img src={item.imagemUrl} alt={item.nome} />
              </div>
              <p>{item.nome}</p>
              <span>{item.descricao}</span>
            </div>
          ))}
        </div>

        <Formulario />
      </div>
    </div>
  );
}

export default Produto;
