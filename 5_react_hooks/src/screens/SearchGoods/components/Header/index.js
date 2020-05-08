import React from "react";
import Search from "../Search";

import styles from "./Header.module.css";

export default function Header(props) {
  const [searchValue, setSearchValue] = React.useState(props.searchValue);

  return (
    <header className={styles.SearchGoods_Header}>
      <Search searchValue={ searchValue } />
      <div>
        <div>
          <label>
            <input type="checkbox" />
            <span>Отображать все остатки</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            <span>Только остатки (Shift+F2)</span>
          </label>
        </div>
      </div>
      <div>
        <div>
          <label>
            <input type="checkbox" />
            <span>Аналоги (F7)</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            <span>Синонимы (F8)</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            <span>Описание (F9)</span>
          </label>
        </div>
      </div>
      <div>
        <div>
          <label>
            <input type="checkbox" />
            <span>Фигня 1</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            <span>Фигня 2</span>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            <span>Фигня 3</span>
          </label>
        </div>
      </div>
    </header>
  );
}
