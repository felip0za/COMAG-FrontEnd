import React from "react";
import "./Login.css";
import comag from "/src/assets/comag.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/productsPages");
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={comag} alt="Logo Comag" />
      </div>
      <div className="login-form">
        <h2>Área de Login</h2>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <a href="#" className="forgot-password">
          Solicitar recuperação de senha
        </a>
        <button onClick={handleClick}>Entrar</button>
      </div>
    </div>
  );
}

export default Login;
