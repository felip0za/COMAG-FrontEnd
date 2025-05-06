import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import './Produtos.css';
import Formulario from '../../components/Formulario/Formulario';

function Produtos () {
  const navigate = useNavigate();

  const produtos = [
    { id: 1, name: 'Produto 1', price: 'R$260' },
    { id: 2, name: 'Compressor', price: 'R$2.199'},
    { id: 3, name: 'Lubrificante X', price: 'R$89'},
    { id: 4, name: 'Válvula para Y', price: 'R$150'},
    { id: 5, name: 'Atuador', price: 'R$900'},
    { id: 6, name: 'Máquina de embalagem', price: 'R$324'},
  ];

  const handleProductClick = (e) => {
    e.preventDefault(e);
    navigate(`/produto`);
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="caixa-ordenacao">
              <label>Ordenar por&nbsp;</label>
              <select>
                <option>preço</option>
              </select>
              <p className="quantidade-produtos">Mostrando {produtos.length} Produtos</p>
            </div>
          </div>

          <div className="lista-produtos">
            {produtos.map((product) => (
              <div
                className="cartao-produto"
                key={product.id}
                onClick={handleProductClick}
                style={{ cursor: 'pointer' }}
              >
                <div className="imagem-produto" />
                <h4>{product.name}</h4>
                <p>{product.price}</p>
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