import { useState } from "react";
import ContactsHeader from "./components/contactsHeader/ContactsHeader";
import ContactsList from "./components/contactsContent/ContactsList";

function App() {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );

  const deleteHandler = (e) => {
    console.log(e.target);
  };

  const addNewContactHandler = (data) => {
    const newContacts = [...contacts, data];
    console.log(newContacts);

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
            deleteHandler={deleteHandler}
            addNewContactHandler={addNewContactHandler}
          />
          <ContactsList contacts={contacts} search={search} />
        </div>
      </div>
    </div>
  );
}

export default App;
