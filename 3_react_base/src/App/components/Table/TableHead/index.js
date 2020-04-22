import React, { Component } from "react";

class TableHead extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th></th>
          <th>
            <span>Наименование</span>
          </th>
          <th>
            <span>Единица измерения</span>
          </th>
          <th>
            <span>Кол-во</span>
          </th>
          <th>
            <span>Цена</span>
          </th>
          <th>
            <span>Сумма</span>
          </th>
          <th>
            <span>ПКУ</span>
          </th>
          <th>
            <span>Доступно</span>
          </th>
          <th>
            <span>Место хранения</span>
          </th>
          <th>
            <span>Склад</span>
          </th>
          <th>
            <span>Дисконт</span>
          </th>
        </tr>
      </thead>
    );
  }
}

export default TableHead;
