import React, { useState } from "react";
import styles from "./contactsHeader.module.css";
import { CiSearch } from "react-icons/ci";
import AddNewContacts from "../AddNewContacts/AddNewContacts";
import TableButton from "../../ui/TableButton/TableButton";

function ContactsHeader({
  search,
  setSearch,
  addNewContactHandler,
  openDelete,
  setOpenDelete,
  deleteGroup,
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
        <TableButton
          className={styles.button}
          open={open}
          onClick={() => setOpen(true)}
          text="Add Contact"
        >
          <AddNewContacts
            addNewContactHandler={addNewContactHandler}
            userData={null}
            setOpen={setOpen}
            open={open}
            text="Add Contacts"
            title="Add New Contact"
          />
        </TableButton>
        <TableButton
          className={styles.button}
          open={false}
          text={openDelete ? "Delete All" : "Group deletion"}
          onClick={openDelete ? () => deleteGroup() : () => setOpenDelete(true)}
        />
      </div>
    </div>
  );
}

export default ContactsHeader;
