import './ProductsPage.css';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from '../../API/API';

export default function ProductsPage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAdd = () => {
    navigate("/addproduct");
  };

  const handleEdit = (Id) => {
    navigate(`/editproduct/${Id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsRes = await api.get('/api/products');
        setProducts(productsRes.data);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <NavbarAdmin />
      <div className="products-container">
        <main className="main-content">
          <div className="top-bar">
            <h1 className="title">Produtos</h1>
            <button className="new-product-btn" onClick={handleAdd}>+ Novo Produto</button>
            <div className="sort-info">
              <span className="sort-label">Sort by</span>
              <select className="sort-select">
                <option>Popular</option>
                <option>Mais recentes</option>
              </select>
              <span className="product-count">Mostrando {products.length} produtos</span>
            </div>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <button className="edit-button" onClick={() => handleEdit(product.id)}>Editar</button>
                </div>
                <p className="product-name">{product.name}</p>
                <p className="product-price">R$:{Number(product.price).toFixed(2)}</p>
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
