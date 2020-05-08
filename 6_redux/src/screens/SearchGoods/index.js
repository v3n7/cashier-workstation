import React from "react";

import Header from "shared/components/Header";
import IconButton from "shared/components/buttons/IconButton";
import { CloseIcon } from "shared/icons";

import styles from "./SearchGoods.module.css";
export default class SearchGoods extends React.Component {
  constructor(props) {
    super(props);
    const search = new URLSearchParams(this.props.location.search);
    this.state = {
      value: search.get("value"),
    };
  }

  goBack = (e) => {
    const { history } = this.props;
    history.push("/");
  };

  onSearch = (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push(`/search?value=${this.state.value}`);
  };

  render() {
    return (
      <>
        <Header>
          <div className={styles.headerLeftContainer}>
            <form onSubmit={this.onSearch}>
              <label>
                Поиск
                <input
                  type="text"
                  value={this.state.value}
                  onChange={(e) => this.setState({ value: e.target.value })}
                />
                {/* <button type="submit">Поиск</button> */}
              </label>
            </form>
          </div>
          <div className={styles.headerRightContainer}>
            <IconButton onClick={this.goBack} icon={<CloseIcon />} />
          </div>
        </Header>
        <main className={styles.main}>
          <section className={styles.tableSection}>
            
          </section>
        </main>
      </>
    );
  }
}
