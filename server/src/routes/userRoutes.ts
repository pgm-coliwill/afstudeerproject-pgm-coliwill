import express from "express";
import { getUser, createAdmin, createUser, updateUser } from "../controllers/userController";


const router = express.Router();

router.get("/:cognitoId", getUser);
router.post("/", createAdmin);
router.post("/create", createUser);
router.put("/:id", updateUser);




export default router;
