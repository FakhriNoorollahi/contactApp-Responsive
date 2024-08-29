import React from "react";
import Modal from "../modal/Modal";

function DeleteModal({ onClose, id, handleDeleteContact }) {
  return (
    <Modal onClose={onClose}>
      Do you want to remove this contact?
      <div>
        <button
          onClick={() => {
            handleDeleteContact(id);
            onClose();
          }}
        >
          yse
        </button>
        <button style={{ marginLeft: "20px" }} onClick={onClose}>
          no
        </button>
      </div>
    </Modal>
  );
}

export default DeleteModal;
