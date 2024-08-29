import React from "react";
import styles from "./modal.module.css";
import { HiMiniXMark } from "react-icons/hi2";

function Modal({ children, onClose }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalHeader}>
        <h3>title</h3>
        <button onClick={onClose}>
          <HiMiniXMark />
        </button>
      </div>
      {children}
    </div>
  );
}

export default Modal;
