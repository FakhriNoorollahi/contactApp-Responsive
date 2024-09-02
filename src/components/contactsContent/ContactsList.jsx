import React, { useState } from "react";
import styles from "./contactsList.module.css";
import SingleContact from "../singleContact/singleContact";
import { checkHeaderTbale } from "../../utils/scrollHeaderTable";
import { tableHeaderTitle } from "../../utils/constantData.js";

function ContactsList({
  contacts,
  handleDeleteContact,
  addNewContactHandler,
  openDelete,
  listDelete,
  SetListDelete,
}) {
  const [headerStyle, setHeaderStyle] = useState({
    boxShadow: "none",
    backgroundColor: "white",
  });

  const handleScroll = (e) => {
    const targetValue = e.target;
    const objectStyle = checkHeaderTbale(targetValue);
    setHeaderStyle(objectStyle);
  };

  return (
    <div>
      <p className={styles.title}>List of Contacts ({contacts.length})</p>
      <div className={styles.tableContainer} onScroll={handleScroll}>
        <table className={styles.table}>
          <thead style={{ ...headerStyle }}>
            <tr>
              {tableHeaderTitle.map((item) => (
                <th key={item.id}>{item.title}</th>
              ))}
            </tr>
          </thead>
          <TableBody contacts={contacts}>
            {contacts.map((contact, index) => (
              <SingleContact
                key={contact.id}
                contact={contact}
                index={index}
                handleDeleteContact={handleDeleteContact}
                addNewContactHandler={addNewContactHandler}
                openAllDelete={openDelete}
                listDelete={listDelete}
                SetListDelete={SetListDelete}
              />
            ))}
          </TableBody>
        </table>
      </div>
    </div>
  );
}

export default ContactsList;

function TableBody({ contacts, children }) {
  return (
    <tbody>
      {!!contacts.length ? (
        children
      ) : (
        <tr style={{ backgroundColor: "white" }}>
          <td colSpan={6} style={{ textAlign: "center", fontSize: "1.2em" }}>
            There is no Contact
          </td>
        </tr>
      )}
    </tbody>
  );
}
