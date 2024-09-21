import React, { useContext, useState } from "react";
import styles from "./contactsList.module.css";
import SingleContact from "../singleContact/singleContact";
import { checkHeaderTbale } from "../../utils/scrollHeaderTable";
import { tableHeaderTitle } from "../../utils/constantData.js";
import { contactContext } from "../../context/ContactProvider.jsx";
import Loader from "../../ui/Loader/Loader.jsx";

function ContactsList({}) {
  const { contacts, isLoading } = useContext(contactContext);
  const [headerStyle, setHeaderStyle] = useState({
    boxShadow: "none",
    backgroundColor: "white",
  });

  const handleScroll = (e) => {
    const targetValue = e.target;
    const objectStyle = checkHeaderTbale(targetValue);
    setHeaderStyle(objectStyle);
  };

  return (
    <div>
      <p className={styles.title}>List of Contacts ({contacts.length})</p>
      <div className={styles.tableContainer} onScroll={handleScroll}>
        <table className={styles.table}>
          <TableHeader headerStyle={headerStyle} />
          <TableBody contacts={contacts} isLoading={isLoading}>
            {contacts.map((contact, index) => (
              <SingleContact key={contact.id} contact={contact} index={index} />
            ))}
          </TableBody>
        </table>
      </div>
    </div>
  );
}

export default ContactsList;

function TableHeader({ headerStyle }) {
  return (
    <thead style={{ ...headerStyle }}>
      <tr>
        {tableHeaderTitle.map((item) => (
          <th key={item.id}>{item.title}</th>
        ))}
      </tr>
    </thead>
  );
}

function TableBody({ contacts, isLoading, children }) {
  return (
    <tbody>
      {isLoading ? (
        <TableRowWithoutContact>
          <Loader style={{ margin: "0 auto" }} />
        </TableRowWithoutContact>
      ) : !!contacts.length ? (
        children
      ) : (
        <TableRowWithoutContact>There is no Contact</TableRowWithoutContact>
      )}
    </tbody>
  );
}

function TableRowWithoutContact({ children }) {
  return (
    <tr
      className={styles.rowWithoutContact}
      style={{ backgroundColor: "white" }}
    >
      <td colSpan={6}>{children}</td>
    </tr>
  );
}
