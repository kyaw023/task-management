import express from "express";
import { Router } from "express";
import {
  checkSession,
  loginUser,
  registerUser,
} from "../controllers/authControllers";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check-session", authMiddleware, checkSession);

export default router;
