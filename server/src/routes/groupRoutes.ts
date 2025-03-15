import express from "express";
import { createGroups } from "../controllers/groupController";

const router = express.Router();

router.post("/", createGroups);

export default router;
