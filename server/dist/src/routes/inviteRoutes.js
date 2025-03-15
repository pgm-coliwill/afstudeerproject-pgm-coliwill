"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inviteController_1 = require("../controllers/inviteController");
const router = express_1.default.Router();
router.post("/", inviteController_1.inviteUsers);
exports.default = router;
