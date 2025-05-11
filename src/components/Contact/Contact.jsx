import css from "./contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const Contact = ({ contact:{id, name, number}, removeContact}) => {


  return (
    <div className={css.all}>
      <div className={css.info}>
        <div className={css.person}>
          <IoPerson />
          <p className={css.p}>{name}</p>
        </div>
        <div className={css.phoneNumber}>
          <FaPhoneAlt />
          <p className={css.p}> {number}</p>
        </div>
      </div>
      <button onClick={()=>removeContact(id)}>Delete</button>
    </div>
  );
};
export default Contact;
