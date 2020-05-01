import React, { Component } from "react";

export default class SearchGoods extends Component {
  onClick = (e) => {
    const { history } = this.props;

    history.push("/");
  };

  onButtonClick = () => {
    const searchElement = document.getElementsByClassName("searchGoods_input");
    
    localStorage.setItem("searchInput", searchElement[0].value);

    const { history } = this.props;

    history.push("/");
  };

  render() {
    return (
      <div>
        <header>
          <div>
            <label>
              Поиск
              <input
                type="text"
                className="searchGoods_input"
              />
              <button onClick={ this.onButtonClick }>Поиск</button>
            </label>
          </div>
        </header>
        <div>
          <a href="#" onClick={this.onClick}>
            Основная страница
          </a>
        </div>
      </div>
    );
  }
}
