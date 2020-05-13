import React from "react";

import useEventListener from '@use-it/event-listener';

import { connect } from "react-redux";
import { addPosition, delPosition } from "redux/reducers/checkPositions";

import Table from "shared/components/Table";

import styles from "./TableCheck.module.css";
import tableStyles from "../../../../shared/components/Table/Table.module.css";

const columns = [
  { dataIndex: "numPosition", title: "" },
  { dataIndex: "name", title: "Наименование" },
  { dataIndex: "scaling", title: "Единица измерения" },
  { dataIndex: "count", title: "Кол-во" },
  { dataIndex: "price", title: "Цена" },
  { dataIndex: "sum", title: "Сумма" },
  { dataIndex: "pku", title: "ПКУ" },
  { dataIndex: "capasity", title: "Доступно" },
  { dataIndex: "location", title: "Место хранения" },
  { dataIndex: "store", title: "Склад" },
  { dataIndex: "discount", title: "Дисконт" },
];

function TableCheck({ data = [], addPosition, delPosition }) {
  const [selectedRow, setSelectedRow] = React.useState();

  const onClick = (event) => {
    event.preventDefault();

    if (!!selectedRow) {
      selectedRow.removeAttribute("class");
    }

    event.currentTarget.setAttribute("class", tableStyles.selected);

    setSelectedRow(event.currentTarget);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      addPosition({
        name: "Товар2",
        scaling: "1/1",
        count: 1,
        price: 10,
        pku: true,
        capacity: 5,
        location: "",
        store: "",
        discount: "Весна",
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, [addPosition]);

  useEventListener("keydown", (event) => {
    if (event.key === "F8") {
      event.preventDefault();

      delPosition({ selectedRow });
    }
  });

  return (
    <Table
      columns={columns}
      data={data}
      className={styles.table}
      onClick={onClick}
    />
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   addPosition: (item) => dispatch({ type: "ADD", item})
// })
export default connect(
  (state) => ({
    data: state.checkPositions,
  }),
  { addPosition, delPosition }
)(TableCheck);
