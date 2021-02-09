import React from "react";
import { Search } from "./features/search/Search";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Search />
    </div>
  );
}

export default App;
