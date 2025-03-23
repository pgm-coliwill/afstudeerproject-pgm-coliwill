"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const eventController_1 = require("../controllers/eventController");
const router = express_1.default.Router();
router.post("/", eventController_1.uploadMiddleware, eventController_1.createEvent);
router.get("/youthMovement/:id", eventController_1.getEventsByYouthMovement);
router.post("/:eventId/attend", eventController_1.attendEvent);
router.post("/:eventId/volunteer", eventController_1.volunteerForEvent);
exports.default = router;
