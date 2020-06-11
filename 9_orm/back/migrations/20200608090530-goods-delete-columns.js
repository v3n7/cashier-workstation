"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Goods", "price"),
      queryInterface.removeColumn("Goods", "quantity"),
      queryInterface.removeColumn("Goods", "arrivalDate"),
      queryInterface.removeColumn("Goods", "lot"),
      queryInterface.removeColumn("Goods", "store"),
      queryInterface.removeColumn("Goods", "producer"),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Goods", "price", {
        type: Sequelize.DECIMAL(20, 2),
      }),
      queryInterface.addColumn("Goods", "quantity", { type: Sequelize.FLOAT }),
      queryInterface.addColumn("Goods", "arrivalDate", {
        type: Sequelize.DATE,
      }),
      queryInterface.addColumn("Goods", "lot", { type: Sequelize.STRING }),
      queryInterface.addColumn("Goods", "store", { type: Sequelize.STRING }),
      queryInterface.addColumn("Goods", "producer", { type: Sequelize.STRING }),
    ]);
  },
};
