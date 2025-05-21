import "./AddServicoPage.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';
import { useState } from "react";
import api from '../../../API/API'; // importa sua instância axios

const AddServicoPage = () => {
  const navigate = useNavigate();

  // Estados controlados
  const [duration, setDuration] = useState(1); // duração em horas, por exemplo
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDurationChange = (type) => {
    setDuration(prev => {
      if (type === "decrease" && prev > 1) return prev - 1;
      if (type === "increase") return prev + 1;
      return prev;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const serviceData = {
        name,
        price: parseFloat(price),
        description,
        category,
        duration, // duração do serviço
      };

      await api.post('/api/services', serviceData);

      alert('Serviço adicionado com sucesso!');
      navigate('/servicesPage'); // Ajuste a rota da lista conforme seu projeto
    } catch (error) {
      console.error('Erro ao adicionar serviço:', error);
      alert('Erro ao adicionar serviço');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavbarAdmin />

      <div className="add-service-container">
        <button className="back-button" onClick={() => navigate(-1)}>← Voltar</button>
        <h1 className="page-title">Adicionar serviço</h1>
        <p className="page-subtitle">Cadastre um serviço</p>

        <form className="add-service-content" onSubmit={handleSubmit}>

          <div className="service-form">
            <h2>Dados do serviço</h2>

            <div className="duration-control">
              <button
                type="button"
                className="qty-btn"
                onClick={() => handleDurationChange("decrease")}
              >
                <FaMinus />
              </button>
              <span className="qty-label">Duração (h): {duration}</span>
              <button
                type="button"
                className="qty-btn"
                onClick={() => handleDurationChange("increase")}
              >
                <FaPlus />
              </button>
            </div>

            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                placeholder="Nome do serviço"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Valor</label>
              <input
                type="number"
                step="0.01"
                placeholder="R$ 0,00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Descrição</label>
              <textarea
                placeholder="Descreva os detalhes do serviço"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Categoria</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Selecione</option>
                <option value="consultoria">Consultoria</option>
                <option value="manutencao">Manutenção</option>
                <option value="instalacao">Instalação</option>
              </select>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="btn-cancel"
                onClick={() => navigate(-1)}
                disabled={loading}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn-submit"
                disabled={loading}
              >
                {loading ? 'Salvando...' : 'Salvar e publicar'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddServicoPage;
