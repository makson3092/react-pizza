import React from "react";
import search from "../../assets/img/search.svg";
import clearSearch from "../../assets/img/btn-remove.svg";
import styles from "./Search.module.scss";
import { AppContext } from "../../App";

const Search = () => {
  const { searchValue, setsearchValue } = React.useContext(AppContext);

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="Search" />
      <input
        value={searchValue}
        onChange={(event) => setsearchValue(event.target.value)}
        className={styles.input}
        placeholder="Пошук піци ...."
      />
      {searchValue && (
        <img
          onClick={() => setsearchValue("")}
          className={styles.clearSearch}
          src={clearSearch}
          alt="clearSearch"
        />
      )}
    </div>
  );
};

export default Search;
