import React from "react";
import styles from "./modal.module.css";
import { HiMiniXMark } from "react-icons/hi2";

function Modal({
  children,
  onClose,
  title,
  onConfirm = null,
  text = null,
  open = false,
}) {
  const opacity = open ? "1" : "0";
  const pointerEvents = open ? "auto" : "none";

  return (
    <div className={styles.bakdrop}>
      <div className={styles.modal} style={{ opacity, pointerEvents }}>
        <div className={styles.modalHeader}>
          <p>{title}</p>
          <button onClick={onClose}>
            <HiMiniXMark />
          </button>
        </div>
        <div className={styles.modalContent}>{children}</div>
        {text && (
          <div className={styles.modalFooter}>
            <button className={styles.confirm} onClick={onConfirm}>
              {text}
            </button>
            <button className={styles.delete} onClick={onClose}>
              Cancle
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
