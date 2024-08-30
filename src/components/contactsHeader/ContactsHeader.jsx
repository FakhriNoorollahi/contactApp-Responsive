import React, { useState } from "react";
import styles from "./contactsHeader.module.css";
import { CiSearch } from "react-icons/ci";
import AddNewContacts from "../AddNewContacts/AddNewContacts";
import Modal from "../modal/Modal";
import { checkEmailAndName } from "../../utils/validation";

function ContactsHeader({
  search,
  setSearch,
  addNewContactHandler,
  userData = null,
}) {
  const [open, setOpen] = useState(false);
  // const [contactData, setContactData] = useState(
  //   userData || {
  //     name: "",
  //     phone: "",
  //     email: "",
  //     address: "",
  //     job: "",
  //     id: "",
  //   }
  // );
  // const [error, setError] = useState({
  //   name: { isTrue: false, message: "" },
  //   email: { isTrue: false, message: "" },
  // });

  // const saveNewContact = () => {
  //   const { name, email } = contactData;
  //   const objInput = checkEmailAndName(name, email);
  //   setError(objInput);

  //   if (objInput.name.isTrue || objInput.email.isTrue) {
  //     return;
  //   }

  //   addNewContactHandler(contactData);
  //   setError({
  //     name: false,
  //     email: false,
  //   });
  //   closeModalHandler();
  // };

  // function closeModalHandler() {
  //   setContactData({
  //     name: "",
  //     phone: "",
  //     email: "",
  //     address: "",
  //     job: "",
  //   });
  //   setError({
  //     name: { isTrue: false, message: "" },
  //     email: { isTrue: false, message: "" },
  //   });
  //   setOpen(false);
  // }

  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <CiSearch className={styles.searchIcon} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="John Doe/john.doe@gmai.com"
        />
      </div>
      <div className={styles.buttons}>
        <button onClick={() => setOpen(true)} className={styles.button}>
          Add New
        </button>
        {open && (
          <AddNewContacts
            addNewContactHandler={addNewContactHandler}
            userData={userData}
            setOpen={setOpen}
            open={open}
            text="Add Contacts"
            title="Add New Contact"
          />
        )}
        <button className={styles.button}>Group deletion</button>
      </div>
    </div>
  );
}

export default ContactsHeader;
