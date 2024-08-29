import { useState } from "react";
import ContactsHeader from "./components/contactsHeader/ContactsHeader";
import ContactsList from "./components/contactsContent/ContactsList";

function App() {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );

  const handleDeleteContact = (id) => {
    const newContacts = contacts.filter((c) => +c.id !== +id);

    localStorage.setItem("contacts", JSON.stringify(newContacts));
    setContacts(newContacts);
  };

  const addNewContactHandler = (data) => {
    console.log(data.createdAt, data.name);

    const { id } = data;
    const find = contacts.filter((c) => +c.id !== +id);
    const newContacts = [...find, data];
    newContacts.sort((a, b) => a.createdAt - b.createdAt);
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
  };

  return (
    <div className="container">
      <h1>Contacts App</h1>
      <div className="contacts-box">
        <div className="contacts-container">
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
        </div>
      </div>
    </div>
  );
}

export default App;
