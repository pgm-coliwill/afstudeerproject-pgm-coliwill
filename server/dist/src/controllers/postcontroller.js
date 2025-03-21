"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.getPostsByYouthMovement = exports.createPost = exports.uploadMiddleware = void 0;
const client_1 = require("@prisma/client");
const s3Uploader_1 = require("../utils/s3Uploader"); // ✅ We'll use this for middleware
const prisma = new client_1.PrismaClient();
/**
 * ✅ Middleware for handling file uploads to S3.
 * Attach this to your POST /posts route.
 */
exports.uploadMiddleware = s3Uploader_1.uploadToS3.single("image");
/**
 * ✅ Create a new post
 */
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, body, userId, groupId } = req.body;
        const image = req.file ? req.file.location : null; // S3 file URL
        // ✅ Validate required fields
        if (!title || !body || !userId) {
            res.status(400).json({ error: "Title, body, and userId are required." });
            return;
        }
        // ✅ Create post in the database
        const post = yield prisma.post.create({
            data: {
                title,
                body,
                userId: parseInt(userId),
                groupId: groupId ? parseInt(groupId) : null,
                image,
            },
        });
        res.status(201).json(post);
    }
    catch (error) {
        console.error("❌ Error creating post with S3:", error);
        res.status(500).json({ error: "Failed to create post." });
    }
});
exports.createPost = createPost;
const getPostsByYouthMovement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { youthMovementId } = req.params;
    if (!youthMovementId) {
        res.status(400).json({ error: "Youth movement ID is required." });
        return;
    }
    try {
        const posts = yield prisma.post.findMany({
            where: {
                group: {
                    youthMovementId: Number(youthMovementId),
                },
            },
            include: {
                user: {
                    select: {
                        firstName: true,
                        lastName: true,
                        id: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        res.status(200).json(posts);
    }
    catch (error) {
        console.error("❌ Error fetching posts:", error);
        res.status(500).json({ error: "Failed to fetch posts" });
    }
});
exports.getPostsByYouthMovement = getPostsByYouthMovement;
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, body } = req.body;
    const image = req.file ? req.file.location : null;
    try {
        const existingPost = yield prisma.post.findUnique({ where: { id: Number(id) } });
        if (!existingPost) {
            res.status(404).json({ error: "Post not found" });
            return;
        }
        const updatedPost = yield prisma.post.update({
            where: { id: Number(id) },
            data: {
                title,
                body,
                image: image || existingPost.image, // If a new image is uploaded, use it. Otherwise, keep old.
            },
        });
        res.status(200).json(updatedPost);
    }
    catch (error) {
        console.error("❌ Error updating post:", error);
        res.status(500).json({ error: "Failed to update post" });
    }
});
exports.updatePost = updatePost;
// ✅ Delete a post
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.post.delete({ where: { id: Number(id) } });
        res.status(200).json({ message: "Post deleted successfully." });
    }
    catch (error) {
        console.error("❌ Error deleting post:", error);
        res.status(500).json({ error: "Failed to delete post" });
    }
});
exports.deletePost = deletePost;
