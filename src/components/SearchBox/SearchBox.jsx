import css from "./SearchBox.module.css";
import { useId } from "react";

function SearchBox({ value, onSearch }) {
  const searchId = useId();

  return (
    <div className={css["search-box"]}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        id={searchId}
      />
    </div>
  );
}

export default SearchBox;
