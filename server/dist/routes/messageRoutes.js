"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/messageRoutes.ts
const express_1 = __importDefault(require("express"));
const messageController_1 = require("../controllers/messageController");
const router = express_1.default.Router();
router.get("/:user1Id/:user2Id", messageController_1.getMessagesBetweenUsers);
exports.default = router;
