"use strict";
module.exports = (sequelize, DataTypes) => {
  const CheckPosition = sequelize.define(
    "CheckPosition",
    {
      name: DataTypes.STRING,
      sum: DataTypes.DECIMAL(20, 2),
      price: DataTypes.DECIMAL(20, 2),
      quantity: DataTypes.FLOAT,
    },
    {}
  );
  CheckPosition.associate = function (models) {
    models.CheckPosition.belongsTo(models.Check, {
      as: "check",
      foreignKey: "checkId",
    });
    models.CheckPosition.belongsTo(models.Goods, {
      as: "goods",
      foreignKey: "goodsUid",
      targetKey: "uid",
    });
  };
  return CheckPosition;
};
