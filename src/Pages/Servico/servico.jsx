import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Formulario from "../../components/Formulario/Formulario";
import api from "../../API/API";
import "./Servico.css";

function Servico() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const loadService = async () => {
      try {
        const response = await api.get(`/api/services/${id}`);
        setService(response.data);
      } catch (error) {
        console.error("Erro ao carregar serviço:", error);
      }
    };

    loadService();
  }, [id]);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  if (!service) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="pagina-service">
      <Navbar />

      <div className="conteiner-service">
        <button onClick={handleClick} className="link-voltar">&lt; Voltar</button>

        <h1 className="titulo-service">{service.name}</h1>
        <p className="texto-breve">{service.subtitle || "Confira nossos serviços especializados"}</p>

        <div className="bloco-service">
          <div
            className="imagem-service"
            style={{
              backgroundImage: `url(${service.image || "https://via.placeholder.com/500x300.png?text=Serviço"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="info-service">
            <h2 className="nome-service">{service.name}</h2>
            <p className="texto-preco">A partir de:</p>
            <p className="valor-service">R$ {Number(service.price).toFixed(2)}</p>
            <p className="descricao-service">{service.description}</p>
            <button className="botao-orcamento">Solicitar orçamento</button>
          </div>
        </div>

        <Formulario />
      </div>

      <footer className="rodape">
        COPYRIGHTS COMAB.COM. TODOS OS DIREITOS RESERVADOS
      </footer>
    </div>
  );
}

export default Servico;
