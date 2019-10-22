import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  const fecharMenu = () => {
    setMenuAtivo(false)
  }

  return (
    <div className="Navbar">
      <nav>
          <div className="ancora">
            <Link to="/">Home</Link>
            <Link to="/noticias">Notícias</Link>
            <Link to="/cadastro">Cadastre-se</Link>
            <Link to="/sobre">Sobre o Projeto!</Link>
          </div>
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span className={`${menuAtivo ? "virarX1": ""}`}></span>
          <span className={`${menuAtivo ? "sumirIgualTiro": ""}`}></span>
          <span className={`${menuAtivo ? "virarX2": ""}`}></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <Link onClick={fecharMenu} to="/">Home</Link>
        <Link onClick={fecharMenu} to="/noticias">Notícias</Link>
        <Link onClick={fecharMenu} to="/cadastro">Cadastre-se</Link>
        <Link onClick={fecharMenu} to="/sobre">Sobre o Projeto!</Link>
      </section>
    </div>
  );
};

export default Navbar;
