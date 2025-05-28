import Navbar from "../../components/Navbar/Navbar"
import { NavLink } from "react-router-dom";
import style from "./Sobre.module.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

//icons
import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


const Sobre = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,     
      });
    }, []);
  return (
    <div>
    
      <Navbar/>
    
      <div className={style.containerSobre}>
        
        <div>

        <div className={style.sobreParagrafo}>
          <h1 data-aos="fade-right">Sobre</h1>
          <p data-aos="fade-right">Olá! Me chamo <strong>Luís Eduardo</strong>, mas pode me chamar de <strong>Edu</strong>. Sou desenvolvedor Full Stack com foco em <strong>JavaScript, Node.js, React</strong> e banco de dados <strong>SQL e NoSQL</strong> (MySQL, PostgreSQL, MongoDB e SQLite). Também tenho experiência com <strong>Python</strong> e <strong>Flask</strong>, e estou sempre buscando aprender novas tecnologias.</p>

          <p data-aos="fade-left">Tenho facilidade para trabalhar tanto no front-end quanto no back-end, gosto de criar interfaces modernas com React, e também já desenvolvi APIs REST completas, sistemas de autenticação, chat em tempo real com Socket.io e páginas dinâmicas com banco de dados.</p>

          <p data-aos="fade-right">Estou cursando <strong>faculdade na área de tecnologia</strong>, onde me destaco por sempre buscar soluções práticas e eficientes. Meus projetos incluem desde sistemas de reservas para restaurantes até chatbots e dashboards interativos.</p>

          <p data-aos="fade-left">Sou <strong>comprometido, curioso e apaixonado por tecnologia</strong>. Estou sempre em busca de novos desafios para evoluir como programador.</p>
        </div>

        <div className={style.containerIdioma}>
          <h1 data-aos="fade-right">Idiomas</h1>
          <ul className={style.idiomas}>
            <li data-aos="fade-left">
              <span className={style.bandeira}><img src="/EUA.png" alt="" /></span>
              <div>
                <strong>Inglês:</strong> Intermediário (B1)<br />
                <small>Leitura e escrita boas, conversação funcional.</small>
              </div>
            </li>
            <li data-aos="fade-right">
              <span className={style.bandeira}><img src="/espanha.webp" alt="" /></span>
              <div>
                <strong>Espanhol:</strong> Básico (A2)<br />
                <small>Compreensão de frases simples e escritas básicas.</small>
              </div>
            </li>
            <li data-aos="fade-left">
              <span className={style.bandeira}><img src="/br.png" alt="" /></span>
              <div>
                <strong>Português:</strong> Nativo<br />
                <small>Comunicação fluente e natural em todas as situações.</small>
              </div>
            </li>
          </ul>
        </div>

      
        <span className={style.redesSociais}>
          <h2 data-aos="fade-left">Redes sociais</h2>
          <div className={style.icones}>
            <NavLink to="https://github.com/edusabi" target="_blank" className={style.github} data-aos="fade-up"><FaGithub /></NavLink>
            <NavLink to="https://www.linkedin.com/in/luiseduardodevv/" target="_blank" className={style.linkedin} data-aos="fade-down"><FaLinkedin /></NavLink>
            <NavLink to="mailto:luiseduardodevv@gmail.com" className={style.email} data-aos="fade-up"><MdOutlineMail/></NavLink>
          </div>
        </span>

      
        </div>
      
      </div>
    
    </div>
  )
}

export default Sobre