import React from "react";

import useEventListener from "@use-it/event-listener";

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

function useKeyDown({ onDelete }) {
  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "F8") {
        event.preventDefault();
        onDelete && onDelete();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onDelete]);
}

function TableCheck({ data = [], addPosition, delPosition }) {
  const selected = React.useRef();

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

  const onSelectedRow = (index) => {
    selected.current = index;
  };

  useKeyDown({
    onDelete: () => {
      delPosition(selected.current);
    },
  });

  return (
    <Table
      columns={columns}
      data={data}
      className={styles.table}
      onSelectedRow={onSelectedRow}
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
