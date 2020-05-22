const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Config = require("../config");
const { AuthError } = require("../errors");
const async = require("../middleware/asyncRequest");

const router = require("express").Router();
const db = require("../db")("user");

//login
router.post(
  "/login",
  async(async (req, res) => {
    const { username, password } = req.body;
    const users = await db.readData();
    const usersForCheck = users.filter((user) => user.username === username);
    const user = usersForCheck.find((user) =>
      bcrypt.compareSync(password, user.password)
    );

    if (!user) throw new AuthError("Неверные логин или пароль", 401);

    delete user.password;

    return res.jsend.success({
      user,
      token: jwt.sign({ id: user.id }, Config.SECRET),
    });
  })
);

module.exports = router;
