import express from "express";
import { createGroups, getGroupsFromYouthMovement } from "../controllers/groupController";

const router = express.Router();

router.post("/", createGroups);
router.get("/youthMovement/:youthMovementId", getGroupsFromYouthMovement);


export default router;
