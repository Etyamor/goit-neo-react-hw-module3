import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contactList, onDelete }) {
  return (
    <>
      {!!contactList.length ? (
        <ul className={css["contact-list"]}>
          {contactList.map((contact) => (
            <li key={contact.id}>
              <Contact
                name={contact.name}
                number={contact.number}
                onDelete={() => onDelete(contact.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found</p>
      )}
    </>
  );
}

export default ContactList;
