const express = require("express");
const userController = require("../controllers/user.controller.js");
const requestHandler = require("../handlers/request.handler.js");
const userValidate = require("../handlers/user.validate.js");
const tokenMiddleware = require("../middlewares/token.middleware.js");
const upload = require("../utils/fileUpload.js");

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

router.put(
  "/update-info",
  tokenMiddleware.auth,
  upload.single("photo"),
  userValidate.updateInfo(),
  requestHandler.validate,
  userController.updateInfo
);

router.get("/get-user", tokenMiddleware.auth, userController.getUser);

module.exports = router;
