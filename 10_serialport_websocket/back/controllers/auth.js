const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Config = require("../config");
const { AuthError } = require("../errors");
const async = require("../middleware/asyncRequest");

const router = require("express").Router();
const User = require("../models").User;

//login
router.post(
  "/login",
  async(async (req, res) => {
    const { username, password } = req.body;

    const userCheck = await User.findOne({ where: { username } });
    if (!userCheck || !bcrypt.compareSync(password, userCheck.password)) {
      throw new AuthError("Неверные логин или пароль", 401);
    }

    const user = await User.findOne({
      attributes: { exclude: ["password"] },
      where: { id: userCheck.id },
    });

    return res.jsend.success({
      user,
      token: jwt.sign({ id: user.id }, Config.SECRET),
    });
  })
);

module.exports = router;
