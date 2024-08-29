import React from "react";
import Modal from "../modal/Modal";
import AddNewContacts from "../AddNewContacts/AddNewContacts";

function EditModal({ contact, addNewContactHandler, onClose }) {
  return (
    <Modal onClose={onClose}>
      <AddNewContacts
        userData={contact}
        addNewContactHandler={addNewContactHandler}
        onClose={onClose}
      />
    </Modal>
  );
}

export default EditModal;
