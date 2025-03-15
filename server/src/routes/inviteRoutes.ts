import express from "express";
import { inviteUsers } from "../controllers/inviteController";

const router = express.Router();

router.post("/", inviteUsers); 

export default router;
