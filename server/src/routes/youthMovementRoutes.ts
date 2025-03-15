import express from "express";
import { createYouthMovement } from "../controllers/youthMovementController";
import { getYouthMovementByUser } from "../controllers/youthMovementController";

const router = express.Router();

router.post("/", createYouthMovement);
router.get("/user/:userId", getYouthMovementByUser);

export default router;