import React from "react";

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
      <div>
        <header>
          <form onSubmit={this.onSearch}>
            <label>
              Поиск
              <input
                type="text"
                value={this.state.value}
                onChange={(e) => this.setState({ value: e.target.value })}
              />
              <button type="submit">Поиск</button>
            </label>
          </form>
        </header>
        <div>
          <a href="#" onClick={this.goBack}>
            Основная страница
          </a>
        </div>
      </div>
    );
  }
}
