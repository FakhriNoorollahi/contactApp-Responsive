import React, { useState } from "react";
import styles from "./contactsHeader.module.css";
import { CiSearch } from "react-icons/ci";
import AddNewContacts from "../AddNewContacts/AddNewContacts";

function ContactsHeader({
  search,
  setSearch,
  addNewContactHandler,
  userData = null,
}) {
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
