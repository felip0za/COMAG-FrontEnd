import React from "react";
import "./Formulario.css";

function Formulario() {
  return (
    <div className="orcamento-contato-wrapper">
      <div className="orcamento-contato-container">
        <div className="orcamento-form">
          <h3 className="form-title">Solicite seu orçamento</h3>
          <form className="form-grid">
            <input type="text" placeholder="Nome" className="form-input" />
            <input type="text" placeholder="Telefone" className="form-input" />
            <input
              type="text"
              placeholder="Coloque sua Cidade"
              className="form-input"
            />
            <input type="text" placeholder="Estado" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <input
              type="text"
              placeholder="Assunto"
              className="form-input"
            />
            <input
              type="text"
              placeholder="Nome da Empresa"
              className="form-input"
            />
            <input
              type="text"
              placeholder="Mensagem"
              className="form-input full-width"
            />
            <button type="submit" className="form-button">
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div className="contato-info">
          <h3 className="form-title">Contatos</h3>
          <ul className="contato-list">
            <li>📱 Falar no WhatsApp</li>
            <li>📞 (85) 99999-9999</li>
            <li>📘 Página do Facebook</li>
            <li>📸 perfil.instagram.com</li>
            <li>✉️ email.exemplo@email.com</li>
            <li>📍 Av. Exemplo, 123 - Bairro, Cidade, Estado</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
