import './ProductsPage.css';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import { useNavigate } from "react-router-dom";
import React from "react";

const products = [
  { name: "Tubulação", price: "R$100" },
  { name: "Compressor", price: "R$202" },
  { name: "Lubrificantes", price: "R$89,90" },
  { name: "Válvula", price: "R$150" },
  { name: "Atuador", price: "R$900" },
  { name: "Máquina de embalagem", price: "R$324" },
];

const filters = [
  "conexão", "mangueiras", "filtros", "válvula", "preço", "marca", "tipo", "aplicação"
];

export default function ProductsPage() {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/addproduct");
  };

  return (
    <>
      <NavbarAdmin />
      <div className="products-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h1 className="title">Produtos</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="filters">
            <h2 className="filters-title">Filtros</h2>
            <button className="clear-filters">Limpar filtros</button>
            <p className="category-label">Categorias</p>
            <ul className="filter-list">
              {filters.map(filter => (
                <li key={filter} className="filter-item">
                  <input type="checkbox" id={filter} />
                  <label htmlFor={filter}>{filter}</label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <main className="main-content">
          <div className="top-bar">
            <button className="new-product-btn" onClick={handleAdd}>+ Novo Produto</button>
            <div className="sort-info">
              <span className="sort-label">Sort by</span>
              <select className="sort-select">
                <option>Popular</option>
                <option>Mais recentes</option>
              </select>
              <span className="product-count">Mostrando 102 produtos</span>
            </div>
          </div>

          <div className="product-grid">
            {products.map((product, idx) => (
              <div key={idx} className="product-card">
                <div className="product-image">
                  <button className="edit-button">Editar</button>
                </div>
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
              </div>
            ))}
          </div>

          <div className="load-more-container">
            <button className="load-more-btn">Carregar mais produtos</button>
          </div>
        </main>
      </div>
    </>
  );
}
