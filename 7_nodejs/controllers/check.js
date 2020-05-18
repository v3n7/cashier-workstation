const router = require("express").Router();
const db = require("../db")("check");

router.post("*", async (req, res, next) => {
  const data = JSON.parse(req.query.data);

  return db
    .writeData(data)
    .then(() => {
      res.jsend.success(true);
    })
    .catch(next);
});

module.exports = router;
