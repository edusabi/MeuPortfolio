import Navbar from "../../components/Navbar/Navbar";
import style from "./Home.module.css";
// import {Link} from "react-router-dom";
import { useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';

import AOS from 'aos';
import 'aos/dist/aos.css';


////icons
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs, FaReact, FaGithub, FaGitAlt, FaCss3Alt, FaHtml5, FaPython, FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiSqlite, SiFlask } from "react-icons/si";
import { GrMysql } from "react-icons/gr";


const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,     
    });
  }, []);

  return (
    <div className={style.homePrinc}>

      <Navbar/>

      
      
        <div className={style.homeIntro}>
          <div className={style.fraseAndFoto}>
            <div className={style.imgAbout}>
          <TypeAnimation
            sequence={[
              'Olá, eu sou Luís Eduardo',
              1500,
              () => {}, 
            ]}
            wrapper="h1"
            speed={30}
            className={style.semCursor}
          />

          <TypeAnimation
            sequence={[
              2000, 
              'Desenvolvedor Full-Stack', 
              2000,
              'Desenvolvedor Front-End',
              2000,
              'Desenvolvedor Back-End',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className={style.semCursor}
          />
          </div>

          <div data-aos="zoom-in-up" data-aos-delay="200"><img src="/myFoto.png" height="250px"/></div>


          </div>
          

        <div className={style.linguagens} data-aos="zoom-in" data-aos-delay="200">
          <h2>Tecnologias</h2>

          <div className={style.html}>
            <FaHtml5/>
            <h3>HTML5</h3>
          </div>

          <div className={style.css}>
            <FaCss3Alt/>
            <h3>CSS3</h3>
          </div>

          <div className={style.js}>
            <IoLogoJavascript/>
            <h3>JavaScript</h3>
          </div>

          <div className={style.node}>
            <FaNodeJs/>
            <h3>Node</h3>
          </div>

          <div className={style.react}>
            <FaReact/>
            <h3>React</h3>
          </div>

          <div className={style.python}>
            <FaPython/>
            <h3>Python</h3>
          </div>

          <div className={style.flask}>
            <SiFlask/>
            <h3>Flask</h3>
          </div>

          <div className={style.mongo}>
            <DiMongodb/>
            <h3>MongoDb</h3>
          </div>

          <div className={style.mysql}>
            <GrMysql/>
            <h3>MySQL</h3>
          </div>

          <div className={style.sqlite}>
            <SiSqlite/>
            <h3>SQLite</h3>
          </div>

          <div className={style.postgress}>
            <BiLogoPostgresql/>
            <h3>Postgresql</h3>
          </div>

          <div className={style.github}>
            <FaGithub/>
            <h3>GitHub</h3>
          </div>

          <div className={style.git}>
            <FaGitAlt/>
            <h3>Git</h3>
          </div>

          <div className={style.express}>
            <SiExpress/>
            <h3>Express</h3>
          </div>

        </div>

        </div>

    </div>
  )
}

export default Home