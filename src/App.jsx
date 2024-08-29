import { useState } from "react";
import ContactsHeader from "./components/contactsHeader/ContactsHeader";
import ContactsList from "./components/contactsContent/ContactsList";

function App() {
  const [search, setSearch] = useState("");

  const addHandler = (e) => {
    console.log(e.target);
  };

  const deleteHandler = (e) => {
    console.log(e.target);
  };

  return (
    <div className="container">
      <h1>Contacts App</h1>
      <div className="contacts-box">
        <div className="contacts-container">
          <ContactsHeader
            search={search}
            setSearch={setSearch}
            addHandler={addHandler}
            deleteHandler={deleteHandler}
          />
          <ContactsList />
        </div>
      </div>
    </div>
  );
}

export default App;
