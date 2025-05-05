import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import comag from "/src/assets/comag.png";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar-container">
      <div className="navbar-top">
        <div className="whatsapp">
          <span>📞 WhatsApp</span>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img src={comag} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Home</li>
          <li onClick={() => navigate("/servicos")} style={{ cursor: "pointer" }}>Serviços</li>
          <li onClick={() => navigate("/produtos")} style={{ cursor: "pointer" }}>Produtos</li>
          <li onClick={() => navigate("/contatos")} style={{ cursor: "pointer" }}>Contatos</li>
          <li onClick={() => navigate("/duvidas")} style={{ cursor: "pointer" }}>Dúvidas</li>
        </ul>
        <div className="search">
          <input type="text" placeholder="🔍 Pesquisar" />
        </div>
      </nav>
    </header>
  );
}
