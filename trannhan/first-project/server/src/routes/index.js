const express = require("express");
const userRoute = require("./user.route.js");
const testRoute = require("./test.route.js");

const router = express.Router();

router.use("/user", userRoute);
router.use("/test", testRoute);

module.exports = router;
