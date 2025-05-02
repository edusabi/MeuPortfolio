import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChatBot.module.css";
import { FaRobot, FaTimes } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const respostasFixas = {
  "oi": "Oi! Tudo bem? Eu sou o Artox 😄 Em que posso ajudar?",
  "ola": "Oi! Tudo bem? Eu sou o Artox 😄 Em que posso ajudar?",
  "como vai": "Tudo ótimo! E você? 😄",
  "qual seu nome": "Eu sou o Artox! Prazer! 😎",
  "tem sentimentos": "Sou apenas um bot, mas estou aqui para ajudar! 😅",
  "curte musica": "Gosto de bits 🎶",
  "e confiavel": "Sou sim! 🤖",
  "gosta do edu": "Claro! 😁",
  "tem memoria": "Só de palavras 💾",
  "voce atualiza": "De vez em quando 🔁",
  "estou bem": "Que ótimo, fico feliz 😄",
  
  "edu fez algum projeto em grupo": "Sim. Edu já fez projetos em grupo tanto na faculdade, quanto com amigos próximos!",
  "edu fala ingles": "Sim, Edu possui nivél intermediário em Inglês",
  "edu fala espanhol": "Sim, Edu possui nivél intermediário em Espanhol",
  "edu estuda o que": "Edu estuda desenvolvimento Full Stack e mobile, sempre quer aprender mais! 📚",
  "edu estuda onde": "Edu estuda na Unifavip - Wyden! 🎓",
  "o que edu le": "Edu lê muitos artigos sobre tecnologia! 📚",
  "softskills do edu": "Proatividade, Trabalho em equipe, Resiliência, Controle emocional, Gestão do tempo, Comunicação, Aprendizado contínuo, Empatia, Pensamento crítico, Autonomia",
  "edu tem pet": "Compilador de estimação 🐶",
};

import AOS from 'aos';
import 'aos/dist/aos.css';


const Chatbot = () => {
  
  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,     
      });
    }, []);

  const navigate = useNavigate();
  const [configMessages, setConfigMessages] = useState(false);
  const [mensagens, setMensagens] = useState([]);
  const [input, setInput] = useState("");
  const [aberto, setAberto] = useState(false);

  const messagesEndRef = useRef(null); // Referência para o final da lista de mensagens

  const toggleChat = () => {
    setAberto((prev) => !prev);
  };

  // Função para normalizar a entrada do usuário
  const normalizarTexto = (texto) => {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // remove acentos
      .replace(/[^\w\s]/g, "")
      .replace(/\s{2,}/g, " ") // remove espaços extras
      .trim();
  };

  // Função para rolar a lista de mensagens até o final
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleEnviar = () => {
    if (!input.trim()) return;

    const perguntaNormalizada = normalizarTexto(input);
    const resposta =
      respostasFixas[perguntaNormalizada] || "Desculpa, não entendi 🤖";

    if (perguntaNormalizada === "home") {
      navigate("/"); // Ou a URL desejada
      setInput("");
      return;
    }
    if (perguntaNormalizada === "projetos") {
      navigate("/projetos"); // Ou a URL desejada
      setInput("");
      return;
    }
    if (perguntaNormalizada === "certificados") {
      navigate("/certificados");
      setInput("");
      return;
    }
    if (perguntaNormalizada === "sobre") {
      navigate("/sobre");
      setInput("");
      return;
    }
    if (perguntaNormalizada === "clean") {
      setMensagens([]);
      setInput("");
      return;
    }

    // Atualiza as mensagens
    setMensagens((prev) => [
      ...prev,
      { autor: "Você", texto: input },
      { autor: "Artox", texto: resposta },
    ]);
    setInput("");
  };

  const configBotMessage = () => {
    setConfigMessages((prev) => !prev);
  };

  const closeDivBotMessages = () => {
    setConfigMessages(false);
  };

  // Efeito para rolar para o final das mensagens sempre que elas forem atualizadas
  useEffect(() => {
    scrollToBottom();
  }, [mensagens]);

  return (
    <div className={styles.container}>
      {configMessages ? (
        <div className={styles.botMessagesDiv} data-aos="zoom-in-up" data-aos-delay="200">
          <FaTimes
            onClick={closeDivBotMessages}
            className={styles.closeDivMessages}
          />
          <div>
            <h2>Comandos que você pode usar, algo além disso não funcionará!</h2>
            <h4>Digite sem as aspas " "</h4>
          </div>

          <div>

            <div>
              <h3>Sobre Artox:</h3>
              <p>
              "oi"
              "ola"
              "como vai"
              "qual seu nome"
              "tem sentimentos"
              "curte música"
              "é confiável"
              "gosta do Edu"
              "estou bem"
              "tem memória"
              "você atualiza"
              </p>
            </div>

            <div>
              <h3>Sobre Edu:</h3>
              <p>
              "edu fez algum projeto em grupo"
              "edu fala ingles"
              "edu fala espanhol"
              "edu estuda o que"
              "edu estuda onde"
              "o que edu lê"
              "softskills do edu"
              "edu tem pet"
              </p>
            </div>

            <div>
              <h3>Navegação:</h3>
              <p>
                "Home"
                "Certificados"
                "Projetos"
                "Sobre"
              </p>
            </div>

            <div>
              <h3>Funções:</h3>
              <p>
                "Clean"
              </p>
            </div>

          </div>

        </div>
      ) : (
        ""
      )}

      {aberto ? (
        <div className={`${styles.chatBox} ${aberto ? styles.ativo : ""}`}>
          <div className={styles.topo}>
            <strong>Sistema: Artox ativado</strong>
            <button
              className={styles.closeBtn}
              onClick={() => [setAberto(false), setConfigMessages(false)]}
            >
              <FaTimes />
            </button>
          </div>

          <div className={styles.mensagens}>
            {mensagens.map((msg, index) => (
              <div
                key={index}
                className={msg.autor === "Você" ? styles.userMsg : styles.botMsg}
              >
                <strong>{msg.autor}:</strong> {msg.texto}
              </div>
            ))}
            {/* Referência para o final da lista de mensagens */}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.inputArea}>
            <FaGear className={styles.configBot} onClick={configBotMessage} />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite algo..."
            />
            <button onClick={handleEnviar}>Enviar</button>
          </div>
        </div>
      ) : (
        <button className={styles.botaoAbrir} onClick={toggleChat}>
          <span className={styles.roboAnimado}>
            <FaRobot size={30} />
          </span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
