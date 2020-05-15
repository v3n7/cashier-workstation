const router = require("express").Router();
const db = require("../db")("user");

router.get("/findAll", async (req, res) => {
  return db.readData().then(res.jsend.success).catch(next);
});

//user create
router.post("/", (req, res, next) => {
  console.info(req.body);

  return db.addData(req.body)
    .then(() => {
      res.jsend.success(true);
    })
    .catch(next);
});

//user update
// router.put("/{:id}", (req, res) => {});

module.exports = router;
