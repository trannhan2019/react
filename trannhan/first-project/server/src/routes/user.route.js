import express from "express";
import userController from "../controllers/user.controller.js";
import requestHandler from "../handlers/request.handler.js";
import userValidate from "../handlers/user.validate.js";

const router = express.Router();

router.post(
  "/signup",
  userValidate.signup(),
  requestHandler.validate,
  userController.signup
);

router.post(
  "/signin",
  userValidate.signin(),
  requestHandler.validate,
  userController.signin
);

export default router;
