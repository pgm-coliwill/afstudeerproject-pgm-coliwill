import express from "express";
import {
  createEvent,
  getEventsByYouthMovement,
  attendEvent,
  volunteerForEvent,
  uploadMiddleware,
} from "../controllers/eventController";

const router = express.Router();

router.post("/", uploadMiddleware, createEvent);
router.get("/youthMovement/:id", getEventsByYouthMovement);
router.post("/:eventId/attend", attendEvent);
router.post("/:eventId/volunteer", volunteerForEvent);

export default router;