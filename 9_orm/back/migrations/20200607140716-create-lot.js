'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Lot', {
      uid: {
        allowNull: false,
        /* autoIncrement: true, */
        primaryKey: true,
        type: Sequelize.UUID
      },
      price: {
        type: Sequelize.DECIMAL
      },
      quantity: {
        type: Sequelize.FLOAT
      },
      arrivalDate: {
        type: Sequelize.DATE
      },
      lotNumber: {
        type: Sequelize.STRING
      },
      store: {
        type: Sequelize.STRING
      },
      goodsUid: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Goods",
          key: "uid"
        }
      },
      producer: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Lot');
  }
};