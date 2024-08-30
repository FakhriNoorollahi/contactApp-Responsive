import React from "react";
import styles from "./input.module.css";

function Input({ value, onChange, title, id, required, error, type }) {
  // console.log(error);
  const opacity = error?.isTrue ? 1 : 0;

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputDiv}>
        <div className={styles.label}>
          <label htmlFor={id}>{title}</label>
          {required && <span className={styles.starSpan}>*</span>}
        </div>
        <input type="text" id={id} value={value} onChange={onChange} />
      </div>
      <p className={styles.error} style={{ opacity }}>
        {error?.message}
      </p>
    </div>
  );
}

export default Input;
