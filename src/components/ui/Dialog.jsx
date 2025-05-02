import React from "react";

const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.close}>Fechar</button>
        {children}
      </div>
    </div>
  );
};

const DialogTrigger = ({ children, onClick }) => {
  return <div onClick={onClick}>{children}</div>;
};

const DialogContent = ({ children }) => {
  return <div style={styles.content}>{children}</div>;
};

const styles = {
  overlay: {
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
    alignItems: "center", justifyContent: "center",
  },
  modal: {
    backgroundColor: "#fff", padding: 20, borderRadius: 8,
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  },
  close: {
    position: "absolute", top: 10, right: 10, background: "red", color: "#fff", border: "none", padding: "5px 10px"
  },
  content: {
    padding: "20px",
  }
};

export { Dialog, DialogTrigger, DialogContent };
