import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="navbar-logo">
        <div className="logo-box">GC</div>
        <span className="logo-text">Guia<span>Crescer</span></span>
      </div>

      {/* LINKS */}
      <ul className="navbar-links">
        <li className="active">
          <i className="fas fa-heart"></i> Início
        </li>

        <li>
          <i className="fas fa-user-friends"></i> Professora
        </li>

        <li>
          <i className="fas fa-calendar"></i> Calendário
        </li>

        <li>
          <i className="fas fa-comment-dots"></i> Depoimentos
        </li>

        <li>
          <i className="fas fa-users"></i> Colabore
        </li>
      </ul>

      {/* BOTÃO PRETO */}
      <button className="btn-ia">
        <i className="fas fa-robot"></i> IA Especialista
      </button>
    </nav>
  );
}
