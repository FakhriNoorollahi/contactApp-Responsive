import ContactsHeader from "./components/contactsHeader/ContactsHeader";
import ContactsList from "./components/contactsContent/ContactsList";
import Layout from "./components/Layout/Layout";
import { Toaster } from "react-hot-toast";
import { ContactProvider } from "./context/ContactProvider";

function App() {
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
        <ContactsHeader />
        <ContactsList />
      </Layout>
    </ContactProvider>
  );
}

export default App;
