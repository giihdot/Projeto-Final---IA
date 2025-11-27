import React from "react";
import "./Apresentacao.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PALETTE = {
  primary: "#e354a6",
};

export default function Apresentacao() {
  const cardsData = [
    { 
      title: "Autoestima", 
      icon: "fas fa-heart", 
      text: "Estratégias para fortalecer a confiança e o bem-estar emocional." 
    },
    { 
      title: "Saúde Emocional", 
      icon: "fas fa-brain", 
      text: "Recursos para gerenciar emoções e construir resiliência." 
    },
    { 
      title: "Produtividade", 
      icon: "fas fa-tachometer-alt", 
      text: "Dicas de organização e foco para educadores e alunos." 
    },
    { 
      title: "Recursos Pedagógicos", 
      icon: "fas fa-lightbulb", 
      text: "Atividades práticas e materiais didáticos inovadores." 
    },
  ];

  return (
    <div className="ap-container">
<Navbar /> 
      {/* HERO */}
      <div className="ap-hero">
        <h1 className="ap-title">Guia Crescer e Aprender</h1>
        <p className="ap-subtitle">Um farol para a educação do futuro.</p>
      </div>

      {/* CONTEÚDO */}
      <div className="ap-content">
        <h2 className="ap-section-title">Bem-Vindos ao Seu Guia Educacional</h2>

        <p className="ap-text">
          Nossa missão é fornecer ferramentas e conhecimentos valiosos para professores, pais e alunos, promovendo um ambiente de aprendizado inclusivo, estimulante e focado no desenvolvimento integral. 
          Acreditamos que a educação, apoiada pela neurociência e estratégias de suporte, é a chave para liberar o potencial de cada criança.
        </p>
<Header />
        {/* CARDS */}
        <div className="ap-cards-grid">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="ap-card"
              style={{ borderLeft: `5px solid ${PALETTE.primary}` }}
            >
              <h3 className="ap-card-title">
                <i
                  className={`${card.icon} ap-card-icon`}
                  style={{ color: PALETTE.primary }}
                ></i>
                {card.title}
              </h3>

              <p className="ap-card-text">{card.text}</p>
            </div>
          ))}
        </div>
<Footer />
      </div>
    </div>
  );
}
