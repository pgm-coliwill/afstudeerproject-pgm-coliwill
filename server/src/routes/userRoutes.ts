import express from "express";
import { getUser, createAdmin } from "../controllers/userController";


const router = express.Router();

router.get("/:cognitoId", getUser);
router.post("/", createAdmin);



export default router;
