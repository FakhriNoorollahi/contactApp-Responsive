import { useState } from "react";
import ContactsHeader from "./components/contactsHeader/ContactsHeader";
import ContactsList from "./components/contactsContent/ContactsList";
import Layout from "./components/Layout/Layout";
import { getContacts, saveContacts } from "./utils/localStorage";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [search, setSearch] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const [listDelete, SetListDelete] = useState([]);
  const [contacts, setContacts] = useState(getContacts());

  const addNewContactHandler = (data) => {
    const { id } = data;
    const isExist = contacts.find((c) => +c.id === +id);
    const findContacts = contacts.filter((c) => +c.id !== +id);
    const newContacts = [...findContacts, data];
    newContacts.sort((a, b) => a.createdAt - b.createdAt);
    setContacts(newContacts);
    saveContacts(newContacts);
    isExist
      ? JSON.stringify(data) === JSON.stringify(isExist)
        ? ""
        : toast.success("New user edited successfully")
      : toast.success("New user added successfully");
  };

  const handleDeleteContact = (id) => {
    const allContacts = getContacts();
    const newContacts = allContacts.filter((c) => +c.id !== +id);
    saveContacts(newContacts);
    setContacts(newContacts);
  };

  const deleteGroup = () => {
    listDelete.forEach((id) => handleDeleteContact(id));
    SetListDelete([]);
    setOpenDelete(false);
  };

  return (
    <Layout>
      <Toaster />
      <ContactsHeader
        search={search}
        setSearch={setSearch}
        addNewContactHandler={addNewContactHandler}
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        deleteGroup={deleteGroup}
      />
      <ContactsList
        contacts={contacts}
        search={search}
        handleDeleteContact={handleDeleteContact}
        addNewContactHandler={addNewContactHandler}
        openDelete={openDelete}
        listDelete={listDelete}
        SetListDelete={SetListDelete}
      />
    </Layout>
  );
}

export default App;
