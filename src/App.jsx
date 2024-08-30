import { useState } from "react";
import ContactsHeader from "./components/contactsHeader/ContactsHeader";
import ContactsList from "./components/contactsContent/ContactsList";
import Layout from "./components/Layout/Layout";

function App() {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );

  const addNewContactHandler = (data) => {
    const { id } = data;
    const find = contacts.filter((c) => +c.id !== +id);
    const newContacts = [...find, data];
    newContacts.sort((a, b) => a.createdAt - b.createdAt);
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
  };

  const handleDeleteContact = (id) => {
    const newContacts = contacts.filter((c) => +c.id !== +id);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
    setContacts(newContacts);
  };

  return (
    <Layout>
      <ContactsHeader
        search={search}
        setSearch={setSearch}
        addNewContactHandler={addNewContactHandler}
      />
      <ContactsList
        contacts={contacts}
        search={search}
        handleDeleteContact={handleDeleteContact}
        addNewContactHandler={addNewContactHandler}
      />
    </Layout>
  );
}

export default App;
