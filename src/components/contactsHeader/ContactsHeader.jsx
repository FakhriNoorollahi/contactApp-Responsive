import React from "react";
import styles from "./contactsHeader.module.css";
import { CiSearch } from "react-icons/ci";

function ContactsHeader({ search, setSearch, addHandler, deleteHandler }) {
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
        <button onClick={addHandler}>Add New</button>
        <button onClick={deleteHandler}>Group deletion</button>
      </div>
    </div>
  );
}

export default ContactsHeader;
