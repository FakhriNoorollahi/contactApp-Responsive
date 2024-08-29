import React, { useState } from "react";
import styles from "./contactsHeader.module.css";
import { CiSearch } from "react-icons/ci";
import AddNewContacts from "../AddNewContacts/AddNewContacts";
import Modal from "../modal/Modal";

function ContactsHeader({ search, setSearch, addNewContactHandler }) {
  const [open, setOpen] = useState(false);

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
          <Modal onClose={() => setOpen(false)}>
            <AddNewContacts
              onClose={() => setOpen(false)}
              addNewContactHandler={addNewContactHandler}
            />
          </Modal>
        )}
        <button className={styles.button}>Group deletion</button>
      </div>
    </div>
  );
}

export default ContactsHeader;
