import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  search,
  selectSearchQuery,
} from "./searchSlice";
import styles from "./Search.module.scss";

export function Search() {
  const dispatch = useDispatch();
  const query = useSelector(selectSearchQuery);

  const onChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(search(event.target.value))
  }, [dispatch])

  return (
    <div className={styles.search}>
      <input
        className={styles.query}
        type="search" 
        placeholder="Search for a track"
        onChange={onChange}
        value={query}
      />
    </div>
  );
}
