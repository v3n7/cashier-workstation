import React from "react";

import { connect } from "react-redux";

import Header from "shared/components/Header";
import IconButton from "shared/components/buttons/IconButton";
import { CloseIcon } from "shared/icons";

import { getDataAction } from "../../redux/reducers/goods";

import styles from "./SearchGoods.module.css";

class SearchGoods extends React.Component {
  constructor(props) {
    super(props);
    const search = new URLSearchParams(this.props.location.search);
    this.state = {
      value: search.get("value"),
      data: [],
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

  componentWillMount() {
    this.setState((state, props) => {
      return { data: this.props.getDataAction(this.state.value) };
    });
  }

  render() {
    console.log('this.state', this.state)

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
          <section className={styles.tableSection}></section>
        </main>
      </>
    );
  }
}

export default connect(null, { getDataAction })(SearchGoods);
