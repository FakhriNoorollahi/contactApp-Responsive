import { createContext, useEffect, useReducer, useState } from "react";
import {
  addContact,
  deleteContact,
  editeContact,
  getContacts,
} from "../services/httpReq";
import toast from "react-hot-toast";

const INIT_STATE = { isLoading: true, data: [], isError: false };

export const contactContext = createContext();

const contactsReducer = (state, { type, payload }) => {
  switch (type) {
    case "loading":
      return { ...state, isLoading: true };
    case "allContacts":
      return { data: payload, isError: false, isLoading: false };
    case "contacts/delete":
      return { ...state, data: state.data.filter((c) => +c.id !== +payload) };
    case "contacts/add":
      return { ...state, data: [...state.data, payload] };
    case "contacts/edit":
      const contacts = [...state.data].filter((c) => +c.id !== +payload.id);
      const newContacts = [...contacts, payload].sort(
        (a, b) => a.createdAt - b.createdAt
      );
      return { ...state, data: newContacts };
    case "reject":
      return { data: [], isError: true, isLoading: false };
    default:
      throw Error("ERROR");
  }
};

export function ContactProvider({ children }) {
  const [search, setSearch] = useState("");
  // const [allContacts, setAllContacts] = useState([]);
  const [{ isLoading, data: allContacts }, dispatch] = useReducer(
    contactsReducer,
    INIT_STATE
  );
  const [openDelete, setOpenDelete] = useState(false);
  const [listDelete, setListDelete] = useState([]);

  const fetchData = async () => {
    dispatch({ type: "loading" });
    try {
      const res = await getContacts();
      dispatch({ type: "allContacts", payload: res.data });
    } catch (error) {
      dispatch({ type: "reject", payload: "an error occured" });
      toast.error(error.message);
    }
    // setAllContacts(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteContact = async (id) => {
    dispatch({ type: "loading" });
    try {
      await deleteContact(id);
      dispatch({ type: "contacts/delete", payload: id });
    } catch (error) {
      dispatch({ type: "reject", payload: "an error occured" });
      toast.error(error.message);
    }
    fetchData();
  };

  const addNewContactHandler = async (data) => {
    const { id } = data;
    const isExist = allContacts.find((c) => +c.id === +id);

    dispatch({ type: "loading" });
    try {
      if (isExist) {
        await editeContact(id, data);
        dispatch({ type: "contacts/edit", payload: data });
        toast.success("selected character edited successfully");
      } else {
        await addContact(data);
        dispatch({ type: "contacts/add", payload: data });
        toast.success("new charachter added successfully");
      }
    } catch (error) {
      dispatch({ type: "reject", payload: "an error occured" });
      toast.error(error.message);
    }
    fetchData();
  };

  const deleteGroup = async () => {
    const listId = listDelete;

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
        isLoading,
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
