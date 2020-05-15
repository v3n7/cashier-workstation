const { AuthError } = require("../errors");

const getErrorMessage = (code) => {
  switch (code) {
    case 401:
      return "Неверные учётные данные";
    case 403:
      return "Доступ запрещен";
    case 404:
      return "Ресурс не найден";
    case 500:
      return "Сервис временно недоступен";
    default:
      return "Сервис временно недоступен";
  }
};

module.exports = (err, req, res, next) => {
  if (err instanceof AuthError) {
    return res.status(err.code).send(getErrorMessage(err.code));
  }
  res.status(500).send(getErrorMessage(500));
};
