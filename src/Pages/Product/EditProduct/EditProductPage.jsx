import React from 'react';
import './EditProductPage.css';
import { useNavigate } from "react-router-dom";
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';

function EditProductPage() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1); // Voltar para a página anterior
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Produto salvo!');
    navigate('/produtos');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <NavbarAdmin />
      <div className="product-editor">
        <div className="left-section">
          <div className="image-upload">
            <span>Edite a imagem do produto</span>
          </div>
        </div>
        <div className="right-section">
          <button className="back-button" onClick={handleBack}>← Voltar</button>
          <h2>Dados do produto</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Nome do produto"
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Valor</label>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="R$ 0,00"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                name="description"
                placeholder="Escreva detalhes sobre o produto, tamanho, características"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="category">Categoria</label>
              <select id="category" name="category">
                <option value="">Selecione</option>
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

export default EditProductPage;
