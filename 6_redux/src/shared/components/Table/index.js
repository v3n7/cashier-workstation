import React from "react";

import styles from "./Table.module.css";

export default function Table({ className, columns, data }) {
  const [selectedRow, setSelectedRow] = React.useState();

  const onClick = (event) => {    
    event.preventDefault();
    
    //const index = Number.parseInt(event.currentTarget.children[0].innerText);

    if (!!selectedRow) {
      selectedRow.removeAttribute("class");
    }

    event.currentTarget.setAttribute("class", styles.selected);

    setSelectedRow(event.currentTarget);
  };

  return (
    <table className={[styles.table, className].join(" ")}>
      <thead>
        <tr>
          {columns.map(({ title }, index) => (
            <th key={index}>
              <span>{title}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} onClick={onClick}>
            {columns.map(({ dataIndex }, index) => (
              <td key={index}>
                <span>{item[dataIndex] || ""}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
