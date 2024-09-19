import { useState } from "react";
import ContactsHeader from "./components/contactsHeader/ContactsHeader";
import ContactsList from "./components/contactsContent/ContactsList";
import Layout from "./components/Layout/Layout";
import { getContacts, saveContacts } from "./utils/localStorage";
import toast, { Toaster } from "react-hot-toast";
import { ContactProvider } from "./context/ContactProvider";

function App() {
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



  const deleteGroup = () => {
    const listId = listDelete;

    if (!listId.length) {
      ("");
    } else {
      listDelete.forEach((id) => handleDeleteContact(id));
      SetListDelete([]);
      toast.success("selected characters deleted successfully");
    }
    setOpenDelete(false);
  };

  return (
    <ContactProvider>
      <Layout>
        <Toaster
          toastOptions={{
            className: "",
            style: {
              border: "2px solid #3874e2",
            },
          }}
        />
        <ContactsHeader
          addNewContactHandler={addNewContactHandler}
          openDelete={openDelete}
          setOpenDelete={setOpenDelete}
          deleteGroup={deleteGroup}
        />
        <ContactsList
          // contacts={allContacts}
          // handleDeleteContact={handleDeleteContact}
          addNewContactHandler={addNewContactHandler}
          openDelete={openDelete}
          listDelete={listDelete}
          SetListDelete={SetListDelete}
        />
      </Layout>
    </ContactProvider>
  );
}

export default App;
