import React, { useContext, useState } from "react";
import Input from "../../ui/Input/Input.jsx";
import { inputsData } from "../../utils/constantData.js";
import styles from "./addNewContacts.module.css";
import { checkEmail, checkName } from "../../utils/validation.js";
import Modal from "../modal/Modal.jsx";
import { contactContext } from "../../context/ContactProvider.jsx";

function AddNewContacts({ userData, open, setOpen, title, text }) {
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

  const { addNewContactHandler } = useContext(contactContext);

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
      const res = checkName(value);
      setErrorName(res);
    }

    setContactData((data) => ({
      ...data,
      [title]: value,
      id: userData?.id || contactData?.id || `${new Date().getTime()}`,
      createdAt:
        userData?.createdAt ||
        contactData?.createdAt ||
        `${new Date().getTime()}`,
    }));
  };

  return (
    <Modal
      open={open}
      onClose={closeModalHandler}
      onConfirm={saveNewContact}
      text={text}
      title={title}
      existFooter={true}
    >
      <div className={styles.inputsContainer}>
        {inputsData.map((item) => (
          <Input
            key={item.id}
            value={contactData[item.title]}
            onChange={handleChangeInput}
            id={item.title}
            title={item.title}
            required={item.required}
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
