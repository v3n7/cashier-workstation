import React from "react";

import styles from "./SearchInput.module.css";

export default function SearchInput() {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} />
    </div>
  );
}
