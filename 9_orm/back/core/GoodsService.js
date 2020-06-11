const models = require("../models");
// const Constants = require("../constants");

class GoodsService {
  getGoods(goodsUid) {
    return models.Goods.findAll({ where: {uid: goodsUid},
      include: [{ model: models.Lot, as: "Lot", attributes: ["price", "quantity", "arrivalDate", "lotNumber"] }],
    });
  }
}

module.exports = GoodsService;
