import React from "react";
import "./Landpage.css";
import Navbar from "../../components/Navbar/Navbar";
import Formulario from "../../components/Formulario/Formulario";

export default function Landpage() {
  return (
    <>
      <Navbar />
      <div className="homepage">
        <section className="carousel">Carrossel</section>

        <section className="section">
          <h2>Serviços</h2>
          <p>Conheça os nossos principais serviços oferecidos ao cliente.</p>
          <div className="cards">
            <div className="card">Manutenção</div>
            <div className="card">Venda Peças</div>
            <div className="card">Serviço de Oficina</div>
          </div>
        </section>

        <section className="section">
          <h2>Sobre a empresa</h2>
          <p>Um pouco sobre quem somos.</p>
          <div className="cards">
            <div className="card tall" />
            <div className="card tall" />
            <div className="card tall" />
          </div>
        </section>

        <section className="section">
          <h2>Produtos</h2>
          <p>Veja os produtos que oferecemos.</p>
          <div className="cards">
            <div className="card">Óleo</div>
            <div className="card">Filtro</div>
            <div className="card">Freio</div>
          </div>
        </section>

        <section className="location">
          <div className="map">
            <iframe
              title="Mapa"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15926.970991141087!2d-38.5436388!3d-3.7477436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74b04405c72bb%3A0x6288aa214dfd14fe!2sAv.%20Gov.%20Raul%20Barbosa%2C%206294%20-%20Aerol%C3%A2ndia%2C%20Fortaleza%20-%20CE%2C%2060701-325!5e0!3m2!1spt-BR!2sbr!4v1714922923452!5m2!1spt-BR!2sbr"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <Formulario />
      </div>
    </>
  );
}