import React from "react";
import Modal from "../modal/Modal";

function SingleDeleteContact({ open, onClose, onConfirm, name }) {
  return (
    <Modal
      onClose={onClose}
      open={open}
      onConfirm={onConfirm}
      text="Delete"
      title={`Delete information ${name}`}
      existFooter={true}
    >
      <p style={{ fontSize: "1.1em" }}>
        Are you sure you want to delete this user?
      </p>
    </Modal>
  );
}

export default SingleDeleteContact;
