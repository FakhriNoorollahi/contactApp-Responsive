import { createContext, useEffect, useReducer, useState } from "react";
import { fetchContact } from "../services/fetchContact";
import axios from "axios";

function contactsReducer(state, { type, payload }) {
  switch (type) {
    case "REPLACE_STATE":
      return payload;
    case "DELETE":
      return state.filter((c) => +c.id !== +payload);
    default:
      return state;
  }
}

export const contactContext = createContext();

export function ContactProvider({ children }) {
  const [search, setSearch] = useState("");
  const { isLoading, data, isError } = fetchContact();
  const [allContacts, dispatch] = useReducer(contactsReducer, []);

  useEffect(() => {
    if (data) {
      dispatch({ type: "REPLACE_STATE", payload: data });
    }
  }, [data]);

  const handleDeleteContact = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/contacts/${id}`
      );

      dispatch({ type: "DELETE", payload: data.id });
    } catch (error) {
      console.log(error);
    }

    // dispatch({ type: "DELETE", payload: id });
    // const newContacts = allContacts.filter((c) => +c.id !== +id);
  };

  const contacts = allContacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      c.email.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <contactContext.Provider
      value={{ contacts, isLoading, search, setSearch, handleDeleteContact }}
    >
      {children}
    </contactContext.Provider>
  );
}
