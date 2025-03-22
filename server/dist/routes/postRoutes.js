"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postcontroller_1 = require("../controllers/postcontroller");
const router = express_1.default.Router();
router.post("/", postcontroller_1.uploadMiddleware, postcontroller_1.createPost);
router.get("/youthMovement/:youthMovementId", postcontroller_1.getPostsByYouthMovement);
router.put("/:id", postcontroller_1.uploadMiddleware, postcontroller_1.updatePost);
router.delete("/:id", postcontroller_1.deletePost);
exports.default = router;
