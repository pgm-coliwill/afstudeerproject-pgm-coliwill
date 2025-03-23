import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { uploadToS3 } from "../utils/s3Uploader";

const prisma = new PrismaClient();

export const uploadMiddleware = uploadToS3.single("image");

export const createEvent = async (req: Request, res: Response) => {
  const {
    name,
    body,
    eventDate,
    location,
    groupId,
    signUp,
    volunteer,
    maxVolunteers,
    type,
  } = req.body;

  try {
    const event = await prisma.event.create({
      data: {
        name,
        body,
        eventDate: new Date(eventDate),
        location: location ?? null,
        groupId: groupId ? Number(groupId) : null,
        signUp: signUp === "true",
        volunteer: volunteer === "true",
        maxVolunteers: maxVolunteers ? Number(maxVolunteers) : null,
        image: req.file ? (req.file as any).location : null,
        type:req.body.type
      },
    });

    res.status(201).json(event);
  } catch (error) {
    console.error("❌ Error creating event:", error);
    res.status(500).json({ error: "Failed to create event." });
  }
};

export const getEventsByYouthMovement = async (req: Request, res: Response) => {
  const youthMovementId = Number(req.params.id);
  try {
    const events = await prisma.event.findMany({
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
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
};

export const attendEvent = async (req: Request, res: Response) => {
  const eventId = Number(req.params.eventId);
  const { userId } = req.body;
  try {
    const attendee = await prisma.attendee.create({
      data: {
        userId: Number(userId),
        eventId,
      },
    });
    res.status(201).json(attendee);
  } catch (error) {
    res.status(500).json({ error: "Failed to attend event" });
  }
};

export const volunteerForEvent = async (req: Request, res: Response) => {
  const eventId = Number(req.params.eventId);
  const { userId } = req.body;
  try {
    const volunteer = await prisma.volunteer.create({
      data: {
        userId: Number(userId),
        eventId,
      },
    });
    res.status(201).json(volunteer);
  } catch (error) {
    res.status(500).json({ error: "Failed to volunteer for event" });
  }
};
