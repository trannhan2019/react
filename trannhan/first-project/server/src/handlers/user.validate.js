import { body } from "express-validator";
import userModel from "../models/user.model.js";

const signup = () => {
  return [
    body("fullName")
      .exists()
      .withMessage("Full Name is required")
      .isLength({ min: 7 })
      .withMessage("Full Name minimum 7 characters"),
    body("email")
      .exists()
      .isEmail()
      .custom(async (value) => {
        const user = await userModel.findOne({ email: value });
        if (user) return Promise.reject("Account already used !");
      }),
    body("password")
      .exists()
      .withMessage("password is required")
      .isLength({ min: 7 })
      .withMessage("password minimum 7 characters"),
    body("confirmPassword")
      .exists()
      .withMessage("confirmPassword is required")
      .isLength({ min: 7 })
      .withMessage("confirmPassword minimum 7 characters")
      .custom((value, { req }) => {
        if (value !== req.body.password)
          throw new Error("confirmPassword not match");
        return true;
      }),
  ];
};

const signin = () => {
  return [
    body("email")
      .exists()
      .isEmail()
      .custom(async (value) => {
        const user = await userModel.findOne({ email: value });
        if (!user) return Promise.reject("Account no exists");
      }),
    body("password")
      .exists()
      .withMessage("password is required")
      .isLength({ min: 7 })
      .withMessage("password minimum 7 characters"),
  ];
};

export default { signup, signin };
