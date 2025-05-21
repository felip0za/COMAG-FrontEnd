import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // Importa useNavigate
import "./ServicesPage.css";
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin";
import api from "../../API/API";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  // Hook navigate

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const response = await api.get("/api/services");
        setServices(response.data);
      } catch (error) {
        console.error("Erro ao carregar serviços:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Ajusta handleEdit para receber id
  const handleEdit = (id) => {
    navigate(`/editservico/${id}`);
  };

  const handleAdd = () => {
    navigate("/addservico");
  };

  return (
    <>
      <NavbarAdmin />
      <div className="servicos-container">
        <div className="servicos-header">
          <div>
            <h1 className="servicos-title">Serviços</h1>
            <p className="servicos-description"></p>
          </div>
          <button className="novo-servico-btn" onClick={handleAdd}>+ Novo Serviço</button>
        </div>

        <div className="servicos-content">
          {/* Filtros removidos */}

          {/* Cards de serviços */}
          <main className="servicos-cards">
            {loading && <p>Carregando serviços...</p>}
            {!loading && services.length === 0 && <p>Nenhum serviço encontrado.</p>}
            {!loading &&
              services.map((service) => (
                <div key={service.id} className="card-servico">
                  <div
                    className="card-imagem"
                    style={{
                      backgroundImage: service.imageUrl
                        ? `url(${service.imageUrl})`
                        : undefined,
                    }}
                  ></div>
                  {/* Passa o id para handleEdit */}
                  <button className="btn-editar" onClick={() => handleEdit(service.id)}>
                    Editar
                  </button>
                  <p className="card-titulo">{service.name}</p>
                  <p className="card-descricao">R$:{Number(service.price).toFixed(2)}</p>
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
