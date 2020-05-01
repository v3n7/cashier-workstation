import React, { Component } from "react";

export default class SearchGoods extends Component {
  onClick = (e) => {
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
              <input type="text"></input>
              <button>Обновить (F5)</button>
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
