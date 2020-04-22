import React from "react";
import { insertPosition } from '../../App/components/Table/TableBody/index.js';

import packageJSON from '../../data.json';

import styles from "./SearchGoods.module.css";

export default function SearchGoods() {
    return <div className={styles.input__modal}></div>; 
}

export async function onSearchPosition(text) {
    if (!text) return [];
  
    const data = packageJSON;
  
    const searchText = text.toLowerCase();
  
    return data
      .filter((item) =>
        item.normativedocumentation
          ? item.normativedocumentation.toLowerCase().indexOf(searchText) >= 0
          : false
      )
      .map((item) => ({ name: item.normativedocumentation }));
  }

export async function onSearch(text) {
    const positions = await onSearchPosition(text);
  
    console.log("positions", positions);
  
    const modal = document.getElementsByClassName(styles.input__modal);
    if (modal.length === 0) return;
  
    console.info({ positions });
  
    if (positions.length > 0) {
      const ul = document.createElement("ul");
      ul.classList.add(styles.input__list);
      positions.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = item.name;
        ul.appendChild(li);

        li.addEventListener(
          "click",
          insertPosition,
          li.textContent,
          modal
        );
      });
  
      modal[0].classList.add(styles.input__modal_show);
      modal[0].innerHTML = "";
      modal[0].appendChild(ul);
    } else {
      modal[0].classList.remove(styles.input__modal_show);
      modal[0].innerHTML = "";
    }
  }