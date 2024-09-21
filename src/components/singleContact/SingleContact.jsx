import React, { useContext, useState } from "react";
import AddNewContacts from "../AddNewContacts/AddNewContacts";
import ContactDetail from "../ContactDetail/ContactDetail";
import {
  HiOutlineDocumentCheck,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";
import styles from "../contactsContent/contactsList.module.css";
import toast from "react-hot-toast";
import SingleDeleteContact from "../SingleDeleteContact/SingleDeleteContact";
import Button from "../../ui/Button/Button";
import { contactContext } from "../../context/ContactProvider";

function SingleContact({ contact, index }) {
  const [checked, setChecked] = useState(false);
  const { name, email, phone, id } = contact;
  const {
    handleDeleteContact,
    setListDelete,
    listDelete,
    openDelete: openAllDelete,
  } = useContext(contactContext);

  const handleChecked = (id) => {
    setChecked((check) => !check);

    if (!checked) {
      setListDelete((items) => [...items, id]);
    } else {
      setListDelete(listDelete.filter((item) => +item.id === +id));
    }
  };

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
        <DetailButton contact={contact} />
      </td>
      <td>
        {openAllDelete ? (
          <input
            type="checkbox"
            className={styles.checkboxInput}
            value={checked}
            onChange={() => handleChecked(id)}
          />
        ) : (
          <div className={styles.buttons}>
            <SingleDeleteButton
              id={id}
              name={name}
              handleDeleteContact={handleDeleteContact}
            />
            <EditeButton contact={contact} />
          </div>
        )}
      </td>
    </tr>
  );
}

export default SingleContact;

function DetailButton({ contact }) {
  const [openDetail, setOpenDetail] = useState(false);
  return (
    <Button
      className={styles.buttonItem}
      onClick={() => setOpenDetail(true)}
      open={openDetail}
      text={<HiOutlineDocumentCheck />}
    >
      <ContactDetail
        open={openDetail}
        onClose={() => setOpenDetail(false)}
        contact={contact}
      />
    </Button>
  );
}

function SingleDeleteButton({ name, id, handleDeleteContact }) {
  const [openDelete, setOpenDelete] = useState(false);
  return (
    <Button
      className={styles.buttonItem}
      open={openDelete}
      onClick={() => setOpenDelete(true)}
      text={<HiOutlineTrash />}
    >
      <SingleDeleteContact
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={() => {
          handleDeleteContact(id);
          () => setOpenDelete(false);
          toast.success("user deleted successfully");
        }}
        name={name}
      />
    </Button>
  );
}

function EditeButton({ contact }) {
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <Button
      className={styles.buttonItem}
      open={openEdit}
      onClick={() => setOpenEdit(true)}
      text={<HiOutlinePencilSquare />}
    >
      <AddNewContacts
        userData={contact}
        open={openEdit}
        setOpen={setOpenEdit}
        text="Edit"
        title={`Edite information ${contact.name}`}
      />
    </Button>
  );
}
