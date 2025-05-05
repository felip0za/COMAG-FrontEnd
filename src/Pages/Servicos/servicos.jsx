import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Servicos.css";

function Servicos(){
  return (
    <div className="servico-page">
      <Navbar />

      <div className="container">
        <div className="back-link">&lt; Voltar</div>

        <h1 className="titulo-principal">SERVIÇO</h1>
        <p className="descricao-breve">Breve descrição</p>

        <div className="conteudo-servico">
          <div className="imagem-servico" />

          <div className="detalhes-servico">
            <h2 className="nome-servico">NOME COMPLETO DO SERVIÇO</h2>
            <p className="texto-preco">A partir de:</p>
            <p className="valor-servico">R$700</p>
            <p className="descricao-servico">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="botao-orcamento">Solicitar orçamento</button>
          </div>
        </div>

        <div className="relacionados">
          <h3 className="titulo-relacionados">Serviços Relacionados</h3>
          <div className="lista-relacionados">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="item-relacionado">
                <div className="imagem-relacionado" />
                <p className="nome-relacionado">Serviço {index + 2}</p>
                <p className="descricao-relacionado">Descrição</p>
              </div>
            ))}
          </div>
        </div>

        <div className="orcamento-contato">
          <div className="form-orcamento">
            <h3 className="titulo-formulario">Solicite seu orçamento</h3>
            <form className="formulario">
              <input type="email" placeholder="Email" className="input" />
              <input type="text" placeholder="Telefone" className="input" />
              <input
                type="text"
                placeholder="Categoria de Serviço"
                className="input"
              />
              <input type="text" placeholder="Estado" className="input" />
              <textarea
                placeholder="Mensagem"
                className="textarea"
                rows={4}
              />
              <button type="submit" className="botao-enviar">Enviar</button>
            </form>
          </div>

          <div className="contatos">
            <h3 className="titulo-contatos">Contatos</h3>
            <ul className="lista-contatos">
              <li>📞 WhatsApp</li>
              <li>📍 Endereço físico</li>
              <li>📘 Página do Facebook</li>
              <li>📸 Perfil do Instagram</li>
              <li>✉️ schulzformat@hotmail.com</li>
              <li>🌐 www.schulzformat.com.br</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="rodape">
        COPYRIGHTS COMAB.COM. TODOS OS DIREITOS RESERVADOS
      </footer>
    </div>
  );
};

export default Servicos;
