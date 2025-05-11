import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ filteredContacts, removeContact }) => {
  return (
    <ul className={css.cards}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} removeContact={removeContact}/>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
