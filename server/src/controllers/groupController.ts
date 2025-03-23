import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createGroups = async (req: Request, res: Response): Promise<void> => {
  try {
    const { groups } = req.body;

    const createdGroups = await prisma.group.createMany({
      data: groups,
    });

    res.status(201).json(createdGroups);
  } catch (error) {
    console.error("❌ Failed to create groups:", error);
    res.status(500).json({ message: "Error creating groups." });
  }
};

export const getGroupsFromYouthMovement = async (req: Request, res: Response): Promise<void> => {
  const { youthMovementId } = req.params;
  console.log("📌 Received request to fetch groups for Youth Movement ID:", youthMovementId); 

  try {
    const groups = await prisma.group.findMany({
      where: {
        youthMovementId: Number(youthMovementId),
      },
    });

   

    if (!groups.length) {
      console.warn("No groups found for Youth Movement ID:", youthMovementId);
      res.status(404).json({ message: "No groups found." });
      return;
    }

    res.json(groups);
  } catch (error) {
    console.error("Failed to get groups:", error);
    res.status(500).json({ message: "Error getting groups." });
  }
};
