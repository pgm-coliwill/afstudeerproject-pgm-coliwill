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
exports.volunteerForEvent = exports.attendEvent = exports.getEventsByYouthMovement = exports.createEvent = exports.uploadMiddleware = void 0;
const client_1 = require("@prisma/client");
const s3Uploader_1 = require("../utils/s3Uploader");
const prisma = new client_1.PrismaClient();
exports.uploadMiddleware = s3Uploader_1.uploadToS3.single("image");
const createEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, body, eventDate, location, groupId, signUp, volunteer, maxVolunteers, type, } = req.body;
    try {
        const event = yield prisma.event.create({
            data: {
                name,
                body,
                eventDate: new Date(eventDate),
                location: location !== null && location !== void 0 ? location : null,
                groupId: groupId ? Number(groupId) : null,
                signUp: signUp === "true",
                volunteer: volunteer === "true",
                maxVolunteers: maxVolunteers ? Number(maxVolunteers) : null,
                image: req.file ? req.file.location : null,
                type: req.body.type
            },
        });
        res.status(201).json(event);
    }
    catch (error) {
        console.error("❌ Error creating event:", error);
        res.status(500).json({ error: "Failed to create event." });
    }
});
exports.createEvent = createEvent;
const getEventsByYouthMovement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const youthMovementId = Number(req.params.id);
    try {
        const events = yield prisma.event.findMany({
            where: {
                group: {
                    youthMovementId,
                },
            },
            include: {
                attendees: true,
                volunteers: {
                    include: { user: true },
                },
            },
            orderBy: {
                eventDate: "asc",
            },
        });
        res.status(200).json(events);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch events" });
    }
});
exports.getEventsByYouthMovement = getEventsByYouthMovement;
const attendEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventId = Number(req.params.eventId);
    const { userId } = req.body;
    try {
        const attendee = yield prisma.attendee.create({
            data: {
                userId: Number(userId),
                eventId,
            },
        });
        res.status(201).json(attendee);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to attend event" });
    }
});
exports.attendEvent = attendEvent;
const volunteerForEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventId = Number(req.params.eventId);
    const { userId } = req.body;
    try {
        const volunteer = yield prisma.volunteer.create({
            data: {
                userId: Number(userId),
                eventId,
            },
        });
        res.status(201).json(volunteer);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to volunteer for event" });
    }
});
exports.volunteerForEvent = volunteerForEvent;
