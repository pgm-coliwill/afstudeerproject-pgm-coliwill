// src/routes/messageRoutes.ts
import express from "express";
import { getMessagesBetweenUsers } from "../controllers/messageController";

const router = express.Router();

router.get("/:user1Id/:user2Id", getMessagesBetweenUsers);

export default router;