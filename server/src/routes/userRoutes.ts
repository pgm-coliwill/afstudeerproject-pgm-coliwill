import express from "express";
import { getUser, createAdmin, createUser } from "../controllers/userController";


const router = express.Router();

router.get("/:cognitoId", getUser);
router.post("/", createAdmin);
router.post("/create", createUser);




export default router;
