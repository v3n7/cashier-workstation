const router = require("express").Router();
const db = require("../db")("goods");

router.get("/", async (req, res, next) => {
    return db.readData().then(res.jsend.success).catch(next);
});

module.exports = router;