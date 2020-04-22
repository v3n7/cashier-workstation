import React, { Component } from "react";

import styles from "./TableBody.module.css";

export default class TableBody extends Component {
  render() {
    return <tbody className={styles.tableProducts_content}></tbody>;
  }
}

export function insertPosition(event) {
  const table = document.getElementsByClassName(styles.tableProducts_content);
  if (table.length === 0) return;

  const rows = table[0].getElementsByTagName("tr");
  const countAll = rows.length;

  const text = event.srcElement.innerText;
  const position = {
    name: text,
    scaling: "1/1",
    count: 1,
    price: 10,
    pku: true,
    capasity: 5,
    location: "",
    store: "",
    discount: "Весна"
  }

  const newRow = createPosition({ ...position, numPosition: countAll + 1 });
  newRow.onclick = () => {
    for (let i = 0; i < rows.length; i++) {
      rows[i].classList.remove("selected");
    }

    newRow.classList.add("selected");
  };

  table[0].appendChild(newRow);
}

export function createPosition(position) {
  const {
    numPosition,
    name,
    scaling = "1/1",
    count = 1,
    price = 10,
    pku = true,
    capasity = 5,
    location = "",
    store = "",
    discount = "Весна",
  } = position;

  const numPositionTd = document.createElement("td");
  numPositionTd.innerText = numPosition;
  const nameTd = document.createElement("td");
  nameTd.innerText = name;
  const scalingTd = document.createElement("td");
  scalingTd.innerText = scaling;
  const countTd = document.createElement("td");
  countTd.innerText = count.toFixed(3);
  const priceTd = document.createElement("td");
  priceTd.innerText = price.toFixed(2);

  const sumTd = document.createElement("td");
  sumTd.innerText = (count * price).toFixed(2);

  const pkuCheckbox = document.createElement("input");
  pkuCheckbox.type = "checkbox";
  pkuCheckbox.checked = pku ? "checked" : undefined;
  pkuCheckbox.disabled = "disabled";
  const pkuTd = document.createElement("td");
  pkuTd.appendChild(pkuCheckbox);
  const capasityTd = document.createElement("td");
  capasityTd.innerText = capasity.toFixed(3);
  const locationTd = document.createElement("td");
  locationTd.innerText = location;
  const storeTd = document.createElement("td");
  storeTd.innerText = store;
  const discountTd = document.createElement("td");
  discountTd.innerText = discount;

  const row = document.createElement("tr");
  row.appendChild(numPositionTd);
  row.appendChild(nameTd);
  row.appendChild(scalingTd);
  row.appendChild(countTd);
  row.appendChild(priceTd);
  row.appendChild(sumTd);
  row.appendChild(pkuTd);
  row.appendChild(capasityTd);
  row.appendChild(locationTd);
  row.appendChild(storeTd);
  row.appendChild(discountTd);

  return row;
}
