import express from "express";
import { inviteUsers } from "../controllers/inviteController";
import { getInviteCode } from "../controllers/inviteController";

const router = express.Router();

router.post("/", inviteUsers); 
router.get("/:code", getInviteCode);

export default router;
