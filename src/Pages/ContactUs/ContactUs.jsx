import "./ContactUs.css";
import Navbar from "../../components/Navbar/Navbar";
import Formulario from "../../components/Formulario/Formulario";

const ContactUs = () => {
  return (
    <>
    <Navbar />
    <div className="contato-container">
      <h1>Contate–nos!</h1>
      <p>
        Ficou com alguma dúvida ou tem alguma observação?
        <br />
        Contate-nos por meio dos meios abaixo!
      </p>
      <div className="contato-box">
        <div className="contato-info">
          <h2>Informações para Contato</h2>
          <ul>
            <li>📱 Enviar WhatsApp</li>
            <li>📞 (85) 99149-9829</li>
            <li>📘 Página do Facebook</li>
            <li>🌐 comag.compressores</li>
            <li>✉️ consul.barbosa@hotmail.com</li>
            <li>📍 Avenida Governador Raul Barbosa, 6294, Aerolândia - Fortaleza/CE</li>
          </ul>
        </div>

        <form className="contato-form">
          <div className="form-row">
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Sobrenome" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Número de Telefone" />
          </div>

          <div className="form-radio">
            <label>
              <input type="radio" name="opcao" /> Manutenção
            </label>
            <label>
              <input type="radio" name="opcao" /> Serviço
            </label>
            <label>
              <input type="radio" name="opcao" /> Orçamento
            </label>
            <label>
              <input type="radio" name="opcao" /> Outro
            </label>
          </div>

          <textarea placeholder="Escreva aqui ..."></textarea>

          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </div>
    <Formulario />
    </>
    
  );
};

export default ContactUs;
