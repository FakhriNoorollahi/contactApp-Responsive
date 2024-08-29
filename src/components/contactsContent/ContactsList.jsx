import React from "react";
import styles from "./contactsList.module.css";
import { CiEdit, CiRead, CiTrash } from "react-icons/ci";

function ContactsList({ contacts, search }) {
  const contactsAll = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      c.email.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div>
      <h3>Contact List (3)</h3>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
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
            {contactsAll.map((contact, index) => (
              <ContactItem key={contact.id} contact={contact} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactsList;

function ContactItem({ contact, index }) {
  const { name, email, phone } = contact;
  return (
    <tr>
      <td>{index}</td>
      <td>
        <span></span>
        <span>{name.substring(0, 8)}</span>
      </td>
      <td>{phone ? phone : "➖"}</td>
      <td>{email.substring(0, 8)}</td>
      <td>
        <button>
          <CiRead />
        </button>
      </td>
      <td>
        <div className={styles.buttons}>
          <button>
            <CiTrash />
          </button>
          <button>
            <CiEdit />
          </button>
        </div>
      </td>
    </tr>
  );
}
