import React, { useState } from "react";
import AddNewContacts from "../AddNewContacts/AddNewContacts";
import Modal from "../modal/Modal";
import ContactDetail from "../ContactDetail/ContactDetail";
import {
  HiOutlineDocumentCheck,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";
import styles from "../contactsContent/contactsList.module.css";
import toast from "react-hot-toast";

function SingleContact({
  contact,
  index,
  handleDeleteContact,
  addNewContactHandler,
  SetListDelete,
  openAllDelete,
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
        {openAllDelete ? (
          <input
            type="checkbox"
            className={styles.checkboxInput}
            onChange={() => SetListDelete((items) => [...items, id])}
          />
        ) : (
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
                  toast.success("user deleted successfully");
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
        )}
      </td>
    </tr>
  );
}

export default SingleContact;
