const uuid = require("uuid").v4;
const moment = require("moment");

("use strict");

const insertData = [
  {
    uid: "FC307125-513E-40BB-894B-965CFAE53C60",
    bonus: 0.0,
    name: "Но-шпа р-р в/в и в/м 20мг/мл 2мл №5",
    place: "",
    price: 107.61,
    unit: "1/1",
    quantity: 1.0,
    arrivalDate: "30.03.2020",
    store: "777 ОГЛФ",
    lot: "CCH24A",
    pku: false,
    r: true,
    shelfLife: "01.08.2024",
    producer: "Хиноин ЗАО",
  },
  {
    uid: "FC307125-513E-40BB-894B-965CFAE53C61",
    bonus: 0.0,
    name: "Но-шпа р-р в/в и в/м 20мг/мл 2мл №5",
    place: "",
    price: 106.84,
    unit: "1/1",
    quantity: 9.0,
    arrivalDate: "29.03.2020",
    store: "777 ОГЛФ",
    lot: "CCJ15A",
    pku: false,
    r: true,
    shelfLife: "01.09.2024",
    producer: "Хиноин ЗАО",
  },
  {
    uid: "FC307125-513E-40BB-894B-965CFAE53C62",
    bonus: 0.0,
    name: "Но-шпа таб. 40мг №100",
    place: "154",
    price: 269.8,
    unit: "1/1",
    quantity: 32.0,
    arrivalDate: "22.03.2020",
    store: "777 ОГЛФ",
    lot: "DV007",
    pku: false,
    r: false,
    shelfLife: "01.12.2024",
    producer: "Хиноин ЗАО",
  },
  {
    uid: "FC307125-513E-40BB-894B-965CFAE53C63",
    bonus: 0.0,
    name: "Но-шпа таб. 40мг №100",
    place: "154",
    price: 271.07,
    unit: "1/1",
    quantity: 98.0,
    arrivalDate: "25.03.2020",
    store: "777 ОГЛФ",
    lot: "DV014",
    pku: false,
    r: false,
    shelfLife: "01.12.2024",
    producer: "Хиноин ЗАО",
  },
  {
    uid: "FC307125-513E-40BB-894B-965CFAE53C64",
    bonus: 0.0,
    name: "Но-шпа таб. 40мг №100",
    place: "154",
    price: 273.14,
    unit: "1/1",
    quantity: 1.0,
    arrivalDate: "24.03.2020",
    store: "777 ОГЛФ",
    lot: "DV007",
    pku: false,
    r: false,
    shelfLife: "31.12.2024",
    producer: "Хиноин ЗАО",
  },
  {
    uid: "FC307125-513E-40BB-894B-965CFAE53C65",
    bonus: 0.0,
    name: "Но-шпа таб. 40мг №24",
    place: "154",
    price: 123.99,
    unit: "1/1",
    quantity: 11.0,
    arrivalDate: "22.02.2020",
    store: "777 ОГЛФ",
    lot: "CV147",
    pku: false,
    r: false,
    shelfLife: "31.08.2022",
    producer: "Хиноин ЗАО",
  },
  {
    uid: "FC307125-513E-40BB-894B-965CFAE53C66",
    bonus: 0.0,
    name: "Но-шпа таб. 40мг №24",
    place: "154",
    price: 123.99,
    unit: "1/1",
    quantity: 14.0,
    arrivalDate: "21.03.2020",
    store: "777 ОГЛФ",
    lot: "CV147",
    pku: false,
    r: false,
    shelfLife: "31.08.2022",
    producer: "Хиноин ЗАО",
  },
  {
    uid: "FC307125-513E-40BB-894B-965CFAE53C67",
    bonus: 0.0,
    name: "Но-шпа таб. 40мг №24",
    place: "154",
    price: 133.85,
    unit: "1/1",
    quantity: 39.0,
    arrivalDate: "30.03.2020",
    store: "777 ОГЛФ",
    lot: "CV182",
    pku: false,
    r: false,
    shelfLife: "30.09.2022",
    producer: "Хиноин ЗАО",
  },
  {
    bonus: 0.0,
    name: "Но-шпа таб. 40мг №24",
    place: "154",
    price: 133.85,
    unit: "1/1",
    quantity: 50.0,
    arrivalDate: "02.04.2020",
    store: "777 ОГЛФ",
    lot: "CV182",
    pku: false,
    r: false,
    shelfLife: "30.09.2022",
    producer: "Хиноин ЗАО",
  },
  {
    bonus: 0.0,
    name: "Но-шпа таб. 40мг №64",
    place: "154",
    price: 230.52,
    unit: "1/1",
    quantity: 1.0,
    arrivalDate: "12.03.2020",
    store: "777 ОГЛФ",
    lot: "CV203",
    pku: false,
    r: false,
    shelfLife: "31.10.2024",
    producer: "Хиноин ЗАО",
  },
  {
    bonus: 0.0,
    name: "Но-шпа таб. 40мг №64",
    place: "154",
    price: 230.52,
    unit: "1/1",
    quantity: 5.0,
    arrivalDate: "23.03.2020",
    store: "777 Робот",
    lot: "CV203",
    pku: false,
    r: false,
    shelfLife: "31.10.2024",
    producer: "Хиноин ЗАО",
  },
  {
    bonus: 0.0,
    name: "Но-шпа таб. 40мг №64",
    place: "154",
    price: 230.52,
    unit: "1/1",
    quantity: 5.0,
    arrivalDate: "26.03.2020",
    store: "777 ОГЛФ",
    lot: "CV203",
    pku: false,
    r: false,
    shelfLife: "31.10.2024",
    producer: "Хиноин ЗАО",
  },
  {
    bonus: 0.0,
    name: "Но-шпа таб. 40мг №64",
    place: "154",
    price: 229.42,
    unit: "1/1",
    quantity: 1.0,
    arrivalDate: "10.03.2020",
    store: "777 Робот",
    lot: "CV203",
    pku: false,
    r: false,
    shelfLife: "31.10.2024",
    producer: "Хиноин ЗАО",
  },
  {
    bonus: 0.0,
    name: "Но-шпа форте таб. 80мг №10",
    place: "154",
    price: 76.02,
    unit: "1/1",
    quantity: 11.0,
    arrivalDate: "12.03.2020",
    store: "777 Робот",
    lot: "CV203",
    pku: false,
    r: false,
    shelfLife: "30.04.2022",
    producer: "Хиноин ЗАО",
  },
  {
    bonus: 0.0,
    name: "Но-шпа форте таб. 80мг №24",
    place: "154",
    price: 176.6,
    unit: "1/1",
    quantity: 6.0,
    arrivalDate: "04.03.2020",
    store: "777 Робот",
    lot: "AV047",
    pku: false,
    r: false,
    shelfLife: "01.11.2021",
    producer: "Хиноин ЗАО",
  },
  {
    bonus: 0.0,
    name: "Но-шпа форте таб. 80мг №24",
    place: "154",
    price: 176.36,
    unit: "1/1",
    quantity: 6.0,
    arrivalDate: "22.03.2020",
    store: "777 Робот",
    lot: "CV010",
    pku: false,
    r: false,
    shelfLife: "31.01.2022",
    producer: "Хиноин ЗАО",
  },
  {
    bonus: 0.0,
    name: "Шпайк/speick крем д/бритья актив 75г",
    place: "",
    price: 307.0,
    unit: "1/1",
    quantity: 2.0,
    arrivalDate: "01.01.2019",
    store: "777 Робот",
    lot: "0671",
    pku: false,
    r: false,
    shelfLife: "01.06.2021",
    producer: "Вальтер Шопен",
  },
].map((item) => ({
  ...item,
  uid: uuid(),
  createdAt: moment().toISOString(),
  updatedAt: moment().toISOString(),
  arrivalDate: moment(item.arrivalDate, "dd.MM.yyyy").toISOString(),
  shelfLife: moment(item.shelfLife, "dd.MM.yyyy").toISOString(),
}));

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Goods", insertData);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Goods", null, {});
  },
};
