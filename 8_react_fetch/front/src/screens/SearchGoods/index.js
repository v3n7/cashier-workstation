import React from "react";

import { connect } from "react-redux";

import Header from "shared/components/Header";
import IconButton from "shared/components/buttons/IconButton";
import { CloseIcon } from "shared/icons";

import goods, { getDataAction } from "../../redux/reducers/goods";

import styles from "./SearchGoods.module.css";
import Table from "shared/components/Table";
import tableStyles from "shared/components/Table/Table.module.css";

class SearchGoods extends React.Component {
  constructor(props) {
    super(props);
    const search = new URLSearchParams(this.props.location.search);
    this.state = {
      value: search.get("value"),
    };
    this.props.getDataAction(this.state.value);
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

  componentDidMount() {
    const search = new URLSearchParams(this.props.location.search);
    const value = search.get("value");

    if (this.state.value !== value) {
      this.setState({ value });
    }
  }

  render() {
    let columns = [
      "number",
      "bonus",
      "name",
      "place",
      "cost",
      "unit",
      "quantity",
      "arrival_date",
      "store",
      "set",
      "pku",
      "r",
      "shelf_life",
      "producer",
    ];

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
            <Table
              className={tableStyles.table}
              columns={ columns }
              data={this.props.goods}
            />
          </section>
        </main>
      </>
    );
  }
}

export default connect(
  (state) => {
    return { goods: state.goods };
  },
  { getDataAction }
)(SearchGoods);
