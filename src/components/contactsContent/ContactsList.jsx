import React, { useState } from "react";
import styles from "./contactsList.module.css";
import AddNewContacts from "../AddNewContacts/AddNewContacts";
import Modal from "../modal/Modal";
import ContactDetail from "../ContactDetail/ContactDetail";
import {
  HiOutlineDocumentCheck,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";

function ContactsList({
  contacts,
  search,
  handleDeleteContact,
  addNewContactHandler,
  delGroup,
  handleChecked,
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
                <ContactItem
                  key={contact.id}
                  contact={contact}
                  index={index}
                  handleDeleteContact={handleDeleteContact}
                  addNewContactHandler={addNewContactHandler}
                  delGroup={delGroup}
                  handleChecked={handleChecked}
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

function ContactItem({
  contact,
  index,
  handleDeleteContact,
  addNewContactHandler,
}) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  const { name, email, phone, id } = contact;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {name.substring(0, 10)}
        {name.length > 10 ? "..." : ""}
      </td>
      <td>{phone ? phone : "➖"}</td>
      <td>
        {email.substring(0, 12)}
        {email.length > 12 ? "..." : ""}
      </td>
      <td>
        <button
          onClick={() => setOpenDetail(true)}
          className={styles.buttonItem}
        >
          <HiOutlineDocumentCheck />
        </button>
        {openDetail && (
          <ContactDetail
            title={`Detail contact ${name}`}
            open={openDetail}
            onClose={() => setOpenDetail(false)}
            contact={contact}
          />
        )}
      </td>
      <td>
        <div className={styles.buttons}>
          <button
            className={styles.buttonItem}
            onClick={() => setOpenDelete(true)}
          >
            <HiOutlineTrash />
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
              <p style={{ fontSize: "1.1em" }}>
                Are you sure you want to delete this user?
              </p>
            </Modal>
          )}
          <button
            className={styles.buttonItem}
            onClick={() => setOpenEdit(true)}
          >
            <HiOutlinePencilSquare />
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
