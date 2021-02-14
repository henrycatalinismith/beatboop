import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { search, selectSearchQuery, selectSearchResults } from "./searchSlice";
import { playTrack } from "../player/playerSlice";
import { Artwork } from "../../components/Artwork";
import { Metadata } from "../../components/Metadata";
import styles from "./Search.module.scss";

export function Search() {
  const dispatch = useDispatch();
  const query = useSelector(selectSearchQuery);
  const results = useSelector(selectSearchResults);

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(search(event.target.value));
    },
    [dispatch]
  );

  return (
    <div className={styles.search}>
      <input
        className={styles.query}
        type="search"
        placeholder="Search for a track"
        onChange={onChange}
        value={query}
      />

      <ol className={styles.results}>
        {results.map((result) => {
          const onClick = () => {
            dispatch(playTrack(result));
          };
          return (
            <li className={styles.result} key={result.id}>
              <button className={styles.button} onClick={onClick}>
                <Artwork track={result} feature="Search" />
                <Metadata track={result} feature="Search" />
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
