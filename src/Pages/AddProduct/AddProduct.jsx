import "./AddProduct.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import { useState } from "react";

const AddProduct = () => {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleQuantityChange = (type) => {
    setQuantity(prev => {
      if (type === "decrease" && prev > 1) return prev - 1;
      if (type === "increase") return prev + 1;
      return prev;
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <NavbarAdmin />

      <div className="add-product-container">
        <button className="back-button" onClick={() => navigate(-1)}>← Voltar</button>
        <h1 className="page-title">Adicionar produto</h1>
        <p className="page-subtitle">Cadastre um produto</p>

        <div className="add-product-content">
          <div className="image-upload">
            <label htmlFor="fileInput">
              {imagePreview ? (
                <img src={imagePreview} alt="Prévia" className="image-preview" />
              ) : (
                <div className="image-placeholder">
                  <span className="image-icon">🖼️</span>
                  <p>Selecione a imagem do produto</p>
                </div>
              )}
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </div>

          <div className="product-form">
            <h2>Dados do produto</h2>

            <div className="quantity-control">
              <button className="qty-btn" onClick={() => handleQuantityChange("decrease")}><FaMinus /></button>
              <span className="qty-label">QTD: {quantity}</span>
              <button className="qty-btn" onClick={() => handleQuantityChange("increase")}><FaPlus /></button>
            </div>

            <div className="form-group">
              <label>Título</label>
              <input type="text" placeholder="Nome do produto" />
            </div>

            <div className="form-group">
              <label>Valor</label>
              <input type="text" placeholder="R$ 0,00" />
            </div>

            <div className="form-group">
              <label>Descrição</label>
              <textarea placeholder="Escreva detalhes sobre o produto, tamanho, características"></textarea>
            </div>

            <div className="form-group">
              <label>Categoria</label>
              <select>
                <option value="">Selecione</option>
                <option value="mecanica">Mecânica</option>
                <option value="eletrica">Elétrica</option>
                <option value="lubrificantes">Lubrificantes</option>
              </select>
            </div>

            <div className="form-actions">
              <button className="btn-cancel" onClick={() => navigate(-1)}>Cancelar</button>
              <button className="btn-submit">Salvar e publicar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
