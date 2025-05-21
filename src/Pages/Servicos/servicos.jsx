import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import './Servicos.css';
import Formulario from '../../components/Formulario/Formulario';
import api from '../../API/API';

function Servicos() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  // 🔄 Carregar serviços
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get('/api/services');
        setServices(response.data);
      } catch (error) {
        console.error("Erro ao carregar serviços:", error);
      }
    };

    fetchServices();
  }, []);

  // ▶️ Clique no serviço
  const handleServiceClick = async (e, id) => {
    e.preventDefault();
    try {
      const response = await api.get(`/api/services/${id}`);
      const service = response.data;
      navigate(`/servico/${id}`, { state: { service } });
    } catch (error) {
      console.error('Erro ao buscar serviço:', error);
    }
  };

  // 🏷️ Filtros disponíveis
  const serviceTypes = ['Manutenção', 'Instalação', 'Consultoria', 'Limpeza', 'Técnico', 'Reparo'];

  return (
    <>
      <Navbar />

      <div className="pagina-servicos">
        {/* 🔍 Filtro lateral */}
        <aside className="filtro-lateral">
          <h2>
            Filtros <span className="limpar-filtros">Limpar filtros</span>
          </h2>
          <div className="grupo-filtro">
            <strong>Tipos de Serviço</strong>
            {serviceTypes.map(type => (
              <label key={type}>
                <input type="checkbox" /> {type}
              </label>
            ))}
          </div>
        </aside>

        {/* 🎯 Conteúdo principal */}
        <main className="conteudo-principal">
          <div className="cabecalho-servicos">
            <div>
              <h1>Serviços</h1>
              <p>Explore nossos serviços disponíveis</p>
            </div>

            <div className="caixa-ordenacao">
              <label htmlFor="ordenacao">Ordenar por&nbsp;</label>
              <select id="ordenacao">
                <option value="preco">Preço</option>
                <option value="duracao">Duração</option>
              </select>
              <p className="quantidade-servicos">
                Mostrando {services.length} {services.length === 1 ? 'serviço' : 'serviços'}
              </p>
            </div>
          </div>

          {/* 🛠️ Lista de serviços */}
          <div className="lista-servicos">
            {services.map(service => (
              <div
                className="cartao-servico"
                key={service.id}
                onClick={e => handleServiceClick(e, service.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="imagem-servico">
                  <img
                    src={service.image || "https://via.placeholder.com/300x140.png?text=Serviço"}
                    alt={service.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }}
                  />
                </div>
                <h4>{service.name}</h4>
                <p>R$ {Number(service.price).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="carregar-mais">
            <button>Carregar mais serviços</button>
          </div>
        </main>
      </div>

      <Formulario />
    </>
  );
}

export default Servicos;
