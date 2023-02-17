const { body, check } = require("express-validator");
const userModel = require("../models/user.model.js");

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

const updatePassword = () => {
  return [
    body("password")
      .exists()
      .withMessage("password is required")
      .isLength({ min: 7 })
      .withMessage("password minimum 7 characters"),
    body("newPassword")
      .exists()
      .withMessage("newPassword is required")
      .isLength({ min: 7 })
      .withMessage("newPassword minimum 7 characters"),
    body("confirmNewPassword")
      .exists()
      .withMessage("confirmNewPassword is required")
      .isLength({ min: 7 })
      .withMessage("confirmNewPassword minimum 7 characters")
      .custom((value, { req }) => {
        if (value !== req.body.newPassword)
          throw new Error("confirmNewPassword not match");
        return true;
      }),
  ];
};

const updateInfo = () => {
  return [
    body("fullName")
      .exists()
      .withMessage("Full Name is required")
      .isLength({ min: 7 })
      .withMessage("Full Name minimum 7 characters"),
    check("photo")
      .custom((value, { req }) => {
        if (!req.file) return true;
        if (
          req.file.mimetype === "image/png" ||
          req.file.mimetype === "image/jpg" ||
          req.file.mimetype === "image/jpeg"
        ) {
          return ".img";
        } else {
          return false;
        }
      })
      .withMessage("Please only submit image type."),
  ];
};

module.exports = { signup, signin, updatePassword, updateInfo };
