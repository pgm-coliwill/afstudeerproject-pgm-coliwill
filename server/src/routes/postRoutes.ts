import express from "express";
import { createPost, uploadMiddleware,getPostsByYouthMovement, deletePost,updatePost } from "../controllers/postcontroller";

const router = express.Router();


router.post("/", uploadMiddleware, createPost);
router.get("/youthMovement/:youthMovementId", getPostsByYouthMovement);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
