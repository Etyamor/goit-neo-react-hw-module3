import { useEffect, useState } from "react";
import css from "./App.module.css";
import initialContactList from "../../contactList.json";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm.jsx";

function App() {
  const [contactList, setContactList] = useState(() => {
    const savedContactList = localStorage.getItem("contactList");
    return savedContactList
      ? JSON.parse(savedContactList)
      : initialContactList;
  });
  const [searchQuery, setSearchQuery] = useState("");

  const addContact = (newContact) => {
    setContactList((prevContactList) => {
      return [...prevContactList, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContactList((prevContactList) => {
      return prevContactList.filter((contact) => contact.id !== contactId);
    });
  }

  const filteredContacts = contactList.filter((contact) => {
    return contact.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  useEffect(() => {
    localStorage.setItem("contactList", JSON.stringify(contactList));
  }, [contactList]);

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={searchQuery} onSearch={setSearchQuery} />
      <ContactList contactList={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
