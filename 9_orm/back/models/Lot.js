"use strict";
module.exports = (sequelize, DataTypes) => {
  const Lot = sequelize.define(
    "Lot",
    {
      uid: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      price: DataTypes.DECIMAL(20, 2),
      quantity: DataTypes.FLOAT,
      arrivalDate: DataTypes.DATE,
      lotNumber: DataTypes.STRING,
      store: DataTypes.STRING,
      goodsUid: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      producer: DataTypes.STRING,
    },
    {}
  );
  Lot.associate = function (models) {
    models.Lot.belongsTo(models.Goods, {
      as: "goods",
      foreignKey: "goodsUid",
    });

    models.Goods.hasMany(models.Lot, { as: "Lot", foreignKey: "goodsUid", targetKey: "uid" });
  };
  return Lot;
};
