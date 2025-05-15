import React from "react";
import "./ServicesPage.css";
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin";

export default function ServicesPage() {
  return (
    <>
      <NavbarAdmin />
      <div className="servicos-container">
        <div className="servicos-header">
          <div>
            <h1 className="servicos-title">Serviços</h1>
            <p className="servicos-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="novo-servico-btn">+ Novo Serviço</button>
        </div>

        <div className="servicos-content">
          {/* Filtros */}
          <aside className="servicos-filtros">
            <h2 className="filtros-titulo">Filtros</h2>
            <button className="limpar-filtros">Limpar filtros</button>
            <div className="filtros-categorias">
              <p className="categorias-label">Categorias</p>
              {["conexão", "mangueiras", "filtros", "válvula", "preço", "marca", "tipo", "aplicação"].map((item) => (
                <label key={item} className="filtro-item">
                  <input type="checkbox" className="checkbox" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </aside>

          {/* Cards de serviços */}
          <main className="servicos-cards">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="card-servico">
                <div className="card-imagem"></div>
                <button className="btn-editar">Editar</button>
                <p className="card-titulo">{getTitulo(i)}</p>
                <p className="card-descricao">{getDescricao(i)}</p>
              </div>
            ))}
          </main>
        </div>

        <div className="carregar-mais-wrapper">
          <button className="btn-carregar-mais">Carregar mais serviços</button>
        </div>
      </div>
    </>
  );
}

function getTitulo(index) {
  const titulos = [
    "Venda de Tubulações",
    "Assessoria Técnica",
    "Instalação de Redes de Ar",
    "Manutenção de Bombas",
    "Peças para Compressores",
    "Venda de Compressores",
  ];
  return titulos[index] || "Serviço";
}

function getDescricao(index) {
  const descricoes = [
    "Materiais de ...",
    "Orientação e ...",
    "Avaliação e ...",
    "Serviço de Manu..",
    "Peças de reposi...",
    "Compressores",
  ];
  return descricoes[index] || "Descrição";
}
