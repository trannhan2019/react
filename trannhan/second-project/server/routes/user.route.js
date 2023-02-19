const router = require("express").Router();
const userController = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get(
  "/current",
  verifyToken.verifyAccessToken,
  userController.getCurrent
);
router.post("/refreshtoken", userController.refreshAccessToken);
router.get("/logout", userController.logout);
router.get("/forgotpassword", userController.forgotPassword);
router.put("/resetpassword", userController.resetPassword);

module.exports = router;
