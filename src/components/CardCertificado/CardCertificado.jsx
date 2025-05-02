import style from "./CardCertificado.module.css";

const icones = {
  js: "🟨",
  ts: "🟦",
  html: "🟥",
  css: "🟦",
  node: "🟩",
  express: "⬛",
  mysql: "🐬",
  mongodb: "🍃",
  react: "⚛️",
  python: "🐍",
  java: "☕",
};

const CardCertificado = ({ titulo, instrutor, duracao, linguagens }) => {
  return (
    <div className={style.card}>
      <h3>{titulo}</h3>
      <p>{instrutor}</p>
      <span>{duracao}</span>
      <div className={style.icones}>
        {linguagens.map((lang, i) => (
          <span key={i} title={lang}>{icones[lang]}</span>
        ))}
      </div>
    </div>
  );
};

export default CardCertificado;
