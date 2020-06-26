import { jsend } from 'jsend';
import { Request, NextFunction } from 'express';
// const async = require("../middleware/asyncRequest");

const router = require("express").Router();
// const models = require("../models");
import CheckService from "../core/CheckService";

// const yup = require("yup");
interface Response {
  ResBody: any;
  user: any;
  jsend: any;
}

//создать новый чек
router.post("/", (req: Request, res: Response, next: NextFunction) => {
  return new CheckService(res.user).createCheck().then(res.jsend.success).catch(next);
});

router.get("/:checkId(\\d+)", (req: Request, res: Response, next: NextFunction) => {
  return new CheckService(res.user)
    .getCheckWithPositions(req.params.checkId)
    .then(res.jsend.success)
    .catch(next);
});

//добавить позицию
//удалить позицию
//закрыть чек

export default router;
