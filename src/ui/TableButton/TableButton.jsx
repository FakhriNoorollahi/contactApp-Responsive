import React from "react";

function TableButton({ open, onClick, text, children, className }) {
  return (
    <>
      <button onClick={onClick} className={className}>
        {text}
      </button>
      {open && children}
    </>
  );
}

export default TableButton;
