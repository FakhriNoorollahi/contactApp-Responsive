import React, { useState } from "react";
import styles from "./contactsList.module.css";
import SingleContact from "../singleContact/singleContact";

function ContactsList({
  contacts,
  search,
  handleDeleteContact,
  addNewContactHandler,
  openDelete,
  handleChecked,
  SetListDelete,
}) {
  const [headerStyle, setHeaderStyle] = useState({
    boxShadow: "none",
    backgroundColor: "white",
  });
  const contactsAll = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      c.email.toLowerCase().includes(search.trim().toLowerCase())
  );

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const scrollRatio = scrollTop / (scrollHeight - clientHeight);

    if (scrollRatio > 0.5) {
      setHeaderStyle({
        boxShadow: "inset 0 0 6px #3874e2",
        backgroundColor: "#f1f1f7",
      });
    } else {
      setHeaderStyle({
        boxShadow: "none",
        backgroundColor: "white",
      });
    }
  };

  return (
    <div>
      <p className={styles.title}>List of Contacts ({contacts.length})</p>
      <div className={styles.tableContainer} onScroll={handleScroll}>
        <table className={styles.table}>
          <thead style={{ ...headerStyle }}>
            <tr>
              <th>#</th>
              <th>First/Last Name</th>
              <th>Phone number</th>
              <th>Address e-mail</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {!!contactsAll.length ? (
              contactsAll.map((contact, index) => (
                <SingleContact
                  key={contact.id}
                  contact={contact}
                  index={index}
                  handleDeleteContact={handleDeleteContact}
                  addNewContactHandler={addNewContactHandler}
                  openAllDelete={openDelete}
                  handleChecked={handleChecked}
                  SetListDelete={SetListDelete}
                />
              ))
            ) : (
              <tr style={{ backgroundColor: "white" }}>
                <td
                  colSpan={6}
                  style={{ textAlign: "center", fontSize: "1.2em" }}
                >
                  There is no Contact
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactsList;
