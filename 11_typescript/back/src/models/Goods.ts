import { DataTypes, Sequelize, Model, BuildOptions } from "sequelize";

export const GoodsFactory = (sequelize: Sequelize) => {
  const Goods = sequelize.define("Goods", {
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
    lot: DataTypes.STRING,
    pku: DataTypes.BOOLEAN,
    r: DataTypes.BOOLEAN,
    shelfLife: DataTypes.DATE,
    producer: DataTypes.STRING,
    barcode: DataTypes.NUMBER, // NUMERIC
  });

  //@ts-ignore
  Goods.associate = function (models) {
    // associations can be defined here
  };
  return Goods;
};
