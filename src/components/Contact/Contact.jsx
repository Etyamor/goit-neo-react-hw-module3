import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

function Contact({ name, number, onDelete }) {
  return (
    <div className={css.contact}>
      <div>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <FaPhoneAlt /> {number}
        </p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Contact;
