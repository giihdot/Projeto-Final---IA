import { useState } from "react";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";

export default function IA() {
  const [mensagem, setMensagem] = useState("");
  const [conversa, setConversa] = useState([
    {
      remetente: "bot",
      texto:
        "Olá! Sou sua assistente pedagógica. Pergunte sobre rotinas escolares, planos de aula, estratégias de ensino e apoio a estudantes neurodivergentes.",
    },
  ]);

  const enviarMensagem = async () => {
    if (!mensagem.trim()) return;

    const novaConversa = [
      ...conversa,
      { remetente: "user", texto: mensagem },
    ];
    setConversa(novaConversa);

    try {
      const resp = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: mensagem }),
      });

      const data = await resp.json();

      setConversa((prev) => [
        ...prev,
        { remetente: "bot", texto: data.reply },
      ]);
    } catch (error) {
      setConversa((prev) => [
        ...prev,
        { remetente: "bot", texto: "Erro ao conectar ao servidor." },
      ]);
    }

    setMensagem("");
  };

  return (
    <>
    <div
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "20px auto",
        background: "white",
        borderRadius: "12px",
        padding: "0",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      {/* Topo */}
      <div
        style={{
          background: "#ff4fa6",
          padding: "20px",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        IA Pedagógica
        <div style={{ fontSize: "12px", marginTop: "4px", opacity: 0.9 }}>
          Especialista em Educação & Desenvolvimento
        </div>
      </div>

      {/* Conversa */}
      <div
        style={{
          padding: "20px",
          height: "400px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {conversa.map((msg, index) => (
          <div
            key={index}
            style={{
              alignSelf: msg.remetente === "user" ? "flex-end" : "flex-start",
              background: msg.remetente === "user" ? "#ffb3d8" : "#f1f1f1",
              padding: "10px 14px",
              borderRadius: "10px",
              maxWidth: "70%",
            }}
          >
            <ReactMarkdown>{msg.texto}</ReactMarkdown>
          </div>
        ))}
      </div>

      {/* Input */}
      <div
        style={{
          padding: "15px",
          borderTop: "1px solid #eee",
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
          placeholder="Ex: Como ajudar aluno com dislexia?"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
        />

        <button
          onClick={enviarMensagem}
          style={{
            background: "#ff4fa6",
            border: "none",
            padding: "12px 18px",
            borderRadius: "8px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          ➤
        </button>
        
      </div>
    </div>
          <Footer/>

    </>
  );
}
