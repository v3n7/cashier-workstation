import React from "react";
import { onSearch } from '../../../screens/SearchGoods/index.js';

import styles from "./SearchInput.module.css";

export default function SearchInput() {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} onInput={onChangeText} />
    </div>
  );
}

function onChangeText() {
  const input = document.getElementsByClassName(styles.input);
  if (input.length > 0) {
    onSearch(input[0].value);
  }
}
