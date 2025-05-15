import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddServicoPage.css";

export default function AddServicoPage() {
  const [imagemPreview, setImagemPreview] = useState(null);
  const navigate = useNavigate();

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagemPreview(previewURL);
    }
  };

  return (
    <div className="adicionar-servico-container">
      <button onClick={() => navigate(-1)} className="voltar-link">&larr; Voltar</button>
      <h1 className="titulo-principal">Adicionar Serviço</h1>
      <p className="subtitulo">Cadastre um serviço</p>

      <div className="formulario-wrapper">
        {/* Imagem */}
        <div className="imagem-upload">
          <label htmlFor="upload-input" className="imagem-placeholder">
            {imagemPreview ? (
              <img src={imagemPreview} alt="Preview" className="imagem-preview" />
            ) : (
              <>
                <div className="icone-upload"></div>
                <p className="texto-upload">Selecione a imagem do serviço</p>
              </>
            )}
          </label>
          <input
            id="upload-input"
            type="file"
            accept="image/*"
            onChange={handleImagemChange}
            className="input-file"
          />
        </div>

        {/* Formulário */}
        <div className="dados-servico">
          <h2 className="dados-titulo">Dados do serviço</h2>

          <div className="campo-duplo">
            <div className="campo">
              <label htmlFor="titulo" className="label">Título</label>
              <input id="titulo" type="text" placeholder="Nome do serviço" className="input" />
            </div>

            <div className="campo">
              <label htmlFor="valor" className="label">Valor</label>
              <input id="valor" type="text" placeholder="R$ 0,00" className="input" />
            </div>
          </div>

          <div className="campo">
            <label htmlFor="descricao" className="label">Descrição</label>
            <textarea id="descricao" placeholder="Escreva detalhes sobre o serviço" className="textarea" />
          </div>

          <div className="campo">
            <label htmlFor="categoria" className="label">Categoria</label>
            <select id="categoria" className="select">
              <option>Selecione</option>
            </select>
          </div>

          <div className="botoes">
            <button className="btn-cancelar" onClick={() => navigate(-1)}>Cancelar</button>
            <button className="btn-publicar">Salvar e publicar</button>
          </div>
        </div>
      </div>
    </div>
  );
}