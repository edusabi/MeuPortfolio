import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";
import style from "./Navbar.module.css";

const Navbar = () => {
  const itensRef = useRef(null);
  const [menuAtivo, setMenuAtivo] = useState(false);



  const [temaClaro, setTemaClaro] = useState(false);

  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "light") {
      document.documentElement.classList.add("light");
      setTemaClaro(true);
    }
  }, []);

  const changeMode = () => {
    const html = document.documentElement;
    const novoTemaClaro = !temaClaro;
    setTemaClaro(novoTemaClaro);

    if (novoTemaClaro) {
      html.classList.add("light");
      localStorage.setItem("tema", "light");
    } else {
      html.classList.remove("light");
      localStorage.setItem("tema", "dark");
    }
  };

useEffect(() => {
  document.body.style.overflowY = menuAtivo ? "hidden" : "auto";
}, [menuAtivo]);



const handleNavbar = () => {
  setMenuAtivo(prev => !prev);
};



return (
  <div className={style.header}>
      <h1><img src="./logoo.jpg" alt="" width="70px" className={style.imgNavbar}/></h1>

      <div ref={itensRef} className={`${style.items} ${menuAtivo ? style.ativo : ""}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${style.links} ${style.activeLink}` : style.links}>Home</NavLink>
        <NavLink to="/certificados" className={({ isActive }) => isActive ? `${style.links} ${style.activeLink}` : style.links}>Certificados</NavLink>
        <NavLink to="/projetos" className={({ isActive }) => isActive ? `${style.links} ${style.activeLink}` : style.links}>Projetos</NavLink>
        <NavLink to="/sobre" className={({ isActive }) => isActive ? `${style.links} ${style.activeLink}` : style.links}>Sobre</NavLink>
      </div>

      <div className={style.navbarLine} onClick={handleNavbar}>
        <div className={`line1 ${menuAtivo ? style.line1Ativo : ""}`}></div>
        <div className={`line2 ${menuAtivo ? style.line2Ativo : ""}`}></div>
        <div className={`line3 ${menuAtivo ? style.line3Ativo : ""}`}></div>
      </div>

      <div className={style.mode} onClick={changeMode}>
        {temaClaro ? (
          <BsSun className={style.iconTheme} />
        ) : (
          <BsMoon className={style.iconTheme} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
