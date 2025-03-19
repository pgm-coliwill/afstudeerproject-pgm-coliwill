"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const leadersGroupController_1 = require("../controllers/leadersGroupController");
const router = express_1.default.Router();
router.post("/", leadersGroupController_1.assignLeaderToGroups);
exports.default = router;
