import { React, useState, useEffect } from "react";
import "../components/App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { nanoid } from "nanoid";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const [contacts, setContacts] = useState(() => {
    const dataFromLS = localStorage.getItem("savedData");
    if (dataFromLS !== null) {
      return JSON.parse(dataFromLS);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  useEffect(() => {
    localStorage.setItem("savedData", JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const searchedName = (inputValue) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const addNewContact = ({ name, number }) => {
    const id = nanoid();

    setContacts([...contacts, { name, number, id }]);
  };

  const removeContact = (id) => {
    const withoutContact = contacts.filter((contact) => contact.id !== id);
    setContacts(withoutContact);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />
      <SearchBox inputValue={inputValue} onChange={handleChange} />
      <ContactList
        filteredContacts={searchedName(inputValue)}
        removeContact={removeContact}
      />
    </div>
  );
};

export default App;
