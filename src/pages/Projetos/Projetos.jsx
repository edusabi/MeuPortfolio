import { useEffect } from "react";
import useGithubRepos from "../../hook/useGithubRepos";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Projetos.module.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

//icons
import { FaRegFileCode } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Projetos = () => {

  useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,     
        });
      }, []);

  const projetosSelecionados = [
    "pokeverse",
    "AppGram",
  ];
  const { repos, loading, erro } = useGithubRepos(
    "edusabi",
    projetosSelecionados
  );

  if (loading) return "";
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <div>
      <Navbar />
        <h1 style={{textAlign:"center", marginTop:"3rem", marginBottom:"1rem"}} data-aos="zoom-in" data-aos-delay="200">Projetos</h1>
    <div className={style.reposWrapper}>
      <div className={style.reposAbout}>
        {repos &&
          repos.map((repo) => (
            <div key={repo.id} className={style.cardProjeto} data-aos="zoom-in" data-aos-delay="200">
              <h2>{repo.name}</h2>

              <div className={style.languageUsage}>
                <FaRegFileCode /> <p>{repo.language}</p>
              </div>

              <p className="repoAbout">{repo.description}</p>

              {(repo.html_url || repo.homepage) && (
                <div className={style.divLinks}>
                  {repo.html_url && (
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      <FaGithub />
                    </a>
                  )}
                  {repo.homepage && (
                    <a href={repo.homepage} target="_blank" rel="noreferrer">
                      <MdRocketLaunch />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
    </div>
  );
};

export default Projetos;
