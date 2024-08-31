import React, { useState } from "react";
import Input from "../../ui/Input";
import inputs from "../constans/inputData";
import styles from "./addNewContacts.module.css";
import { checkEmailAndName } from "../../utils/validation.js";
import Modal from "../modal/Modal.jsx";

function AddNewContacts({
  addNewContactHandler,
  userData,
  open,
  setOpen,
  text,
  title,
}) {
  const [contactData, setContactData] = useState(
    userData || {
      name: "",
      phone: "",
      email: "",
      address: "",
      job: "",
      id: "",
    }
  );
  const [error, setError] = useState({
    name: { isTrue: false, message: "" },
    email: { isTrue: false, message: "" },
  });

  const saveNewContact = () => {
    const { name, email } = contactData;
    const objInput = checkEmailAndName(name, email);
    setError(objInput);

    if (objInput.name.isTrue || objInput.email.isTrue) {
      return;
    }

    addNewContactHandler(contactData);
    setError({
      name: false,
      email: false,
    });

    closeModalHandler();
  };

  function closeModalHandler() {
    setContactData({
      name: "",
      phone: "",
      email: "",
      address: "",
      job: "",
    });
    setError({
      name: { isTrue: false, message: "" },
      email: { isTrue: false, message: "" },
    });
    setOpen(false);
  }

  const handleChangeInput = (e) => {
    const { name, email } = contactData;
    const objInput = checkEmailAndName(name, email);
    setError(objInput);

    const title = e.target.id;
    const value = e.target.value;
    setContactData((data) => ({
      ...data,
      [title]: value,
      id: userData?.id || new Date().getTime(),
      createdAt: userData?.createdAt || new Date().getTime(),
    }));
  };

  return (
    <Modal
      open={open}
      onClose={closeModalHandler}
      onConfirm={saveNewContact}
      text={text}
      title={title}
    >
      <div className={styles.inputsContainer}>
        {inputs.map((item) => (
          <Input
            key={item.title}
            value={contactData[item.title]}
            onChange={handleChangeInput}
            id={item.title}
            title={item.title}
            required={item.required}
            type="text"
            error={error[item.title]}
          />
        ))}
      </div>
    </Modal>
  );
}

export default AddNewContacts;
