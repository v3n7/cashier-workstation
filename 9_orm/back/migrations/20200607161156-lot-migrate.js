const uuid = require("uuid").v4;

("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction(async (transaction) => {
    const [lotsData] = await queryInterface.sequelize.query(
      'select uid as "goodsUid", price, quantity, "arrivalDate", store, lot as "lotNumber", producer, "createdAt", "updatedAt" from "Goods";', {transaction}
    );

    lotsData.forEach((item) => {
      item.uid = uuid();
    });

    return queryInterface.bulkInsert("Lot", lotsData, { transaction});
  }),

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Lot", null);
  },
};
