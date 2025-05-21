import React, { useEffect, useState } from 'react';
import './EditServicoPage.css';
import { useNavigate, useParams } from "react-router-dom";
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';
import api from '../../../API/API'; // importe sua instância axios

function EditServicoPage() {
  const navigate = useNavigate();
  const { id } = useParams(); // pegar id da URL

  // Estado para armazenar dados do serviço e loading
  const [service, setService] = useState({
    name: '',
    price: '',
    description: '',
    category: ''
  });
  const [loading, setLoading] = useState(true);

  // Buscar dados do serviço ao montar componente
  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await api.get(`/api/services/${id}`);
        // Assumindo que o backend retorna { name, price, description, category }
        setService({
          name: res.data.name || '',
          price: res.data.price || '',
          description: res.data.description || '',
          category: res.data.category || ''
        });
      } catch (error) {
        console.error('Erro ao carregar serviço:', error);
        alert('Erro ao carregar serviço');
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  // Controlar inputs do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setService(prev => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/api/services/${id}`, service);
      alert('Serviço atualizado com sucesso!');
      navigate('/servicespage'); // ou a rota correta da lista de serviços
    } catch (error) {
      console.error('Erro ao atualizar serviço:', error);
      alert('Erro ao atualizar serviço');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <div>Carregando serviço...</div>;
  }

  return (
    <>
      <NavbarAdmin />
      <div className="service-editor">
        <div className="left-section">
          <div className="image-upload">
            <span>Edite a imagem do serviço</span>
            {/* Aqui você pode adicionar funcionalidade para upload da imagem */}
          </div>
        </div>
        <div className="right-section">
          <button className="back-button" onClick={handleBack}>← Voltar</button>
          <h2>Dados do serviço</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome do serviço"
                value={service.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Valor</label>
              <input
                type="number"
                step="0.01"
                id="price"
                name="price"
                placeholder="R$ 0,00"
                value={service.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                name="description"
                placeholder="Escreva detalhes sobre o serviço"
                value={service.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="category">Categoria</label>
              <select
                id="category"
                name="category"
                value={service.category}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                {/* Você pode carregar categorias dinamicamente se quiser */}
                <option value="categoria1">Categoria 1</option>
                <option value="categoria2">Categoria 2</option>
              </select>
            </div>
            <div className="buttons">
              <button type="button" className="cancel-button" onClick={handleCancel}>
                Cancelar
              </button>
              <button type="submit" className="save-button">
                Salvar e publicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditServicoPage;
