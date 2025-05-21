import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import './Produtos.css';
import Formulario from '../../components/Formulario/Formulario';
import api from '../../API/API'; // instância do Axios

function Produtos() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const response = await api.get('/api/products'); // ⬅️ Busca todos os produtos
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    carregarProdutos();
  }, []);

  const handleProductClick = async (e, id) => {
    e.preventDefault();
    try {
      const response = await api.get(`/api/products/${id}`);
      const produto = response.data;
      navigate(`/produto/${id}`, { state: { produto } });
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="pagina-produtos">
        <aside className="filtro-lateral">
          <h2>Filtros <span className="limpar-filtros">Limpar filtros</span></h2>
          <div className="grupo-filtro">
            <strong>Categorias</strong>
            {['conexões', 'mangueiras', 'filtros', 'válvulas', 'preço', 'marca', 'tipo', 'aplicação'].map(cat => (
              <label key={cat}>
                <input type="checkbox" /> {cat}
              </label>
            ))}
          </div>
        </aside>

        <main className="conteudo-principal">
          <div className="cabecalho-produtos">
            <div>
              <h1>Produtos</h1>
              <p>tela de produtos para voce usar</p>
            </div>
            <div className="caixa-ordenacao">
              <label>Ordenar por&nbsp;</label>
              <select>
                <option>preço</option>
              </select>
              <p className="quantidade-produtos">Mostrando {products.length} Produtos</p>
            </div>
          </div>

          <div className="lista-produtos">
            {products.map((products) => (
              <div
                className="cartao-produto"
                key={products.id}
                onClick={(e) => handleProductClick(e, products.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="imagem-produto" />
                <h4>{products.name}</h4>
                <p>R$:{Number(products.price).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="carregar-mais">
            <button>Carregar mais produtos</button>
          </div>
        </main>
      </div>
      <Formulario />
    </>
  );
}

export default Produtos;
