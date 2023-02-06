import express from "express";
import authController from "../controllers/auth.controller";

const router = express.Router();

router.get("/test", authController.register);

export default router;
