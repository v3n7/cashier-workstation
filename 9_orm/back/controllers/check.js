const async = require("../middleware/asyncRequest");

const router = require("express").Router();
const models = require("../models");
const Constants = require("../constants");

const yup = require("yup");

// const checkSchema = yup.object().shape({
//   date: yup.date().required(),
//   age: yup.number().required().positive().integer(),
//   email: yup.string().email(),
//   website: yup.string().url(),
//   createdOn: yup.date().default(function () {
//     return new Date();
//   }),
// });

//создать новый чек
router.post(
  "/",
  async(async (req, res) => {
    const check = await models.Check.create({
      date: new Date(),
      status: Constants.CHECK_STATUS_OPENED,
      operator: req.user.username,
      organizationName: "",
      organizationAddres: "",
      inn: "",
      totalSum: 0,
      userId: req.user.id,
    });
    return res.jsend.success(check);
  })
);

//добавить позицию
//удалить позицию
//закрыть чек

module.exports = router