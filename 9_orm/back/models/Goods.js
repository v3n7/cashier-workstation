"use strict";

const uuid = require("uuid/v4");

module.exports = (sequelize, DataTypes) => {
  const Goods = sequelize.define(
    "Goods",
    {
      uid: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(20, 2),
      bonus: DataTypes.DECIMAL(20, 2),
      place: DataTypes.STRING,
      unit: DataTypes.STRING,
      quantity: DataTypes.FLOAT,
      arrivalDate: DataTypes.DATE,
      store: DataTypes.STRING,
      set: DataTypes.STRING,
      pku: DataTypes.BOOLEAN,
      r: DataTypes.BOOLEAN,
      shelfLife: DataTypes.DATE,
      producer: DataTypes.STRING,
    },
    {
      hooks: {
        beforeBulkCreate: (goods) => {
          return goods.map((item) => (item.uid = uuid()))
        }
      }
    }
  );

  Goods.beforeBulkCreate((goods) => goods.map((item) => (item.uid = uuid())));
  Goods.beforeCreate((goods) => (goods.uid = uuid()));

  Goods.associate = function (models) {
    // associations can be defined here
  };
  return Goods;
};
