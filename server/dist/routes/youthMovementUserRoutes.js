"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const youthMovementUserController_1 = require("../controllers/youthMovementUserController");
const router = express_1.default.Router();
router.get("/:youthMovementId", youthMovementUserController_1.getUsersByYouthMovement);
exports.default = router;
