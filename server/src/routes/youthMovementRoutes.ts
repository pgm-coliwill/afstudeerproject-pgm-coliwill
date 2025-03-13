import express from "express";
import { createYouthMovement } from "../controllers/youthMovementController";

const router = express.Router();

router.post("/", createYouthMovement);

export default router;