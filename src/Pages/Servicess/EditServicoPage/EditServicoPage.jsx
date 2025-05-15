import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditServicoPage.css";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";

export default function EditServicoPage() {
  const [imagemPreview, setImagemPreview] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  const navigate = useNavigate();
  const { id } = useParams(); // caso deseje buscar por ID do serviço

  useEffect(() => {
    // Simula carregar dados do serviço com base no ID
    const servicoExistente = {
      titulo: "Instalação de Redes de Ar",
      valor: "R$ 120,00",
      descricao: "Serviço especializado em redes de ar.",
      categoria: "instalacao",
      imagemURL: null // ou um link para imagem se já existir
    };

    setTitulo(servicoExistente.titulo);
    setValor(servicoExistente.valor);
    setDescricao(servicoExistente.descricao);
    setCategoria(servicoExistente.categoria);
    if (servicoExistente.imagemURL) {
      setImagemPreview(servicoExistente.imagemURL);
    }
  }, [id]);

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagemPreview(previewURL);
    }
  };

  return (
    <>
    <NavbarAdmin />
    <div className="editar-servico-container">
      <button onClick={() => navigate(-1)} className="voltar-link">&larr; Voltar</button>
      <h1 className="titulo-principal">Editar Serviço</h1>
      <p className="subtitulo">Editar um serviço</p>

      <div className="formulario-wrapper">
        {/* Imagem */}
        <div className="imagem-upload">
          <label htmlFor="upload-input" className="imagem-placeholder">
            {imagemPreview ? (
              <img src={imagemPreview} alt="Preview" className="imagem-preview" />
            ) : (
              <>
                <div className="icone-upload"></div>
                <p className="texto-upload">Edite a imagem do serviço</p>
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
              <input
                id="titulo"
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                className="input"
              />
            </div>

            <div className="campo">
              <label htmlFor="valor" className="label">Valor</label>
              <input
                id="valor"
                type="text"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                className="input"
              />
            </div>
          </div>

          <div className="campo">
            <label htmlFor="descricao" className="label">Descrição</label>
            <textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="textarea"
            />
          </div>

          <div className="campo">
            <label htmlFor="categoria" className="label">Categoria</label>
            <select
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="select"
            >
              <option value="">Selecione</option>
              <option value="manutencao">Manutenção</option>
              <option value="instalacao">Instalação</option>
              <option value="vendas">Vendas</option>
              <option value="pecas">Peças</option>
            </select>
          </div>

          <div className="botoes">
            <button className="btn-cancelar" onClick={() => navigate(-1)}>Cancelar</button>
            <button className="btn-publicar">Salvar e publicar</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
