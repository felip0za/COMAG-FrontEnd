import React, { useEffect, useState } from 'react';
import './EditProductPage.css';
import { useNavigate, useParams } from "react-router-dom";
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';
import api from '../../../API/API'; // importe sua instância axios

function EditProductPage() {
  const navigate = useNavigate();
  const { id } = useParams(); // pegar id da URL

  // Estado para armazenar dados do produto e loading
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    category: ''
  });
  const [loading, setLoading] = useState(true);

  // Buscar dados do produto ao montar componente
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/api/products/${id}`);
        // Assumindo que o backend retorna { title, price, description, category }
        setProduct({
          title: res.data.title || '',
          price: res.data.price || '',
          description: res.data.description || '',
          category: res.data.category || ''
        });
      } catch (error) {
        console.error('Erro ao carregar produto:', error);
        alert('Erro ao carregar produto');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Controlar inputs do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/api/products/${id}`, product);
      alert('Produto atualizado com sucesso!');
      navigate('/productsPages'); // ou a rota correta da lista de produtos
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      alert('Erro ao atualizar produto');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <div>Carregando produto...</div>;
  }

  return (
    <>
      <NavbarAdmin />
      <div className="product-editor">
        <div className="left-section">
          <div className="image-upload">
            <span>Edite a imagem do produto</span>
            {/* Aqui você pode adicionar funcionalidade para upload da imagem */}
          </div>
        </div>
        <div className="right-section">
          <button className="back-button" onClick={handleBack}>← Voltar</button>
          <h2>Dados do produto</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome do produto"
                value={product.name}
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
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                name="description"
                placeholder="Escreva detalhes sobre o produto, tamanho, características"
                value={product.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="category">Categoria</label>
              <select
                id="category"
                name="category"
                value={product.category}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                {/* Aqui você pode carregar categorias dinamicamente, se quiser */}
                <option value="categoria1">Categoria 1</option>
                <option value="categoria2">Categoria 2</option>
              </select>
            </div>
            <div className="buttons">
              <button type="button" className="cancel-button" onClick={handleCancel}>
                Cancelar
              </button>
              <button type="submit" className="save-button" >
                Salvar e publicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProductPage;
