import "./AddProduct.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin';
import { useState } from "react";
import api from '../../../API/API'; // importa sua instância axios

const AddProduct = () => {
  const navigate = useNavigate();

  // Estados controlados
  const [quantity, setQuantity] = useState(1);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null); // Você pode até remover isso se não usar imagem
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuantityChange = (type) => {
    setQuantity(prev => {
      if (type === "decrease" && prev > 1) return prev - 1;
      if (type === "increase") return prev + 1;
      return prev;
    });
  };

  // Mantive o preview só para visualização, mesmo sem enviar imagem no submit
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const productData = {
        name,
        price: parseFloat(price),
        description,
        category,
        quantity,
        // imagem removida porque não está enviando arquivo
      };

      await api.post('/api/products', productData);

      alert('Produto adicionado com sucesso!');
      navigate('/productsPages'); // Ajuste a rota da lista conforme seu projeto
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      alert('Erro ao adicionar produto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavbarAdmin />

      <div className="add-product-container">
        <button className="back-button" onClick={() => navigate(-1)}>← Voltar</button>
        <h1 className="page-title">Adicionar produto</h1>
        <p className="page-subtitle">Cadastre um produto</p>

        <form className="add-product-content" onSubmit={handleSubmit}>
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
              <button
                type="button"
                className="qty-btn"
                onClick={() => handleQuantityChange("decrease")}
              >
                <FaMinus />
              </button>
              <span className="qty-label">QTD: {quantity}</span>
              <button
                type="button"
                className="qty-btn"
                onClick={() => handleQuantityChange("increase")}
              >
                <FaPlus />
              </button>
            </div>

            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                placeholder="Nome do produto"
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
                placeholder="Escreva detalhes sobre o produto, tamanho, características"
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
                <option value="mecanica">Mecânica</option>
                <option value="eletrica">Elétrica</option>
                <option value="lubrificantes">Lubrificantes</option>
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

export default AddProduct;
