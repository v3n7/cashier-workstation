import { IUser } from "../models/User";
import bcrypt from "bcrypt";
import yup from "yup";
import { Request, Response, NextFunction } from "express";

const saltRounds = 10;

const router = require("express").Router();
const User = require("../models").default.User;
import async from "../middleware/asyncRequest";
import { type } from "os";
import { any } from "sequelize/types/lib/operators";

router.get("/findAll", (req: Request, res: Response, next: NextFunction) => {
  User.findAll({ attributes: { exclude: ["password"] } })
    .then(res.jsend.success)
    .catch(next);
});

const userSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().min(6).required(),
  address: yup.string(),
});

export interface IUserRequest extends Request {
  newUser: {
    username: string;
    password: string;
    address: string;
  }
}

//user create
router.post(
  "/",
  async(async (req: Request, res: Response) => {
    const newUser = await userSchema.validate(req.body);

    const salt = bcrypt.genSaltSync(saltRounds);
    newUser!.password = bcrypt.hashSync(req.newUser.password, salt);

    const user = await User.create(newUser);

    res.jsend.success(
      await User.findOne({
        attributes: { exclude: ["password"] },
        where: { id: user.id },
      })
    );
  })
);

//user update
// router.put("/{:id}", (req, res) => {});

export default router;
