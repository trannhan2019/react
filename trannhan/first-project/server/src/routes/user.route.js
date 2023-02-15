import express from "express";
import userController from "../controllers/user.controller.js";
import requestHandler from "../handlers/request.handler.js";
import userValidate from "../handlers/user.validate.js";
import tokenMiddleware from "../middlewares/token.middleware.js";

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

router.put(
  "/update-password",
  tokenMiddleware.auth,
  userValidate.updatePassword(),
  requestHandler.validate,
  userController.updatePassword
);

router.get("/get-user", tokenMiddleware.auth, userController.getUser);

export default router;
