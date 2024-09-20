import { createContext, useEffect, useState } from "react";
import {
  addContact,
  deleteContact,
  editeContact,
  getContacts,
} from "../services/httpReq";
import toast from "react-hot-toast";

export const contactContext = createContext();

export function ContactProvider({ children }) {
  const [search, setSearch] = useState("");
  const [allContacts, setAllContacts] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);
  const [listDelete, setListDelete] = useState([]);

  const fetchData = async () => {
    const res = await getContacts();
    setAllContacts(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteContact = async (id) => {
    await deleteContact(id);
    fetchData();
  };

  const addNewContactHandler = async (data) => {
    const { id } = data;
    const isExist = allContacts.find((c) => +c.id === +id);
    if (isExist) {
      await editeContact(id, data);
    } else {
      await addContact(data);
    }
    fetchData();
  };

  const deleteGroup = async () => {
    const listId = listDelete;
    console.log(listId);

    if (!listId.length) {
      ("");
    } else {
      listDelete.forEach((id) => handleDeleteContact(id));
      setListDelete([]);
      fetchData();
      toast.success("selected characters deleted successfully");
    }
    setOpenDelete(false);
  };

  const contacts = allContacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      c.email.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <contactContext.Provider
      value={{
        contacts,
        search,
        setSearch,
        handleDeleteContact,
        addNewContactHandler,
        openDelete,
        setOpenDelete,
        deleteGroup,
        listDelete,
        setListDelete,
      }}
    >
      {children}
    </contactContext.Provider>
  );
}
