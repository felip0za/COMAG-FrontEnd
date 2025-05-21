import Navbar from "../../components/Navbar/Navbar";
import Formulario from "../../components/Formulario/Formulario";
import { useNavigate, useParams } from 'react-router-dom';
import api from "../../API/API";
import { useEffect, useState } from "react";
import "./Produto.css";

function Products() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleClick = () => {
    navigate(-1);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="produto-page">
      <Navbar />

      <div className="container-produto">
        <button onClick={handleClick} className="voltar">&lt; Voltar</button>

        <h1 className="titulo-produto">{product.name}</h1>
        <p className="descricao-breve">{product.description}</p>

        <div className="detalhes-produto">
          <div className="imagem-produto">
            <img src={product.imagemUrl} alt={product.name} />
          </div>

          <div className="info-produto">
            <h2 className="nome-produto">{product.name}</h2>
            <div className="precos">
              <span className="preco-atual">R${product.price}</span>
              <span className="desconto">{product.desconto}</span>
            </div>
            <p className="descricao-completa">{product.description}</p>
            <hr />
            <button className="botao-comprar">Pedir agora</button>
          </div>
        </div>

        <h3 className="titulo-relacionados">Produtos Relacionados</h3>
        <div className="produtos-relacionados">
          {product.relacionados?.map((item, index) => (
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

export default Products;
