import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { search, selectSearchQuery, selectSearchResults } from "./searchSlice";
import { playTrack } from "../player/playerSlice";
import { SoundcloudTrack } from "../soundcloud/soundcloudSlice";
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
              <span className={styles.title}>{result.title}</span>
              <button onClick={onClick}>play</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
