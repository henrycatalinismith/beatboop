import React from "react";
import { Player } from "./features/player/Player";
import { Search } from "./features/search/Search";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Search />
      <Player />
    </div>
  );
}

export default App;
