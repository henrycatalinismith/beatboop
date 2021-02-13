import React from "react";
import { Player } from "./features/player/Player";
import { Search } from "./features/search/Search";
import styles from "./App.module.scss";

export type Features = "Player" | "Search"

function App() {
  return (
    <div className={styles.App}>
      <Player />
      <Search />
    </div>
  );
}

export default App;
