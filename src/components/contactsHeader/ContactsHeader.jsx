import React, { useContext, useState } from "react";
import styles from "./contactsHeader.module.css";
import { CiSearch } from "react-icons/ci";
import AddNewContacts from "../AddNewContacts/AddNewContacts";
import Button from "../../ui/Button/Button";
import { contactContext } from "../../context/ContactProvider";

function ContactsHeader() {
  const { openDelete, setOpenDelete, deleteGroup, search, setSearch } =
    useContext(contactContext);

  return (
    <div className={styles.header}>
      <SearchInput search={search} setSearch={setSearch} />
      <HeaderButtons
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        deleteGroup={deleteGroup}
      />
    </div>
  );
}

export default ContactsHeader;

function SearchInput({ search, setSearch }) {
  return (
    <div className={styles.search}>
      <CiSearch className={styles.searchIcon} />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="John Doe/john.doe@gmai.com"
      />
    </div>
  );
}

function HeaderButtons({ openDelete, setOpenDelete, deleteGroup }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.buttons}>
      <Button
        className={styles.button}
        open={open}
        onClick={() => setOpen(true)}
        text="Add Contact"
      >
        <AddNewContacts
          userData={null}
          setOpen={setOpen}
          open={open}
          text="Add Contacts"
          title="Add New Contact"
        />
      </Button>
      <Button
        className={styles.button}
        open={false}
        text={openDelete ? "Delete All" : "Group deletion"}
        onClick={openDelete ? () => deleteGroup() : () => setOpenDelete(true)}
      />
    </div>
  );
}
