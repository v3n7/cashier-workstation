import React, { Component } from "react";

import styles from "./SearchInput.module.css";

export default class SearchInput extends Component {
  onChange = (e) => {
    const { history } = this.props;

    history.push("/search");
  }
  
  render() {
    return (
      <div className={styles.container}>
        <input type="text" className={styles.input} onChange={ this.onChange }/>
      </div>
    );
  }
}
