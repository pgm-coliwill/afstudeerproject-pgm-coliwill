"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const youthMovementController_1 = require("../controllers/youthMovementController");
const youthMovementController_2 = require("../controllers/youthMovementController");
const router = express_1.default.Router();
router.post("/", youthMovementController_1.createYouthMovement);
router.get("/user/:userId", youthMovementController_2.getYouthMovementByUser);
exports.default = router;
