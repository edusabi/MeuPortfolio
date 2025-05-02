import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Certificados.module.css"; 

import AOS from 'aos';
import 'aos/dist/aos.css';

//icons
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiExpress, SiMongodb, SiFlask } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const icones = {
  js: <IoLogoJavascript/>,
  ts: <SiTypescript/>,
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  node: <FaNodeJs/> ,
  express: <SiExpress /> ,
  mysql: <GrMysql/>,
  mongodb: <SiMongodb /> ,
  react: <FaReact />,
  python: <FaPython/>,
  flask: <SiFlask/>,
};

export default function Certificados() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,     
    });
  }, []);

  const [certificados, setCertificados] = useState([]);

  useEffect(() => {
    // Carregar dados do arquivo JSON
    fetch("/certificadosData.json")
      .then((response) => response.json())
      .then((data) => setCertificados(data))
      .catch((error) => console.error("Erro ao carregar dados: ", error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.certificadosContainer}>
        <h1 className={styles.customHeading} data-aos="zoom-in" data-aos-delay="200">Certificados</h1>
        <div className={styles.cardContainer}>
          {certificados.length === 0 ? (
            <p>Carregando certificados...</p>
          ) : (
            certificados.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={styles.card}
                  data-aos="zoom-in-up" data-aos-delay="200">
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{cert.titulo}</h3>
                    <p className={styles.cardText}>{cert.instrutor}</p>
                    <p className={styles.cardText}>Duração: {cert.duracao}</p>
                    <div className={styles.cardLang}>
                      {cert.linguagens.map((lang, i) => (
                        <span key={i} title={lang}>
                          {icones[lang]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
