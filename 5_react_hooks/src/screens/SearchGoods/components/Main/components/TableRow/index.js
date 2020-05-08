import React from "react";

export default function TableRow(props) {
  const [value, setValue] = React.useState(props.value);

  return (
    <tr id={value.id}>
      <td>{value.number}</td>
      <td>{value.bonus}</td>
      <td>{value.name}</td>
      <td>{value.place}</td>
      <td>{value.cost}</td>
      <td>{value.unit}</td>
      <td>{value.quantity}</td>
      <td>{value.date_of_arrival}</td>
      <td>{value.store}</td>
      <td>{value.set}</td>
      <td>
        <input type="checkbox" checked={value.pku} disabled />
      </td>
      <td>
        <input type="checkbox" checked={value.r} disabled />
      </td>
      <td>{value.shelf_life}</td>
      <td>{value.producer}</td>
    </tr>
  );
}
