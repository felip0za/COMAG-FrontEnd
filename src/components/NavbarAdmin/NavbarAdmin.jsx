import "./NavbarAdmin.css";
import comag from "/src/assets/comag.png";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const NavbarAdmin = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleNavigateToServices = () => {
    navigate("/servicespage");
  };

  const handleNavigateToProducts = () => {
    navigate("/productsPages");
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/buscar?termo=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <>
    <nav className="navbarAdmin">
      <div className="navbarAdmin-left">
        <img src={comag} alt="Logo da Comag" className="navbarAdmin-logo" />
        <button onClick={handleNavigateToServices} className="navAdmin-button">
          Meus Serviços
        </button>
        <button onClick={handleNavigateToProducts} className="navAdmin-button bold">
          Meus Produtos
        </button>
      </div>

      <div className="navbarAdmin-right">
        <div className="navbarAdmin-search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Pesquisar"
            className="search-input"
            aria-label="Pesquisar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearchKeyPress}
          />
        </div>
      </div>
    </nav>
    </>
  );
};

export default NavbarAdmin;
