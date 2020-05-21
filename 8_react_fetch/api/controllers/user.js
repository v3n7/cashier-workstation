const bcrypt = require("bcrypt");
const saltRounds = 10;

const withAuth = require('../middleware/auth')

const router = require("express").Router();
const db = require("../db")("user");

router.get("/findAll", async (req, res) => {
  return db.readData().then(res.jsend.success).catch(next);
});

//user create
router.post("/", async (req, res, next) => {
  const users = await db.readData();
  const maxIdUser = users.reduce((previousValue, currentValue) => {
    return Math.max(previousValue, currentValue.id);
  }, 0);

  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const userData = {
    id: maxIdUser + 1,
    username: req.body.username || "",
    password: hash,
    address: req.body.address || "",
  };

  return db
    .addData(userData)
    .then(() => {
      res.jsend.success(true);
    })
    .catch(next);
});

//user update
// router.put("/{:id}", (req, res) => {});

module.exports = router;
