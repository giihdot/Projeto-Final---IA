const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = "AIzaSyCjSBDNX2dZr8eQZu2a58CDzIei4DoB-P8";

// Rota do chat educacional
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Envie a mensagem no corpo da requisição." });
  }

  try {
    const prompt = `
      Você é uma IA especializada em educação, desenvolvimento infantil,
      neurodivergências (TDAH, TEA, dislexia), habilidades socioemocionais,
      técnicas de estudo, estratégias pedagógicas e para criar planos de aula.

      Só responda perguntas relacionadas a educação.
      Se for algo fora disso, diga:
      "Este chat é exclusivo para assuntos educacionais."

      Pergunta do usuário:
      "${message}"
    `;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ]
      }
    );

    const reply =
      response?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sem resposta.";

    res.json({ reply });

  } catch (error) {
    console.error("Erro no Gemini:", error?.response?.data || error.message);
    res.status(500).json({ error: "Erro ao se comunicar com o Gemini." });
  }
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
