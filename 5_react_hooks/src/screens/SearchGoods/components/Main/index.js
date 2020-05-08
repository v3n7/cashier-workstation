import React from "react";
import styles from "./Main.module.css";
import TableRow from "./components/TableRow";

export default function Main(props) {
  const [searchValue, setSearchValue] = React.useState(props.searchValue);
  
    const data = [
    {
      number: 1,
      bonus: 0.00,
      name: "Но-шпа р-р в/в и в/м 20мг/мл 2мл №5",
      place: "",
      cost: 107.61,
      unit: "1/1",
      quantity: 1.000,
      date_of_arrival: "30.03.2020",
      store: "777 ОГЛФ",
      set: "CCH24A",
      pku: false,
      r: true,
      shelf_life: "01.08.2024",
      producer: "Хиноин ЗАО",
    },
    {
      number: 2,
      bonus: 0.00,
      name: "Но-шпа р-р в/в и в/м 20мг/мл 2мл №5",
      place: "",
      cost: 106.84,
      unit: "1/1",
      quantity: 9.000,
      date_of_arrival: "29.03.2020",
      store: "777 ОГЛФ",
      set: "CCJ15A",
      pku: false,
      r: true,
      shelf_life: "01.09.2024",
      producer: "Хиноин ЗАО",
    },
    {
      number: 3,
      bonus: 0.00,
      name: "Но-шпа таб. 40мг №100",
      place: "154",
      cost: 269.80,
      unit: "1/1",
      quantity: 32.000,
      date_of_arrival: "22.03.2020",
      store: "777 ОГЛФ",
      set: "DV007",
      pku: false,
      r: false,
      shelf_life: "01.12.2024",
      producer: "Хиноин ЗАО",
    },
    {
      number: 4,
      bonus: 0.00,
      name: "Но-шпа таб. 40мг №100",
      place: "154",
      cost: 271.07,
      unit: "1/1",
      quantity: 98.000,
      date_of_arrival: "25.03.2020",
      store: "777 ОГЛФ",
      set: "DV014",
      pku: false,
      r: false,
      shelf_life: "01.12.2024",
      producer: "Хиноин ЗАО",
    },
    {
      number: 5,
      bonus: 0.00,
      name: "Но-шпа таб. 40мг №100",
      place: "154",
      cost: 273.14,
      unit: "1/1",
      quantity: 1.000,
      date_of_arrival: "24.03.2020",
      store: "777 ОГЛФ",
      set: "DV007",
      pku: false,
      r: false,
      shelf_life: "31.12.2024",
      producer: "Хиноин ЗАО",
    },
    {
      number: 6,
      bonus: 0.00,
      name: "Но-шпа таб. 40мг №24",
      place: "154",
      cost: 123.99,
      unit: "1/1",
      quantity: 11.000,
      date_of_arrival: "22.02.2020",
      store: "777 ОГЛФ",
      set: "CV147",
      pku: false,
      r: false,
      shelf_life: "31.08.2022",
      producer: "Хиноин ЗАО",
    },
    {
      number: 7,
      bonus: 0.00,
      name: "Но-шпа таб. 40мг №24",
      place: "154",
      cost: 123.99,
      unit: "1/1",
      quantity: 14.000,
      date_of_arrival: "21.03.2020",
      store: "777 ОГЛФ",
      set: "CV147",
      pku: false,
      r: false,
      shelf_life: "31.08.2022",
      producer: "Хиноин ЗАО",
    },
    {
      number: 8,
      bonus: 0.00,
      name: "Но-шпа таб. 40мг №24",
      place: "154",
      cost: 133.85,
      unit: "1/1",
      quantity: 39.000,
      date_of_arrival: "30.03.2020",
      store: "777 ОГЛФ",
      set: "CV182",
      pku: false,
      r: false,
      shelf_life: "30.09.2022",
      producer: "Хиноин ЗАО",
    },
    {
      number: 9,
      bonus: 0.00,
      name: "Но-шпа таб. 40мг №24",
      place: "154",
      cost: 133.85,
      unit: "1/1",
      quantity: 50.000,
      date_of_arrival: "02.04.2020",
      store: "777 ОГЛФ",
      set: "CV182",
      pku: false,
      r: false,
      shelf_life: "30.09.2022",
      producer: "Хиноин ЗАО",
    },
    {
      number: 10,
      bonus: 0.00,
      name: "Но-шпа таб. 40мг №64",
      place: "154",
      cost: 230.52,
      unit: "1/1",
      quantity: 1.000,
      date_of_arrival: "12.03.2020",
      store: "777 ОГЛФ",
      set: "CV203",
      pku: false,
      r: false,
      shelf_life: "31.10.2024",
      producer: "Хиноин ЗАО",
    },
    {
      number: 11,
      bonus: 0.00,
      name: "Но-шпа таб. 40мг №64",
      place: "154",
      cost: 230.52,
      unit: "1/1",
      quantity: 5.000,
      date_of_arrival: "23.03.2020",
      store: "777 Робот",
      set: "CV203",
      pku: false,
      r: false,
      shelf_life: "31.10.2024",
      producer: "Хиноин ЗАО",
    },
    {
      number: 12,
      bonus: 0.00,
      name: "Но-шпа таб. 40мг №64",
      place: "154",
      cost: 230.52,
      unit: "1/1",
      quantity: 5.000,
      date_of_arrival: "26.03.2020",
      store: "777 ОГЛФ",
      set: "CV203",
      pku: false,
      r: false,
      shelf_life: "31.10.2024",
      producer: "Хиноин ЗАО",
    },
    {
      number: 13,
      bonus: 0.00,
      name: "Но-шпа таб. 40мг №64",
      place: "154",
      cost: 229.42,
      unit: "1/1",
      quantity: 1.000,
      date_of_arrival: "10.03.2020",
      store: "777 Робот",
      set: "CV203",
      pku: false,
      r: false,
      shelf_life: "31.10.2024",
      producer: "Хиноин ЗАО",
    },
    {
      number: 14,
      bonus: 0.00,
      name: "Но-шпа форте таб. 80мг №10",
      place: "154",
      cost: 76.02,
      unit: "1/1",
      quantity: 11.000,
      date_of_arrival: "12.03.2020",
      store: "777 Робот",
      set: "CV203",
      pku: false,
      r: false,
      shelf_life: "30.04.2022",
      producer: "Хиноин ЗАО",
    },
    {
      number: 15,
      bonus: 0.00,
      name: "Но-шпа форте таб. 80мг №24",
      place: "154",
      cost: 176.60,
      unit: "1/1",
      quantity: 6.000,
      date_of_arrival: "04.03.2020",
      store: "777 Робот",
      set: "AV047",
      pku: false,
      r: false,
      shelf_life: "01.11.2021",
      producer: "Хиноин ЗАО",
    },
    {
      number: 16,
      bonus: 0.00,
      name: "Но-шпа форте таб. 80мг №24",
      place: "154",
      cost: 176.36,
      unit: "1/1",
      quantity: 6.000,
      date_of_arrival: "22.03.2020",
      store: "777 Робот",
      set: "CV010",
      pku: false,
      r: false,
      shelf_life: "31.01.2022",
      producer: "Хиноин ЗАО",
    },
    {
      number: 17,
      bonus: 0.00,
      name: "Шпайк/speick крем д/бритья актив 75г",
      place: "",
      cost: 307.00,
      unit: "1/1",
      quantity: 2.000,
      date_of_arrival: "01.01.2019",
      store: "777 Робот",
      set: "0671",
      pku: false,
      r: false,
      shelf_life: "01.06.2021",
      producer: "Вальтер Шопен",
    },
  ];

  const rowArray = [];

  data.forEach((element) => { 
    for (let key in element) {
          if (!!~element[key].toString().toLowerCase().indexOf(searchValue.toLowerCase())) {
            rowArray.push(<TableRow value={ {...element, id: "PartiesWithAnalogs_string_" + element.number} } />);
            break;
          }
      }
  });

  return (
    <main>
      <div className={styles.PartiesWithAnalogs}>
        <div>
          <label>
            <span>Партии (подобраны с учетом аналогов и синонимов):</span>
            <table>
              <thead>
                <tr>
                  <td>Номер строки</td>
                  <td>Бонус пользователя</td>
                  <td>Наименование</td>
                  <td>Место</td>
                  <td>Цена</td>
                  <td>Единица измерения</td>
                  <td>Доступно</td>
                  <td>Дата прихода</td>
                  <td>Склад</td>
                  <td>Серия</td>
                  <td>ПКУ</td>
                  <td>Р...</td>
                  <td>Срок годности</td>
                  <td>Производитель</td>
                </tr>
              </thead>
              <tbody>
                {rowArray}
              </tbody>
            </table>
          </label>
        </div>
        <div className={styles.PartiesWithAnalogs_Description}>
          <label>
            <span>Описание:</span>
            <p>Описание партии</p>
          </label>
        </div>
      </div>
    </main>
  );
}
