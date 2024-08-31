import React, { useState } from "react";
import Input from "../../ui/Input";
import inputs from "../constans/inputData";
import styles from "./addNewContacts.module.css";
import { checkEmail, checkName } from "../../utils/validation.js";
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
  console.log(contactData);

  const [errorName, setErrorName] = useState({ isTrue: false, message: "" });
  const [errorEmail, setErrorEmail] = useState({ isTrue: false, message: "" });

  const saveNewContact = () => {
    const { name, email } = contactData;

    const resEmail = checkEmail(email);
    setErrorEmail(resEmail);
    const resName = checkName(name);
    setErrorName(resName);

    if (resEmail.isTrue || resName.isTrue) {
      return;
    }

    addNewContactHandler(contactData);

    setErrorEmail({ isTrue: false, message: "" });
    setErrorName({ isTrue: false, message: "" });

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
    setErrorEmail({ isTrue: false, message: "" });
    setErrorName({ isTrue: false, message: "" });
    setOpen(false);
  }

  const handleChangeInput = (e) => {
    const title = e.target.id;
    const value = e.target.value;

    if (title === "email") {
      const res = checkEmail(value);
      setErrorEmail(res);
    } else if (title === "name") {
      console.log(title);

      const res = checkName(value);
      setErrorName(res);
    }

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
            error={
              item.title === "name"
                ? errorName
                : item.title === "email"
                ? errorEmail
                : null
            }
          />
        ))}
      </div>
    </Modal>
  );
}

export default AddNewContacts;
