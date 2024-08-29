import React, { useState } from "react";
import Input from "../../ui/Input";
import inputs from "../constans/inputData";
import styles from "./addNewContacts.module.css";

function AddNewContacts({ addNewContactHandler, onClose }) {
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    job: "",
    id: "",
  });

  const [isError, setIsError] = useState({
    name: false,
    email: false,
  });

  const handleChangeInput = (e) => {
    const title = e.target.id;
    const value = e.target.value;
    setContactData((data) => ({
      ...data,
      [title]: value,
      id: new Date().getTime(),
    }));
  };

  const saveNewContact = () => {
    const { name, email } = contactData;
    if (!name && !email) {
      setIsError({
        name: true,
        email: true,
      });
      return;
    } else if (!name) {
      setIsError({
        ...isError,
        name: true,
      });
      return;
    } else if (!email) {
      setIsError({
        ...isError,
        email: true,
      });
      return;
    }

    addNewContactHandler(contactData);
    setIsError({
      name: false,
      email: false,
    });
    setContactData({
      name: "",
      phone: "",
      email: "",
      address: "",
      job: "",
    });
    onClose();
  };

  return (
    <div>
      {inputs.map((item) => (
        <Input
          key={item.title}
          value={contactData[item.title]}
          onChange={handleChangeInput}
          id={item.title}
          title={item.title}
          required={item.required}
          type="text"
          isError={isError[item.title]}
        />
      ))}
      <div className={styles.modalBtns}>
        <button onClick={saveNewContact}>Add Contact</button>
        <button onClick={onClose}>Cancle</button>
      </div>
    </div>
  );
}

export default AddNewContacts;
