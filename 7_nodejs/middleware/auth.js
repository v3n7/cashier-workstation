const { AuthError } = require("../errors");

module.exports = (req, res, next) => {
  //логика проверки аутентификации
  // throw new AuthError();

  req.user = { id: 12 };
  next();
};
