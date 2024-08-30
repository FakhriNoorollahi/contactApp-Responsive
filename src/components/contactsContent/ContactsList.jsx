import React, { useState } from "react";
import styles from "./contactsList.module.css";
import { CiEdit, CiRead, CiTrash } from "react-icons/ci";
import AddNewContacts from "../AddNewContacts/AddNewContacts";
import Modal from "../modal/Modal";

function ContactsList({
  contacts,
  search,
  handleDeleteContact,
  addNewContactHandler,
  delGroup,
  handleChecked,
}) {
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
              <ContactItem
                key={contact.id}
                contact={contact}
                index={index}
                handleDeleteContact={handleDeleteContact}
                addNewContactHandler={addNewContactHandler}
                delGroup={delGroup}
                handleChecked={handleChecked}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactsList;

function ContactItem({
  contact,
  index,
  handleDeleteContact,
  addNewContactHandler,
}) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const { name, email, phone, id } = contact;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <span></span>
        <span>{name.substring(0, 8)}</span>
      </td>
      <td>{phone ? phone : "➖"}</td>
      <td>{email.substring(0, 8)}</td>
      <td>
        <button className={styles.buttonItem}>
          <CiRead />
        </button>
      </td>
      <td>
        <div className={styles.buttons}>
          <button
            className={styles.buttonItem}
            onClick={() => setOpenDelete(true)}
          >
            <CiTrash />
          </button>
          {openDelete && (
            <Modal
              onClose={() => setOpenDelete(false)}
              open={openDelete}
              onConfirm={() => {
                handleDeleteContact(id);
                () => setOpenDelete(false);
              }}
              text="Delete"
              title={`Delete contact ${name}`}
            >
              Do you want to remove this contact?
            </Modal>
          )}
          <button
            className={styles.buttonItem}
            onClick={() => setOpenEdit(true)}
          >
            <CiEdit />
          </button>
          {openEdit && (
            <AddNewContacts
              userData={contact}
              addNewContactHandler={addNewContactHandler}
              onClose={() => setOpenEdit(false)}
              text="Edit"
              open={openEdit}
              setOpen={setOpenEdit}
              title={`Edite contact ${name}`}
            />
          )}
        </div>
      </td>
    </tr>
  );
}
