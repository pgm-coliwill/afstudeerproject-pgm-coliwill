import express from "express";
import { getUsersByYouthMovement } from "../controllers/youthMovementUserController";


const router = express.Router();

router.get("/:youthMovementId", getUsersByYouthMovement);

export default router;
