import React from "react";
import styles from "./input.module.css";

function Input({ value, onChange, title, id, required, error }) {
  const opacity = error?.isTrue ? 1 : 0;

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputDiv}>
        <label htmlFor={id} className={styles.label}>
          <span>{title}</span>
          {required && <span className={styles.starSpan}>*</span>}
        </label>
        <input
          type={title === "email" ? "email" : "text"}
          id={id}
          value={value}
          onChange={onChange}
        />
      </div>
      <p className={styles.error} style={{ opacity }}>
        {error?.message}
      </p>
    </div>
  );
}

export default Input;
