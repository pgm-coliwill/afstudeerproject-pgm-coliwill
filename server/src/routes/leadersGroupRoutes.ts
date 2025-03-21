import express from "express";
import { assignLeaderToGroups } from "../controllers/leadersGroupController";

const router = express.Router();

router.post("/", assignLeaderToGroups);

export default router;