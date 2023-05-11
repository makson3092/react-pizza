import React from "react";
import debounce from "lodash.debounce";

import search from "../../assets/img/search.svg";
import clearSearch from "../../assets/img/btn-remove.svg";
import styles from "./Search.module.scss";
import { AppContext } from "../../App";

const Search = () => {
  const [value, setValue] = React.useState("");
  const { setsearchValue } = React.useContext(AppContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setsearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      console.log("Update_Search_Value");
      setsearchValue(str);
    }, 700),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="Search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Пошук піци ...."
      />
      {value && (
        <img
          onClick={onClickClear}
          className={styles.clearSearch}
          src={clearSearch}
          alt="clearSearch"
        />
      )}
    </div>
  );
};

export default Search;
