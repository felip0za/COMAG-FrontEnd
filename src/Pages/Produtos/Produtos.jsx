import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import './Produtos.css';
import Formulario from '../../components/Formulario/Formulario';

function Produtos () {
  const navigate = useNavigate();

  const produtos = [
    { name: 'Produto 1', price: 'R$260', id: 1 },
    { name: 'Compressor', price: 'R$2.199', id: 2 },
    { name: 'Lubrificante X', price: 'R$89', id: 3 },
    { name: 'Válvula para Y', price: 'R$150', id: 4 },
    { name: 'Atuador', price: 'R$900', id: 5 },
    { name: 'Máquina de embalagem', price: 'R$324', id: 6 },
  ];

  const handleProductClick = (id) => {
    navigate(`/produto/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <aside className="sidebar">
          <h2>Filtros <span className="reset">Limpar filtros</span></h2>
          <div className="filter-group">
            <strong>Categorias</strong>
            {['conexões', 'mangueiras', 'filtros', 'válvulas', 'preço', 'marca', 'tipo', 'aplicação'].map(cat => (
              <label key={cat}>
                <input type="checkbox" /> {cat}
              </label>
            ))}
          </div>
        </aside>

        <main className="main-content">
          <div className="header">
            <div>
              <h1>Produtos</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="sort-box">
              <label>Sort By&nbsp;</label>
              <select>
                <option>preço</option>
              </select>
              <p className="product-count">Mostrando {produtos.length} Produtos</p>
            </div>
          </div>

          {produtos.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="image-placeholder" />
              <h4>{product.name}</h4>
              <p>{product.price}</p>
            </div>
          ))}

          <div className="load-more">
            <button>Carregar mais produtos</button>
          </div>
        </main>
      </div>
      <Formulario />
    </>
  );
}

export default Produtos;
