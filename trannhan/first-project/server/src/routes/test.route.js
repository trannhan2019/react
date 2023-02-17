const express = require("express");
const testController = require("../controllers/test.controller.js");

const router = express.Router();

router.post("/", testController.onTest);

router.get("/get-user", testController.fetchUser);

module.exports = router;
