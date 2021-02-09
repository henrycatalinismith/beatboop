import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
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
