import express from "express";
import { createParentChild } from "../controllers/parentChildController";

const router = express.Router();

router.post("/", createParentChild); 

export default router;