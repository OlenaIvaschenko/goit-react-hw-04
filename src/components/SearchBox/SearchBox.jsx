import css from "./SearchBox.module.css";
import { nanoid } from "nanoid";

const SearchBox = ({ inputValue, onChange }) => {
  const searchId = nanoid();

  return (
    <div className={css.filterContacts}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.filterInput}
        value={inputValue}
        onChange={onChange}
        type="text"
        id={searchId}
      />
    </div>
  );
};

export default SearchBox;
