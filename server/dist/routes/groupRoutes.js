"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const groupController_1 = require("../controllers/groupController");
const router = express_1.default.Router();
router.post("/", groupController_1.createGroups);
router.get("/youthMovement/:youthMovementId", groupController_1.getGroupsFromYouthMovement);
exports.default = router;
