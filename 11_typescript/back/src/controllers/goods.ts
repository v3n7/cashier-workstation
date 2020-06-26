import { Request, Response } from 'express';
// const async = require("../middleware/asyncRequest");

const router = require("express").Router();
const models = require("../models").default;

import async from "../middleware/asyncRequest";
import yup from "yup";

const searchParamSchema = yup.object().shape({
  barcode: yup.number(),
  name: yup.string(),
});

router.get(
  "/findAll",
  async(async (req: Request, res: Response) => {
    const searchParam = await searchParamSchema.validate(req.query);
    const data = await models.Goods.findAll({ where: searchParam });
    return res.jsend.success(data);
  })
);

//добавить позицию
//удалить позицию
//закрыть чек

module.exports = router;
